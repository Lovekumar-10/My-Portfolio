import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  // Scroll listener on window
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down → hide header
        setShowHeader(false);
      } else {
        // scrolling up → show header
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const openResume = () => {
  //   setOpen(false); // close mobile menu if open
  //   window.open("/ResumeLovekumar.pdf", "_blank", "noopener,noreferrer");
  // };
  const openResume = () => {
  setOpen(false);
  const link = document.createElement("a");
  link.href = "/ResumeLovekumar.pdf";
  link.download = "ResumeLovekumar.pdf";
  link.click();
};


  const navLinkStyle = `
    px-3 py-1
    relative
    font-bold-100
    text-black-700
    transition-all duration-200
    active:shadow-[0_0_0_0_#000]
    hover:text-black
    hover:font-bold-100
    hover:bg-yellow-400
    hover:shadow-[0px_0px_0_0_#c69405,2px_2px_0_0_#c69405]
  `;

  // const navItems = ["home", "projects", "contact"];
  const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];


  return (
    <>
    <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white border-b-[2px] border-black
          transition-transform duration-500 ease-out
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
        `}
      >

      {/* <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white border-b-[2px] border-black"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:py-4 flex items-center justify-between">

          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/love.gif"
              alt="logo"
              className="h-8 md:h-10 object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={navLinkStyle}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button onClick={openResume}>Resume</Button>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img
              src="/src/assets/menubar.gif"
              alt="Menu"
              className="w-8 h-8 md:w-10 md:h-10 object-cover"
            />
          </div>
        </div>
      </header>

      {/* Background Blur Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[48px] left-0 w-full z-50 overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 bg-white border-t">
          {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className={navLinkStyle}
              >
             {item.label}
            </Link>
          ))}
            <Button onClick={openResume}>Resume</Button>

        </nav>
      </div>
    </>
  );
};

export default Header;






