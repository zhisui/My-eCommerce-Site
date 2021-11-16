import React from 'react'
import './App.css'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/umd/popper'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar'
import CustomersList from './components/CustomersList'
import ShoppingCart from './components/ShoppingCart'

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <ShoppingCart />
    </div>
  )
}
export default App
