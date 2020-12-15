import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/Simbolo-vertebra.svg'
import './styles/Home.css'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="home row">
          <div className="home__img col-8 align-self-center">
            <img src={Logo} alt="Simbolo vertebra"></img>
            <h1 className="text-center">Vertebra</h1>
          </div>
          <div className="col-4 align-self-center">
          <Link to='/inicio' className='btn btn-outline-light'>Ingresar</Link>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home