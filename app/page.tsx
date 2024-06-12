// app/page.tsx
'use client';
import React from 'react';
import ClientLayout from './ClientLayout';
import Search from './component/Search';

const Page = () => {
  return (
    <ClientLayout>
      <Search />
    </ClientLayout>
  );
};

export default Page;
