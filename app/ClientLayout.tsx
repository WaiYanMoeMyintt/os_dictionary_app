'use client';
import React, { useState } from 'react';
import NavMenu from './component/NavMenu';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [icon, setIcon] = useState(false);

  return (
    <div className={!icon ? 'bg-slate-100 text-black' : 'bg-gray-900 text-white'}>
      <NavMenu icon={icon} setIcon={setIcon} />
      {children}
    </div>
  );
};

export default ClientLayout;
