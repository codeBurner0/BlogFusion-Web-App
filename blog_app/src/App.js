import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import Contact from './Component/Contact'
import CreateBlog from './Component/CreateBlog'
import Blogs from './Component/Blogs'
import {Route,Routes } from 'react-router-dom';
import Home from './Component/Home'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Register from './Register'

function App() {
  return (
      <div>
        <Header/>
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/createblog' Component={CreateBlog} />
            <Route path='/Blogs' Component={Blogs} />
            <Route path='/Signup' Component={Signup} />
            <Route path='/Login' Component={Login} />
            <Route path='/Register' Component={Register} />
        </Routes>
      </div>
  )
}

export default App


// import React from 'react'
// import './App.css'
// function App() {
//   return (
    
//   )
// }

// export default App;
