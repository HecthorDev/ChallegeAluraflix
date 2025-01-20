import "../css/Footer.css";
import logo from "../../assets/logo.png"; // Importar el logo directamente
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="Footer">
      <img src={logo} alt="Logo Aluraflix" onClick={scrollToTop} />
      <p className="no-select">Desarrollado por HecthorDev</p>
      <div className="Footer_icons_container">
        <a
          href="https://linkedin.com/in/hector19garcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/HecthorDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;