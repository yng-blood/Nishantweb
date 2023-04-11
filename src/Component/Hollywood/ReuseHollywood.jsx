import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { store } from '../API/FuncionAPI';
import '../../Basic.css'
const ReuseHollywood = () => {
  const { id } = useParams(); 
  const [context] = useContext(store);
  const item = context.find((item) => item.id === parseInt(id)); // Find the item with the matching id
  
  return (
    <div className='bollywoodContainer'>
      <center>
      <h2 className='re'>{item.Title}</h2>
      <img src={item.image} alt='not found' height={530} width={530}/>
      <h3>{item.Blog}</h3>
      </center>
    </div>
  );
};

export default ReuseHollywood;