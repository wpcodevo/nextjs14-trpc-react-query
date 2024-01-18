'use client';

import UserForm from '@/components/user-form';
import ListUsers from '@/components/list-user';

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div className='w-full flex justify-center mb-8'>
        <UserForm />
      </div>
      <ListUsers />
    </main>
  );
}
