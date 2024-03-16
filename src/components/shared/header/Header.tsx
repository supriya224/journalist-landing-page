/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="container mx-auto w-full  ">
        <div className="flex  text-lg mx-auto justify-between">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16">
            {/* logo */}
            <div>
              <img
                alt=""
                width={200}
                height={100}
                src="https://www.avaesa.com/img/logo.jpg"
                className="flex gap-1 font-bold text-gray-700 items-center w-[10rem]"
              />
            </div>
            {/* primary */}
            <div className="hidden lg:flex gap-8 justify-end">
              <Link to="/details">Details</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/feedback">Feedback</Link>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-6">
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button type="button" onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? 'h-0' : 'h-full'
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <Link to="/Details" className="border-l-4 border-gray-600">
              Details
            </Link>
            <Link to="/contact" className="border-l-4 border-gray-600">
              Contact
            </Link>
            <Link to="/feedback" className="border-l-4 border-gray-600">
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
