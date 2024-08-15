import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">Pizza Store</NavLink>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/display-items">Display Items</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/add-item">Add New Item</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
