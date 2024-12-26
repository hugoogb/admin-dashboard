import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  status: statusEnum('status').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull()
});

export type SelectService = typeof services.$inferSelect;
export const insertserviceschema = createInsertSchema(services);

export async function getServices(
  search: string,
  offset: number
): Promise<{
  services: SelectService[];
  newOffset: number | null;
  totalservices: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      services: await db
        .select()
        .from(services)
        .where(ilike(services.name, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalservices: 0
    };
  }

  if (offset === null) {
    return { services: [], newOffset: null, totalservices: 0 };
  }

  let totalservices = await db.select({ count: count() }).from(services);
  let moreservices = await db.select().from(services).limit(5).offset(offset);
  let newOffset = moreservices.length >= 5 ? offset + 5 : null;

  return {
    services: moreservices,
    newOffset,
    totalservices: totalservices[0].count
  };
}

export async function deleteServiceById(id: number) {
  await db.delete(services).where(eq(services.id, id));
}
