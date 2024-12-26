'use server';

import { deleteServiceById } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteService(formData: FormData) {
  // let id = Number(formData.get('id'));
  // await deleteServiceById(id);
  // revalidatePath('/');
}
