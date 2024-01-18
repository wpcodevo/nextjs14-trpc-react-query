'use client';

import { trpc } from '@/utils/trpc';

export default function Home() {
  let { data, isLoading, isFetching } = trpc.healthchecker.useQuery();
  if (isLoading || isFetching) return <p>Loading...</p>;

  return (
    <div className='text-xl font-bold'>
      <h1>Status: {data?.status}</h1>
      <h1>Message: {data?.message}</h1>
    </div>
  );
}
