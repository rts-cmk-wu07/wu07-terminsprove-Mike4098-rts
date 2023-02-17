import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BiCaretUp } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";

import { Link } from "react-router-dom";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu((prevState) => !prevState);
  }

  function closeOnLink() {
    setShowMenu(false);
  }

  return (
    <nav className={`  z-10 ${showMenu ? " absolute inset-1 z-100" : null}`}>
      <ul className="flex" aria-label="Navigation bar">
        <li className={showMenu ? "opacity-1 pointer-events-none" : null}>
          <BiCaretUp
            size="38px"
            className="px-4 py-4 mx-1 box-content text-black"
          />
        </li>
        <li>
          {showMenu === false ? (
            <HiMenuAlt3
              onClick={toggleMenu}
              size="30px"
              className="px-4 py-4 mx-1 box-content text-black "
              aria-label="Toggle menu"
            />
          ) : (
            <RiCloseFill
              onClick={toggleMenu}
              size="30px"
              className="px-4 py-4 mx-1 box-content text-black "
              aria-label="Toggle menu"
            />
          )}
          {showMenu && (
            <ul
              onClick={closeOnLink}
              className="absolute inset-0 flex items-center mt-[10rem] flex-col text-2xl"
              role="menu"
              aria-label="Menu for navigation"
            >
              <li className="w-[90%]">
                <Link
                  className={`block text-center text-lg py-4 rounded-xl`}
                  role="menuitem"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="w-[90%]">
                <Link
                  className={`block text-center text-lg py-4  rounded-xl`}
                  role="menuitem"
                  to="/search"
                >
                  Search
                </Link>
              </li>

              <li className="w-[90%]">
                <Link
                  className={`block text-center text-lg py-4 rounded-xl `}
                  role="menuitem"
                  to="/login"
                >
                  Log in
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
