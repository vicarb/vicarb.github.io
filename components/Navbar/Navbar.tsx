import Link from 'next/link';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const Navbar = () => {
  const { english, setEnglish } = useContext(LanguageContext);
  console.log("this is english", english);
  

  const handleLanguageToggle = () => {
    setEnglish(!english);
  };
  return (
    <section>
    <nav className="bg-sky-400 a"> {/* Add a z-index value */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <h2 className="text-white font-semibold text-lg ">Víctor Cárdenas</h2>
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
        </div>
      </div>
    </nav>
    </section>
  )
}

export default Navbar;
