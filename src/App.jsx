import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  const[amount,setAmount]=useState('')
  const[rate,setRate]=useState('')
  const[year,setYear]=useState('')
  const[interest,setInterest]=useState('')
  

  const calculate=(e)=>{
      let result=amount*rate*year/100
      console.log(result);
      setInterest(result)
  }
const reset=(e)=>{
  setAmount('')
  setRate('')
  setYear('')
  setInterest('')
}

  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <h1>Simple Interest Calculator</h1>
          <p>The Simple Interest Calculator calculates the interest and end balance based on the simple interest formula. Click the tabs to calculate the different parameters of the simple interest formula. In real life, most interest calculations involve compound Interest. To calculate compound interest, use the Interest Calculator.</p>
        </div>
        <div className="card">
          <h2 className='symbol'>&#8377;</h2>
          <p className='text'>Total Simple Interest: {interest}</p>
        </div>
        <div className="input">
<TextField onChange={e=>setAmount(e.target.value)} value={amount} id="outlined-basic" label="Amount" variant="outlined" />
<TextField onChange={e=>setRate(e.target.value)} value={rate} id="filled-basic" label="Tenure" variant="outlined" />
<TextField onChange={e=>setYear(e.target.value)} value={year} id="standard-basic" label="Interest Rate" variant="outlined" />
        </div>

        <div className="button-group">
<Button variant="contained" onClick={calculate} color="success">
  Calculate
</Button>
<Button variant="contained" onClick={reset} color="error">
  Reset
</Button>

        </div>
      </div>
    </div>
  );
}

export default App;
