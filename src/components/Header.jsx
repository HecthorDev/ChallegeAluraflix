import "../css/Header.css";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { FiPlus } from "react-icons/fi";
import logo_full from "../../assets/logo.png"; 
import logo_compact from "../../assets/logo.png"; 

const Header = () => {
  return (
    <header className="Header">
      <div className="Header_container">
        <Link to="/" className="no-select">
          <img
            className="Header_logo_full no-select"
            src={logo_full}
            alt="Logo"
          />
          <img
            className="Header_logo_compact"
            src={logo_compact}
            alt="Logo"
          />
        </Link>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {({ isActive }) => (
              <Button selected={isActive}>
                <span className="Header_text">HOME</span>
                <span className="Header_icon">
                  <GrHomeRounded />
                </span>
              </Button>
            )}
          </NavLink>
          <NavLink
            to="/newvideo"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {({ isActive }) => (
              <Button selected={isActive}>
                <span className="Header_text">NUEVO VIDEO</span>
                <span className="Header_icon Header_icon_add">
                  <FiPlus />
                </span>
              </Button>
            )}
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;