import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import '../Basic.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from '../BasicComponent/Home/Home';
import Productivity from '../BasicComponent/Productivity/Productivity';
import Contactus from '../BasicComponent/Productivity/Contactus/Contactus';
import Blanklogo from '../BasicComponent/Rough-space/Blanklogo';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
    <div className='logo'><Blanklogo/></div>
    <button className='NewHam' 
      onClick={toggleMenu}> <span className="ham">
      <span className="hamb"></span>
    </span>  </button>
  {showMenu && (
        <div className='blocks'> 
            <div className='Nav'><Link to='./' className='Nav' >Home</Link></div>
            <div className='Nav'><Link to='./Productivity' className='Nav'>productivity</Link></div>
            <div className='Nav'><Link to='./Contactus' className='Nav' >contactus</Link></div>            
        </div>


        )}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Productivity' element={<Productivity/>} />
            <Route path='/Contactus' element={<Contactus/>} />
        </Routes>
    </>
  )
}

export default Nav;