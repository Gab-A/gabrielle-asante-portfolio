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
    const classes = activeSection === link ? "text-violet-400" : "";
    return (
      <Fragment key={link}>
        <li>
          <a
            href={`#${link[0].charAt(0).toLowerCase() + `${link.slice(1)}`}`}
            onClick={() => handleActiveLink(link)}
            className={classes}
          >
            {link}
          </a>
        </li>
      </Fragment>
    );
  });

  return (
    <header className="flex justify-between items-center -mt-0.5 px-3">
      <a href="/">
        <img src={logo} className="w-24 cursor-pointer" alt="logo"></img>
      </a>
      <button onClick={handleMenuOpen}>
        <img src={hamburgerMenu} alt="hamburger menu" />
      </button>
      {isMenuOpen && (
        <>
          <nav
            ref={navRef}
            className=" bg-white fixed top-0 right-0 bottom-0 w-3/4 shadow z-20"
          >
            <button onClick={handleMenuClose}>
              <img src={closeButton} className="absolute left-3/4" />
            </button>
            <ul className="flex flex-col gap-6 text-center text-[1.35rem] pt-20">
              {renderedLinks}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
