import './App.css';
import { useState } from 'react';
import ChangeLight from './component/ChangeLight/ChangeLight';

function App() {

  const [light, setLight] = useState(false)
  const [question, setQuestion] = useState(null)

  return (
    <div className={light === false ? "wrapperDark" : "wrapperLight"}>
      <div className='contentWrapper'>
        <ChangeLight
          light = {light}
          setLight = {setLight}
        />
        <div className='conctentBlock'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
