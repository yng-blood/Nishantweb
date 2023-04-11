import React, { useContext } from 'react'
import { store } from '../API/FuncionAPI'
import Bollywood from '../Bollywood/Bollywood';
import Hollyblog from '../Hollywood/Hollyblog';
import Bollywoodblog from '../Bollywood/Bollywoodblog'
import Travelblog from '../Travel/Travelblog';
import Foodblog from '../Food/Foodblog';
import '../../Basic.css'
const Home = ({item}) => {
    const [context]= useContext(store);
  return (
    <> 
    
    <div className='flexrow'>
          <div>
          <img className='img1' id='img1' style={{borderRadius:'10px'}} src='https://i.ytimg.com/vi/yjRHZEUamCc/maxresdefault.jpg' width='90%' height='400px' alt='404 error'/>
          </div>
          <div className='flexcol'>
            <div>
            <img className='img1' id='img1' style={{borderRadius:'10px',marginTop:'8px'}} src='https://www.thespruceeats.com/thmb/GHjwjGtQZC8P-dJZsHqqsenWbro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg'width='90%' height='190px' alt='404 error'></img>
            </div>
            <div>
            <img className='img1'id='img1' style={{borderRadius:'10px',marginTop:'8px'}}  src='https://classyindia.files.wordpress.com/2015/01/e343b-amarkantak.jpg' width='90%' height='190px' alt='404 error'></img>
            </div>
          </div>
    </div>
    <div>
      <h3>Latest</h3>
   <Hollyblog/>
   <Bollywoodblog/>
   <Travelblog/>
   <Foodblog/>
    </div>
    </>
  )
}

export default Home
