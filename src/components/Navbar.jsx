import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container'

const Navbar = () => {
  return (
      <nav className="navbar justify-content-start">
          <Link className="px-2" to="/"> Home </Link> | <Link className="px-2" to="/favoritos"> Favoritos </Link>
      </nav>
  );
};
export default Navbar;
