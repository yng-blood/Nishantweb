import React from 'react'
import '../Basic-work.css'
import Videoslider from '../Videoslider/Videoslider'
import Blankspace from '../Rough-space/Blankspace'
const Home = () => {
  return (
    <div>
      <div className='testnew Bigbox'>
      <div className='TitlesN' >Welcome to Nishant's Wedding Video Creations <br/></div>
"Transforming Your Special Moments into Lasting Memories"
"Capture the beauty, joy, and love of your wedding day 
with our expert video production and editing services. 
From candid moments to grand celebrations, we create
 stunning wedding videos that tell your unique love
  story."</div>


  <div className='videosplay' id='diffrentbox1'> 
  <p > Here is some of the example for Advertisements </p>
 <Videoslider/>
 </div>
<div className='Fixing-V-Image'>
   

</div>
<Blankspace/>





     </div>
  )
}

export default Home