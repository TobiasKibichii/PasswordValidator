import React, {useState} from 'react';
import validator from 'validator';
import './App.css';

function App() {

  const [strength, setStrength] = useState('');

  const validate = (value) =>{

    if( validator.isStrongPassword(value, {
    minLength:8, minLowercase: 1, minNumbers: 1,
    minUppercase:1, minSymbols: 1})
    ){
      setStrength('Strong Password')
    }else{
      setStrength('Weak Password')
    }
  }  
  return (
    <div style={{marginLeft:200 }}>
      <h2>Password Strength Checker</h2>
      <span>Enter Password:</span>
      <input type = "text" onChange = {(e) =>validate(e.target.value)
      }/> 
      {
        strength === '' ? null :
        <span style={{ 
          fontWeight: 'bold',
          color: 'red'
        }}>{strength}</span> 
      }
      
    </div>
  );
}

export default App;
