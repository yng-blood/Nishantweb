import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { store } from '../API/FuncionAPI';
import Add from '../ADV/Add';


const Bollywood = () => {
  const [context] = useContext(store);

  return (
    <>
  <Add/>
      {context.filter((item) => item.catagory === 'Bollywood').map((item, i) => {
        return (
          <Link to={`/ReuseBollywood/${item.id}`} key={item.id}>
            <div>
              <img src={item.image} alt='not found' height={530} width={530} />
              <br/>
             <br/>
             <span className='Title'>{item.Title}</span>
             <br/><br/>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Bollywood;