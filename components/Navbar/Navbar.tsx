import Link from 'next/link';
import { useContext, useState } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const Navbar = () => {
  const { english, setEnglish } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  console.log("this is english", english);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  const handleLanguageToggle = () => {
    setEnglish(!english);
  };
  return (
    <section>
    <nav className="bg-sky-400 a">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" passHref>
                <h2 className="text-white font-semibold text-lg cursor-pointer">Víctor Cárdenas</h2>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/about" passHref>
                  <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</span>
                </Link>
                <Link href="https://vicarb.github.io/remotework" passHref>
                  <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Remote</span>
                </Link>
                <Link href="https://vicarb.github.io/art-gall" passHref>
                  <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Art Gallery</span>
                </Link>
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base text-xs rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleLanguageToggle}
                >
                  {english ? "ESP" : "ENG"}
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className=" w-6 h-6 text-white"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "flex" : "hidden"} mobile-menu`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" passHref>
              <span
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                About
              </span>
            </Link>
            <Link href="https://vicarb.github.io/remotework" passHref>
              <span className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
              >
              Remote
              </span>
              </Link>
              <Link href="https://vicarb.github.io/art-gall" passHref>
              <span
                           className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                           onClick={toggleMenu}
                         >
              Art Gallery
              </span>
              </Link>
              <button
                  className="ml-2 inline-flex items-center px-4 py-2 border border-transparent  text-xs rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleLanguageToggle}
                >
                  {english ? "ESP" : "ENG"}
                </button>
              </div>
              </div>
              </nav>

    </section>
  )
}

export default Navbar;
