'use client';

import { trpc } from '@/utils/trpc';
import Image from 'next/image';

export default function ListUsers() {
  const { data } = trpc.getUsers.useQuery({ limit: 10, page: 1 });

  return (
    <>
      {data?.data.users.length === 0 ? (
        <p className='text-center'>No Users Found</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {data?.data.users?.map((user) => (
            <div
              key={user.id}
              className='flex flex-col justify-center items-center border-gray-200 border'
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width={180}
                height={180}
                className='block'
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
