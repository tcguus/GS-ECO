"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import style from "../../app/styles/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={style.header}>
      <h1 className={style.eco}>Eco+</h1>
      <nav className={style.nav}>
        <li
          className={`${style.liHome} ${
            pathname === "/" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/" rel="noopener noreferrer">
            Home
          </Link>
        </li>
        <li
          className={`${style.li} ${
            pathname === "/compras" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/compras" rel="noopener noreferrer">
            Compras
          </Link>
        </li>
        <li
          className={`${style.li} ${
            pathname === "/sunbox" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/sunbox" rel="noopener noreferrer">
            Minha SUNBOX
          </Link>
        </li>
        <li
          className={`${style.li} ${
            pathname === "/integrantes" ? "text-verde underline" : ""
          }`}
        >
          <Link href="/integrantes" rel="noopener noreferrer">
            Integrantes
          </Link>
        </li>
      </nav>
      <div className={style.menuContainer}>
        <IoMenu className={style.menuIcon} onClick={toggleMenu} />
        {isMenuOpen && (
          <div className={style.dropdownMenu}>
            <ul>
              <li
                className={`${style.liHome} ${
                  pathname === "/" ? style.active : ""
                }`}
              >
                <Link href="/" rel="noopener noreferrer">
                  Home
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/compras" ? style.active : ""
                }`}
              >
                <Link href="/compras" rel="noopener noreferrer">
                  Compras
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/sunbox" ? style.active : ""
                }`}
              >
                <Link href="/sunbox" rel="noopener noreferrer">
                  Minha SUNBOX
                </Link>
              </li>
              <li
                className={`${style.li} ${
                  pathname === "/integrantes" ? style.active : ""
                }`}
              >
                <Link href="/integrantes" rel="noopener noreferrer">
                  Integrantes
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button className={style.button}>
        <FaUserCircle /> Login
      </button>
    </header>
  );
}