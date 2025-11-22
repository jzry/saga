'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white transition-all duration-150 ease-in-out md:border-b md:border-[rgba(0,0,0,0.05)] print:hidden">
      <div className="w-full max-w-screen-xl xl:mx-auto px-6 md:px-10">
        <div className="relative flex h-16 items-center justify-between">
          {/* Left section with logo and nav links */}
          <div className="flex items-center space-x-4 text-gray-600">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-900 font-mono">
              saga
            </Link>

            {/* Desktop navigation links */}
            <div className="hidden items-center sm:ml-6 md:flex">
              {/* Products dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className="cursor-pointer text-gray-600 my-4 rounded-md border-none px-2 py-1 text-sm font-medium no-underline transition-all hover:bg-gray-100 hover:text-gray-800 lg:mx-2"
                >
                  Products
                </button>
                {productsOpen && (
                  <div className="absolute left-0 mt-0 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 3</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  type="button"
                  className="text-gray-600 my-4 rounded-md border-none px-2 py-1 text-sm font-medium no-underline transition-all hover:bg-gray-100 hover:text-gray-800 lg:mx-2"
                >
                  Solutions
                </button>
                {solutionsOpen && (
                  <div className="absolute left-0 mt-0 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 3</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Developers dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setDevelopersOpen(true)}
                onMouseLeave={() => setDevelopersOpen(false)}
              >
                <button
                  type="button"
                  className="text-gray-600 my-4 rounded-md border-none px-2 py-1 text-sm font-medium no-underline transition-all hover:bg-gray-100 hover:text-gray-800 lg:mx-2"
                >
                  Developers
                </button>
                {developersOpen && (
                  <div className="absolute left-0 mt-0 w-48 rounded-md bg-white shadow-lg border border-gray-200">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md mx-2 my-1">Product 3</a>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/pricing">
                <div className="my-3 cursor-pointer rounded-md border-none px-2 py-1 text-sm font-medium no-underline transition-all hover:bg-gray-100 hover:text-gray-800 lg:mx-2">
                  Pricing
                </div>
              </Link>

              <Link href="/updates">
                <div className="my-3 cursor-pointer rounded-md border-none px-2 py-1 text-sm font-medium no-underline transition-all hover:bg-gray-100 hover:text-gray-800 lg:mx-2">
                  Updates
                </div>
              </Link>
            </div>
          </div>

          {/* Right section with mobile menu button and auth buttons */}
          <div>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                className="text-gray-600"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 5.667h12M2 10.333h12"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden space-x-4 md:flex">
              <Link href="/login">
                <button
                  type="button"
                  className="group hidden shrink-0 cursor-pointer items-center justify-center space-x-2 rounded-md px-[7px] py-[5px] text-sm font-medium text-gray-600 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-green-200 focus:ring-offset-2 sm:px-[10px] lg:flex"
                >
                  <div>Sign in</div>
                </button>
              </Link>

              <Link href="/signup">
                <button
                  type="button"
                  className="group flex shrink-0 cursor-pointer items-center justify-center space-x-2 rounded-md bg-gray-800 px-[7px] py-[5px] text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-gray-900 focus:outline-hidden focus:ring-2 focus:ring-green-200 focus:ring-offset-2 sm:px-[10px]"
                >
                  <div>Sign up</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-6 pb-3 pt-2">
            <button 
              onClick={() => setProductsOpen(!productsOpen)}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              Products
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Product 1</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Product 2</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Product 3</a>
              </div>
            )}
            
            <button 
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              Solutions
            </button>
            {solutionsOpen && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Solution 1</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Solution 2</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Solution 3</a>
              </div>
            )}
            
            <button 
              onClick={() => setDevelopersOpen(!developersOpen)}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            >
              Developers
            </button>
            {developersOpen && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Documentation</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">API Reference</a>
                <a href="#" className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100">Guides</a>
              </div>
            )}
            
            <a href="/fees" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
              Pricing
            </a>
            <a href="/updates" className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-800">
              Updates
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Link href="/login">
                <button className="w-full rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100">
                  Sign in
                </button>
              </Link>
              <Link href="/signup">
                <button className="w-full rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white hover:bg-gray-900">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}