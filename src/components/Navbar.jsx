import { NavLink } from 'react-router-dom'
import pl from '../assets/pl.jpg'
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
          <div className="pl-img-container">
            <img src={pl} alt="pl img" className="pl-img" />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
