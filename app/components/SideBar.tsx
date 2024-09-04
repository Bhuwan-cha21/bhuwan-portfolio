"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed flex flex-col items-center justify-between py-6">
      {/* Header */}
      <div className="flex flex-col items-center">
        {/* Link to home page */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          Bhuwan Sharma
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-grow flex flex-col justify-center items-center">
        <ul className="space-y-2 text-center w-64">
          <li className="w-full">
            <Link 
              href="/skills" 
              className={`block text-2xl py-1 px-2 rounded w-full ${
                pathname === '/skills' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-300'
              } hover:bg-gray-700 hover:text-white`}
            >
              Skills
            </Link>
          </li>
          <li className="w-full">
            <Link 
              href="/projects" 
              className={`block text-2xl py-1 px-2 rounded w-full ${
                pathname === '/projects' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-300'
              } hover:bg-gray-700 hover:text-white`}
            >
              Projects
            </Link>
          </li>
          <li className="w-full">
            <Link 
              href="/contact" 
              className={`block text-2xl py-1 px-2 rounded w-full ${
                pathname === '/contact' ? 'bg-gray-700 text-white' : 'bg-gray-800 text-gray-300'
              } hover:bg-gray-700 hover:text-white`}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm">&copy; 2024 My Portfolio</p>
      </div>
    </div>
  );
}
