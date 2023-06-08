import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <img
      alt="logo"
      src='https://w7.pngwing.com/pngs/384/470/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo-thumbnail.png'
      className='logo'
      ></img>
     { auth ? <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
        :
        <ul className='nav-ul nav-right'>
         <li> <Link to ="/signup">Sign up</Link></li>
         <li><Link to ="/login">Login</Link></li>
        </ul>
}
    </div>

  )

}
export default Nav;