import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Image
        src={'/images/logo_full_utenbak.png'}
        alt="logo"
        width={200}
        height={100}
      ></Image>

      <p>Navbar incoming</p>
    </div>
  );
};

export default Navbar;
