import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'
//import './styles/Navbar.css'
import designLogo from '../images/JC_negro.png'


class Navbar extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
          <div className='sidebar-sticky'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link to='/inicio' className='nav-link active'><span className='icon-home'></span> Inicio</Link>
              </li>
              <li className='nav-item'>
                <Link to='/productos' className='nav-link active'><span className='icon-cart'></span> Productos</Link>
              </li>
              <li className='nav-item'>
                <Link to='/proveedores' className='nav-link active'><span className='icon-drawer'></span> Proveedores</Link>
              </li>
              <li className='nav-item'>
                <Link to='/tiendas' className='nav-link active'><span className='icon-office'></span> Tiendas</Link>
              </li>
            </ul>
            <div className='nav-footer'>
              <span>By</span>
              <a href='/'>
                <img src={designLogo} height='20px' alt='Logo Jcaicedo'></img>
              </a>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navbar
