import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full px-15 flex justify-between items-center mb-10">
      <Link to={"/"}>
        <div className="bLock w-25 h-15 bg-(--bg-secondary) flex items-center justify-center">
          <span className="text-(--text-primary) text-3xl font-bold">
            bLock
          </span>
        </div>
      </Link>
      <div className="nav-items flex gap-10 text-2xl ">
        <Link to="/">Clock</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/pomodoro">Pomodoro</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/qr">QR Generator</Link>
      </div>
    </div>
  );
}

export default Navbar;
