import React from 'react'

class Begin extends React.Component {

  render() {
    return (
    <React.Fragment>
      <main className='100vh col-md-10 ml-sm-auto col-lg-10 pt-3 px-4s'>
        <div className='text-center align-middle'>
          <h1 className='display-3 font-weight-bold '>Bienvenido al sistema de administración.</h1>
          <p className='text-muted'>Seleccione el ítem a consultar...</p>
        </div>
      </main>
    </React.Fragment>
      )
  }
}

export default Begin