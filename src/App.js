import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var [values,setValue] = useState([]);

  var handleValue = (event) => {
    var valueInBtn = event.target.value;
    setValue((prevvalue) => {return [...prevvalue, valueInBtn]});
  }

  var evaluation = () => {
    var val='';
    values.forEach((ele) => val+=ele);
    var num=eval(val);
    setValue([num]);
  }

  var clear = () => {
    setValue([]);
  }

  var back = (e) => {
    e.preventDefault();
    for(var i=0; i<values.length; i++){
      values.pop(i);
      break;
    }
    setValue((pre)=>{return[...pre]});
  }

  return (
    <>
    <h1 className='heading'>Simple Calculator</h1>
    <div className='container'>
      <div>
        <p className='textarea'>{values}</p>
      </div>
      <div className='grid-container'>
        <button onClick={handleValue} className='grid-item num' id='seven' value='7'>7</button>
        <button onClick={handleValue} className='grid-item num' id='eight' value='8'>8</button>
        <button onClick={handleValue} className='grid-item num' id='nine' value='9'>9</button>
        <button onClick={handleValue} className='grid-item sym' id='multiply' value='*'>*</button>
        <button onClick={handleValue} className='grid-item num' id='four' value='4'>4</button>
        <button onClick={handleValue} className='grid-item num' id='five' value='5'>5</button>
        <button onClick={handleValue} className='grid-item num' id='six' value='6'>6</button>
        <button onClick={handleValue} className='grid-item sym' id='subract' value='-'>-</button>
        <button onClick={handleValue} className='grid-item num' id='one' value='1'>1</button>
        <button onClick={handleValue} className='grid-item num' id='two' value='2'>2</button>
        <button onClick={handleValue} className='grid-item num' id='three' value='3'>3</button>
        <button onClick={handleValue} className='grid-item sym' id='add' value='+'>+</button>
        <button onClick={handleValue} className='grid-item num' id='zero' value='0'>0</button>
        <button onClick={handleValue} className='grid-item num' id='dot' value='.'>.</button>
        <button onClick={evaluation} className='grid-item num' id='equals' value='='>=</button>
        <button onClick={handleValue} className='grid-item sym' id='divide' value='/'>/</button>      
      </div>
      <div className='btns'>
        <button onClick={clear} className='clear'>Clear</button>
        <button onClick={back} className='clear'>Back</button>
      </div>
    </div>
    </>
  );
}

export default App;
