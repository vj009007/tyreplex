'use client'

import React from 'react'
import { Link } from "react-router-dom";
import { Menu, X ,User} from 'lucide-react'
import logo from "../assets/TP-logo.png"

const menuItems = [
  {
    name: 'Car Tyres',
    href: '/car-tyres',
  },
  {
    name: 'Bike Tyres',
    href: '/bike-tyres',
  },
  {
    name: 'Tyre Pressure',
    href: '/tyre-pressure',
  },
  {
    name: 'Commercial Tyres',
    href: '/commercial-tyres',
  },
  {
    name: 'Accessories',
    href: '/accessories',
  },
  {
    name: 'More',
    href: '/more',
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-white shadow-lg py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="inline-flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm font-medium text-gray-800 hover:text-[#ed1c24]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-[#ed1c24]"
            aria-label="Login"
          >
            <User /> Login
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" aria-label="Open menu" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img src={logo} alt="logo" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-[#ed1c24] px-3 py-2 text-sm font-semibold text-white shadow-sm inline-flex items-start justify-center gap-2 border border-solid border-[#ed1c24] hover:bg-transparent hover:text-[#ed1c24]"
                >
                 <User /> Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
