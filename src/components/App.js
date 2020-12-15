import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Layout
import Front from './layout/Front'
import Back from './layout/Back'


//Pages
import Home from '../pages/Home'
import Suppliers from '../pages/Suppliers'
import Products from '../pages/Products'
import Stores from '../pages/Stores'
import Begin from '../pages/Begins'

//Funcion para multiple layout
const AppRoute = ({component:Component, layout:Layout, ...rest}) =>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)


function App(){
  return (
    <Router>
        <AppRoute exact path='/' layout={Front} component={Home}></AppRoute>
        <AppRoute exact path='/inicio' layout={Back} component={Begin}></AppRoute>
        <AppRoute exact path='/proveedores' layout={Back} component={Suppliers}></AppRoute>
        <AppRoute exact path='/productos' layout={Back} component={Products}></AppRoute>
        <AppRoute exact path='/tiendas' layout={Back} component={Stores}></AppRoute>
    </Router>
  )
}

export default App
