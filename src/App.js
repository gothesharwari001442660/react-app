import React, {useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

function App(){

  

// const sayHello = () => {
//   console.log("hello");
// };

// const counter = 0;

// To use state in react, you first need to import {useState}
// In the useState, you can add any parameter. Lets say we want the text to change color based on the state.
// Default state is set to false


const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);


const increment = () => {
  setCount(count + 1);
  setRed(!isRed);
};

return(
  <div className="app">
    <h1>This is the app component</h1>
    <Hello /> 
    <Tweet name = "Sharwari" message = "random tweet" likes = '500'/>
    <Tweet name = "GOT" message = "random tweet" likes = '500'/>
    <Tweet name = "Winter is coming" message = "random tweet" likes = '500'/>
    <h1 className={isRed ? 'red' : ''}>Change my Color</h1>
    <button onClick={increment}>Increment</button>
    <h1>{count}</h1>
  </div>
)

// Way of calling the sayHello function
// return(
//   <div>
//     <h1>Hello React</h1>
//     {/* Reference to sayHello function */}
//     <button onClick = {sayHello}>Hello</button> 
//   </div>
// )


// Same way of returning counter. Either 0 or counter
  // return(
  //   <div>
  //     <h1>Hello React</h1>
  //     <button>0</button>
  //   </div>
  // )

  // return(
  //   <div>
  //     <h1>Hello React</h1>
  // <button>{counter}</button>
  //   </div>
  // )
}

export default App; // it is just going to export this file