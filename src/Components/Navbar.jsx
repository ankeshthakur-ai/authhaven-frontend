

import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-900/80 border-b border-gray-700 shadow-xl fixed top-0 left-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Inline SVG Shield Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-8 w-8 sm:h-10 sm:w-10 drop-shadow-lg">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            </svg>
            <span className="text-lg sm:text-2xl font-extrabold text-amber-400 drop-shadow-lg tracking-wide"><Link to="/">AuthHaven</Link></span>
          </div>
          {/* Hamburger Icon for mobile */}
          <button
            className="sm:hidden flex items-center px-3 py-2 border rounded text-amber-400 border-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
              {menuOpen ? (
                <path d="M6 6L14 14M6 14L14 6" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
          {/* Navigation Buttons */}
          <div className={`flex-col sm:flex-row gap-2 sm:gap-3 items-center absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-900/95 sm:bg-transparent border-t border-gray-700 sm:border-none shadow-xl sm:shadow-none z-40 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <Link to="/login" className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-gray-800 hover:bg-amber-400 hover:text-gray-900 text-white font-semibold shadow-lg transition duration-200 border border-gray-700 w-full sm:w-auto justify-center" onClick={() => setMenuOpen(false)}>
              <LogIn size={18} />
              <span className="text-base sm:text-lg">Login</span>
            </Link>
            <Link to="/signup" className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold shadow-lg transition duration-200 border-none w-full sm:w-auto justify-center" onClick={() => setMenuOpen(false)}>
              <UserPlus size={18} />
              <span className="text-base sm:text-lg">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
