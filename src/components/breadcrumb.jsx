import { Link } from 'react-router-dom';
import React from 'react';
import { Home } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <nav className="flex w-full items-start rounded-md bg-white p-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2 gap-2 items-center"
          >
            <Home className="w-4" />
            Home
          </Link>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="mx-2.5 text-gray-800">/</span>
            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
              SHREE HEMKUNT TYRES AND SERVICES
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
