import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default function NotFound() {
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
