import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css'
import Logo from '../images/Simbolo-vertebra.svg'

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav className='sticky-top bg-dark d-flex justify-content-between'>
          <Link to='/' className='Navbar__brand col-10 col-md-10'>
            <img className='Navbar__brand-logo' src={Logo} alt="Logo Vertebra"></img>
            <span className="font-weight-bold">Impulsamos el cambio.</span>
          </Link>
          <Link to='/' className='Navbar__brand col-1 col-md-2'>
            <button type="button" className="btn btn-outline-light">Salir</button>
          </Link>
        </nav>
      </React.Fragment>

    )
  }
}

export default Header
