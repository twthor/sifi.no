'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Darkmode from './darkmode';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-between justify md:justify-items-center pb-4 md:pb-2 md:px-96 bg-slate-100 dark:bg-gray-900 border-b-2 border-slate-200 md:border-slate-100">
      <div className="flex-shrink-0">
        <picture className="w-40 md:w-auto h-40 md:h-auto px-5">
          <Image
            src={'/images/logo_liten_utenbak.png'}
            alt="logo"
            width={50}
            height={25}
            className="object-contain"
          />
        </picture>
      </div>
      <div className="flex flex-row">
        <div className="space-x-4 md:mt-0 md:space-x-8 items-center text-center md:text-left">
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-900 dark:text-gray-100"
          >
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-gray-100"></span>
          </button>
          {/* LENKER */}
          <div
            className={`${isOpen ? 'block' : 'hidden'} flex flex-col md:flex-row md:flex md:items-center md:space-x-4 space-y-4 md:space-y-0`}
          >
            <div className="text-gray-900 dark:text-gray-100 mt-4 md:mt-0 text-lg md:text-xl font-semibold text-center md:text-left">
              <Link
                href="/"
                className="p-2 hover:underline hover:bg-sifiblue hover:text-white hover:rounded-full "
                onClick={toggleMenu}
              >
                Hjem
              </Link>
            </div>
            <div className="text-gray-900 dark:text-gray-100 mt-4 md:mt-0 text-lg md:text-xl font-semibold text-center md:text-left">
              <Link
                href="/arrangementer"
                className="p-2 hover:underline hover:bg-sifiblue hover:text-white hover:rounded-full "
                onClick={toggleMenu}
              >
                Arrangementer
              </Link>
            </div>
            <div className="text-gray-900 dark:text-gray-100 mt-4 md:mt-0 text-lg md:text-xl font-semibold text-center md:text-left">
              <Link
                href="/stillingsannonser"
                className="p-2 hover:underline hover:bg-sifiblue hover:text-white hover:rounded-full "
                onClick={toggleMenu}
              >
                Stillingsannonser
              </Link>
            </div>
            <div className="text-gray-900 dark:text-gray-100 mt-4 md:mt-0 text-lg md:text-xl font-semibold text-center md:text-left">
              <Link
                href="/about"
                className="p-2 hover:underline hover:bg-sifiblue hover:text-white hover:rounded-full "
                onClick={toggleMenu}
              >
                Om oss
              </Link>
            </div>
            <div className="text-gray-900 dark:text-gray-100 mt-4 md:mt-0 text-lg md:text-xl font-semibold text-center md:text-left">
              <Link
                href="/si-ifra"
                className="p-2 hover:underline hover:bg-sifiblue hover:text-white hover:rounded-full "
                onClick={toggleMenu}
              >
                Si ifra
              </Link>
            </div>
          </div>
        </div>
        <Darkmode></Darkmode>
      </div>
    </div>
  );
};

export default Navbar;
