import './App.css';
import './Basic.css'
import FunctionAPI from './Component/API/FuncionAPI';
import Nav from './Component/Nav';
import Header from './Component/Header';

function App() {
 
  return (
    <>
   
     <FunctionAPI>
     <span className='Navigation-fix'><Nav/></span>
       </FunctionAPI>
      </>
    
  );
}

export default App;
