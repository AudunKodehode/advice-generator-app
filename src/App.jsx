import './App.css'
import dice from '/public/images/icon-dice.svg'
import { useState } from 'react'
import paterndiv from '/public/images/pattern-divider-desktop.svg'
function App() {
  const [advice, setAdvice] = useState('')
  const [adviceNumber, setAdviceNumber] = useState('')
  function getAdvice(){
   let data = fetch('https://api.adviceslip.com/advice')
   data.then((res) => res.json())
   .then((data) => {
    console.log(data.slip.advice);
    setAdvice(`“${data.slip.advice}”`);
    setAdviceNumber(data.slip.id);
   })
  }
  getAdvice();
  return (
    <>
    <div className="app">
      <div className="adviceNumber">ADVICE #{adviceNumber}</div>
      <div className="adviceContainer">
        <div className="adviceText"><h1>{advice}</h1></div>
      </div>

      <div className="pattern-divider-desktop">
      <img src={paterndiv} alt="" />
      </div>
          
    <div className="diceContainer">
        <button onClick={() => getAdvice()}><img className='diceImg' src={dice} alt="" /></button>
        
      </div>
    </div>

    </>
  )
}

export default App
