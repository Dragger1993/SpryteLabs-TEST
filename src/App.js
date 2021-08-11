import logo from './logo.svg';
import React, { useReducer, useState } from 'react';
import axios from 'axios'
import './App.css';
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}
function App() {
  function apireq() {
    //fetch("http://localhost:7000/api").then(res => res.text()).then(res => console.log(res))
    //console.log("RESPOSE WORKS")
    //console.log(Return)
    axios.post("https://rocky-lowlands-63719.herokuapp.com/api", formData).then(res => {
      alert("Hi " + formData.name + ",you were born on a " + res.data)
      console.log(res.data)
    })
  }
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [Return, SetReturnVal] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    apireq()
    console.log("CHECK")
    console.log(formData.name)

  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <div className="App">
      <header className="App-header">

        <div className="wrapper">

          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Name</p>
                <input name="name" onChange={handleChange} />
              </label>
              <label>
                <p>DOB</p>
                <input name="DOB" onChange={handleChange} />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
