import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Sport from './components/Sport'
import Economy from './components/Economy'
import Cultur from './components/Cultur'
import Health from './components/Health'
import Magazine from './components/Magazine'
import Nature from './components/Nature'
import Travel from './components/Travel'
import Help from './components/Help'
import About from './components/About'
import Contact from './components/Contact'
import Football from './pages/Football'
import Basketball from './pages/Basketball'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sport' element={<Sport></Sport>}>
          <Route path='basketball' element={<Basketball/>}></Route>
          <Route path='football' element={<Football/>}></Route>
        </Route>
        <Route path='/economy' element={<Economy></Economy>}></Route>
        <Route path='/cultur' element={<Cultur></Cultur>}></Route>
        <Route path='/health' element={<Health></Health>}></Route>
        <Route path='/magazine' element={<Magazine></Magazine>}></Route>
        <Route path='/nature' element={<Nature></Nature>}></Route>
        <Route path='/travel' element={<Travel></Travel>}></Route>
        <Route path='/help' element={<Help></Help>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App