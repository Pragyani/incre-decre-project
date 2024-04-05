

import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [number, setNumber] = useState(0)

  const fIncr = () => {
    setNumber(number + 1)
  }

  const fDecr = ()=>{
    { (number > 0) ? setNumber(number - 1) : alert("SORRY, Zero Limit Reached") }
  }
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>{number}</h1>
          <div className="btn">
            <button onClick={fIncr} >INCRE</button>
            <button onClick={fDecr}>DECRE</button>
          </div>
        </div>
      </div>



    </>
  )
}

export default App;
