import { db, services } from 'lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    message: 'Uncomment to seed data after DB is set up.'
  });

  // await db.insert(services).values([
  //   {
  //     id: 1,
  //     imageUrl:
  //       'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/smartphone-gaPvyZW6aww0IhD3dOpaU6gBGILtcJ.webp',
  //     name: 'Detallado interior básico',
  //     status: 'active',
  //     price: '999.00'
  //   },
  //   {
  //     id: 2,
  //     imageUrl:
  //       'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/earbuds-3rew4JGdIK81KNlR8Edr8NBBhFTOtX.webp',
  //     name: 'Detallado interior premium',
  //     status: 'active',
  //     price: '199.00'
  //   },
  //   {
  //     id: 3,
  //     imageUrl:
  //       'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/home-iTeNnmKSMnrykOS9IYyJvnLFgap7Vw.webp',
  //     name: 'Detallado exterior',
  //     status: 'active',
  //     price: '149.00'
  //   },
  //   {
  //     id: 4,
  //     imageUrl:
  //       'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/tv-H4l26crxtm9EQHLWc0ddrsXZ0V0Ofw.webp',
  //     name: 'Detallado completo',
  //     status: 'active',
  //     price: '799.00'
  //   },
  //   {
  //     id: 5,
  //     imageUrl:
  //       'https://uwja77bygk2kgfqe.public.blob.vercel-storage.com/laptop-9bgUhjY491hkxiMDeSgqb9R5I3lHNL.webp',
  //     name: 'CarPlay/Android Auto inalámbrico',
  //     status: 'active',
  //     price: '1299.00'
  //   }
  // ]);

  // return Response.json({
  //   message: 'Data seed properly.'
  // });
}
