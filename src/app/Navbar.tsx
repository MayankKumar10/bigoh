'use client'

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <i className="text-white font-bold text-xl">Navbar</i>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/form">
                <i className="text-gray-300 hover:text-white">Form App</i>
              </Link>
              <Link href="/">
                <i className="text-gray-300 hover:text-white">Home Page</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
