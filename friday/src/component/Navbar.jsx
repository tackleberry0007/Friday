import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './01Home'
  import About from './02About'
  import State from './State'
  import StateRevision from './State-Revision';
  import Compo from './compo'
  import UseState from './functionCompo/UseState'
  import UseEffect from './functionCompo/UseEffect';
  import FetchAPI from './functionCompo/FetchAPI'
function Navbar(props) {
  const Menus = {'/home':'Home','/about':'About','/state':'State','/staterevision':'StateRevision','/compo':'Compo','/usestate':'UseState','./useeffect':'UseEffect','./useeffect':'UseEffect','/fetchapi':'FetchAPI'}
  const ResultData = Object.entries(Menus).map((res,i)=>{
    console.log(i);
   return <li className="nav-item" key={i}>
    <Link className="nav-link active" aria-current="page" to={res[0]} >{res[1]}</Link>
  </li>
  })
    return (
        <>
        <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/home'} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>About</Link>
        </li>
        */}

        {ResultData}
       
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/state' element={<State/>} />
    <Route path='/staterevision' element={<StateRevision/>} />
    <Route path='/compo' element={<Compo/>} />
    <Route path='/usestate' element={<UseState/>} />
    <Route path='/useeffect' element={<UseEffect/>} />
    <Route path='/fetchapi' element={<FetchAPI/>} />



    







</Routes>
</Router>
            
        </>
    );
}

export default Navbar;