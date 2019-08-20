import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';

function App() {

  const [credentials, setCredentials] = useState(
    {
      credentials: {
        username: '',
        password: ''
      }
    })

  const handleChange = e => {
    setCredentials(...credentials, {
      [e.target.name]: e.target.value
    })
  };

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
  };

  return (
    <div className="App">
      <Route path='/login' component={ Login } />
    </div>
  );
}

export default App;
