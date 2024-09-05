import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <a href="#Main" className="logo">
        LOGO
      </a>

      <nav className="navbar">
        <a href="#Main">Home</a>
        <a href="\">Sobre</a>
        <a href="\">Portfolio</a>
        <a href="\">Serviços</a>
        <a href="\">Contato</a>
      </nav>
    </header>
    
  );
};

export default Navbar;
