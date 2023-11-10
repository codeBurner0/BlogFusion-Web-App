import React from 'react'
import Header from './Component/Header'
import About from './Component/About'
import Contact from './Component/Contact'
import CreateBlog from './Component/CreateBlog'
import Blogs from './Component/Blogs'
import {Route,Routes } from 'react-router-dom';
import Home from './Component/Home'
import Login from './Component/Login'
import Footer2 from './Component/Footer2'

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
            <Route path='/Login' Component={Login} />
        </Routes>
        <Footer2/>
      </div>
  )
}

export default App