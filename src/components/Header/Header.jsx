import { Fragment, useState } from "react";
import logo from "../../assets/logo/logo.svg";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import closeButton from "../../assets/icons/close-button.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleActiveLink = (section) => {
    setActiveSection(section);
  };

  const NAV_LINKS = ["About", "Projects", "Contact"];

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
      <img src={logo} className="w-24 cursor-pointer" alt="logo" />
      <button>
        <img
          src={hamburgerMenu}
          alt="hamburger menu"
          onClick={handleMenuOpen}
        />
      </button>
      {isMenuOpen && (
        <>
          <nav className="bg-white fixed top-0 right-0 bottom-0 w-64 shadow">
            <button>
              <img
                src={closeButton}
                onClick={handleMenuClose}
                className="pl-48 pt-3"
              />
            </button>
            <ul className="flex flex-col gap-6 text-center text-xl">
              {renderedLinks}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
