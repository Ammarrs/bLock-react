import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Clock", path: "/" },
    { name: "Calculator", path: "/calculator" },
    { name: "QR Generator", path: "/qr" },
    { name: "More", path: "/more" },
  ];

  return (
    <div className="w-full px-15 flex justify-between items-center mb-10 relative">
      <Link to={"/"}>
        <div className="bLock w-25 h-15 bg-(--bg-secondary) flex items-center justify-center">
          <span className="text-(--text-primary) text-3xl font-bold">
            bLock
          </span>
        </div>
      </Link>
      <div className="nav-items gap-10 text-2xl hidden lg:flex">
        <Link to="/">Clock</Link>
        {/* <Link to="/weather">Weather</Link> */}
        {/* <Link to="/pomodoro">Pomodoro</Link> */}
        <Link to="/calculator">Calculator</Link>
        <Link to="/qr">QR Generator</Link>
        <Link to="/qr">More</Link>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="menu lg:hidden text-4xl cursor-pointer">
        {isOpen ? <IoClose/>: <IoMdMenu />}
      </button>

      {isOpen && (
        <div className="lg:hidden flex flex-col gap-5 mt-4 p-5 bg-(--bg-secondary) rounded-xl absolute right-15 top-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:opacity-70 transition-opacity duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
