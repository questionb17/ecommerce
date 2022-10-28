import React, {useState}  from 'react';
import Header from './components/Header';
import Alibaba from './components/Alibaba';
import Cart from './components/Cart';
import '../src/styles/alibaba.css';
import Button from './components/Button'


function App() {
  const[appear, setAppear] = useState(true);
  const[carrt, setCarrt] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item)=>{
    let isPresent = false;
    carrt.forEach((product) => {
      if(item.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      },2000)
      return;
    
    }
    
    setCarrt([...carrt, item]);
  }
  return (
   <>
   <Header size={carrt.length}/>
  <Button/>
   <Alibaba handleClick={handleClick} />
   <Cart/>
   {
    warning && <div className='warning' >Item already added to you list</div>
   }
   </>
  )
}

export default App;











 // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>