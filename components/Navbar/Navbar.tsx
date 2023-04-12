import Link from 'next/link';

const Navbar = () => {
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
              <Link href="/about" passHref>
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Remote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </section>
  )
}

export default Navbar;
