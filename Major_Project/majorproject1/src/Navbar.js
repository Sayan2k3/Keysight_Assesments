import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">Shoppy</h1>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/category/electronics">Electronics</NavLink>
          <NavLink to="/category/clothing">Clothing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
