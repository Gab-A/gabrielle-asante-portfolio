import { Fragment, useState, useEffect, useRef } from "react";
import logo from "../../assets/logo/logo.svg";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import closeButton from "../../assets/icons/close-button.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const navRef = useRef();

  useEffect(() => {
    const handleClickOutsideNav = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideNav, true);

    return () => {
      document.removeEventListener("click", handleClickOutsideNav);
    };
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleActiveLink = (section) => {
    setActiveSection(section);
  };

  const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

  const renderedLinks = NAV_LINKS.map((link) => {
    return (
      <Fragment key={link}>
        <li className="md:hover:scale-105">
          <a
            href={`#${link[0].charAt(0).toLowerCase() + `${link.slice(1)}`}`}
            onClick={() => handleActiveLink(link)}
            className="hover:text-violet-400"
          >
            {link}
          </a>
        </li>
      </Fragment>
    );
  });

  return (
    <header className="w-full">
      <div className="flex justify-between items-center -mt-0.5 px-3 md:px-5 lg:px-8">
        <a href="/">
          <img
            src={logo}
            className="w-24 cursor-pointer lg:w-28"
            alt="logo"
          ></img>
        </a>
        <button onClick={handleMenuOpen} className="md:hidden">
          <img src={hamburgerMenu} alt="hamburger menu" />
        </button>
        <>
          <nav
            ref={navRef}
            className={`bg-white fixed top-0 right-0 bottom-0 w-3/4 shadow z-20 transform transition-transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0 md:w-auto md:relative md:flex md:shadow-none md:items-end`}
          >
            {isMenuOpen && (
              <button onClick={handleMenuClose} className="md:hidden">
                <img src={closeButton} className="absolute left-3/4" />
              </button>
            )}
            <ul className="flex flex-col gap-6 text-center text-[1.35rem] pt-20 md:flex-row md:gap-5 md:text-[1.115rem] md:pt-0 md:mr-4 lg:text-[1.32rem]">
              {renderedLinks}
            </ul>
          </nav>
        </>
      </div>
    </header>
  );
}
