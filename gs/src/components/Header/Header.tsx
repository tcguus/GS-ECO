"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="text-verde  flex w-full h-14 items-center justify-between">
      <h1 className="font-bold text-4xl ml-4">Eco+</h1>
      <nav className="flex text-black list-none gap-10">
        <li
          className={`transform transition-transform hover:scale-110 ${
            pathname === "/" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/" rel="noopener noreferrer">
            Home
          </Link>
        </li>
        <li
          className={`transform transition-transform hover:text-verde hover:scale-110 ${
            pathname === "/compras" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/compras" rel="noopener noreferrer">
            Compras
          </Link>
        </li>
        <li
          className={`transform transition-transform hover:text-verde hover:scale-110 ${
            pathname === "/integrantes" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/integrantes" rel="noopener noreferrer">
            Integrantes
          </Link>
        </li>
        <li
          className={`transform transition-transform hover:text-verde hover:scale-110 ${
            pathname === "/sunbox" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/sunbox" rel="noopener noreferrer">
            Minha SUNBOX
          </Link>
        </li>
      </nav>
      <button className="flex items-center gap-2 border-2 border-verde pl-2 pr-2 rounded-xl mr-4 h-8">
        <FaUserCircle /> Login
      </button>
    </header>
  );
}
