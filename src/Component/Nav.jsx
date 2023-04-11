import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Bollywood from './Bollywood/Bollywood';
import Traveling from './Travel/Traveling';
import Hollywood from './Hollywood/Hollywood';
import Food from './Food/Food';
import { store } from './API/FuncionAPI';
import '../Basic.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IconName } from "react-icons/bs";
import FullviewBollywood from './Bollywood/FullviewBollywood';
import ReuseBollywood from './Bollywood/ReuseBollywood';
import ReuseHollywood from './Hollywood/ReuseHollywood';
import ReuseTraveling from './Travel/ReuseTraveling';
import FunctionAPI from './Rough';
import ReuseFood from './Food/ReuseFood';
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
  
    <div>
      <button className='Hamburger'
      onClick={toggleMenu}><svg style={{color:"white"}} width="22" height="11" fill="all" xmlns="http://www.w3.org/2000/svg"><path d="M1.52 2C1.22667 2 0.983333 1.90667 0.79 1.72C0.596667 1.52667 0.5 1.28667 0.5 1C0.5 0.713334 0.596667 0.476667 0.79 0.290001C0.983333 0.0966671 1.22667 0 1.52 0H16.48C16.7733 0 17.0167 0.0966671 17.21 0.290001C17.4033 0.476667 17.5 0.713334 17.5 1C17.5 1.28667 17.4033 1.52667 17.21 1.72C17.0167 1.90667 16.7733 2 16.48 2H1.52ZM1.52 7C1.22667 7 0.983333 6.90667 0.79 6.72C0.596667 6.52667 0.5 6.28667 0.5 6C0.5 5.71333 0.596667 5.47667 0.79 5.29C0.983333 5.09667 1.22667 5 1.52 5H16.48C16.7733 5 17.0167 5.09667 17.21 5.29C17.4033 5.47667 17.5 5.71333 17.5 6C17.5 6.28667 17.4033 6.52667 17.21 6.72C17.0167 6.90667 16.7733 7 16.48 7H1.52ZM1.52 12C1.22667 12 0.983333 11.9067 0.79 11.72C0.596667 11.5267 0.5 11.2867 0.5 11C0.5 10.7133 0.596667 10.4767 0.79 10.29C0.983333 10.0967 1.22667 10 1.52 10H16.48C16.7733 10 17.0167 10.0967 17.21 10.29C17.4033 10.4767 17.5 10.7133 17.5 11C17.5 11.2867 17.4033 11.5267 17.21 11.72C17.0167 11.9067 16.7733 12 16.48 12H1.52Z" fill="#1D1C1D"></path></svg></button>
  {showMenu && (
        <div className='block'> 
            <div className='Nav'><Link to='./' className='Nav' >Home</Link></div>
            <div className='Nav'><Link to='./Bollywood' className='Nav'>Bollywood</Link></div>
            <div className='Nav'><Link to='./Travel' className='Nav' >Traveling</Link></div>
            <div className='Nav'><Link to='./Hollywood' className='Nav'>Hollywood</Link></div>
            <div className='Nav'><Link to='./Food' className='Nav'>Food</Link></div>
            <div className='Nav'><Link to='./AboutUs' className='Nav'>AboutUs</Link></div>
            
        </div>
        )}
        <hr />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Bollywood' element={<Bollywood/>}/>
            <Route path='/Travel' element={<Traveling/>}/>
            <Route path='/Hollywood' element={<Hollywood/>}/>
            <Route path='/Food' element={<Food/>}/>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/ReuseBollywood/:id' element={<ReuseBollywood/>}/>
            <Route path='/ReuseHollywood/:id' element={<ReuseHollywood/>}/>
            <Route path='/ReuseTraveling/:id' element={<ReuseTraveling/>}/>
            <Route path='/ReuseFood/:id' element={<ReuseFood/>}/>
        </Routes>
       
    </div>

  </>
  )
}

export default Nav;