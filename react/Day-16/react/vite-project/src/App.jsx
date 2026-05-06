/*import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(10);
  // string, boolean, null,
  // useEffect(function, dependency)
  function Increment(){
    setCount(count+1)
  }
  function Decrement(){
    setCount(count-1)
  }
  useEffect(()=>{
    console.log('app is running')
  }, [count]);
  // Mount, update, unmount
  //fetch(API), DOM, Timers
  return (
    <>
      <center>
        <h1>Use state hook</h1>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </center>
    </>
  );
}

export default App;*/

import React, { useState } from 'react'

const App = () => {
    const [email,setEmail,password]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted succesfully")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type='password' placeholder='Enter password' value={password}></input>
            <button>submit</button>
        </form>
        <h1>{email}</h1>
    </div>
  )
}

export default App
