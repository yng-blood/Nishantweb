import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../API/FuncionAPI';
import '../../Basic.css'
import Add from '../ADV/Add';


const Bollywood = () => {
  const [context] = useContext(store);

  return (
    <><Add/>
    <div className='HollywoodContainer'>
      {context.filter((item) => item.catagory === 'Hollywood1').map((item, i) => {
        return (
          <Link to={`/ReuseHollywood/${item.id}`} key={item.id} >
            <div>
              <img src={item.image} alt='not found' height={330} width={230} />
              <br/>
              <br/>            
              <div className='Title' >{item.Title}</div>
              <br/>
            </div>
          </Link>
        );
      })}

    </div >
    
    </>
  );
};

export default Bollywood;