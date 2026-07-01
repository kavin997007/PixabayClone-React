import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/SignUp/Signup'
import Home from './Pages/Home/Home'
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/login' element = {<Login/>} />
            <Route path='/' element = {<Signup/>} />
            <Route path='/home' element = {
                <PrivateRoute>
                    <Home/>
                </PrivateRoute>
            } />
            <Route path='*' element = { <h1>404 Error</h1> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



      
