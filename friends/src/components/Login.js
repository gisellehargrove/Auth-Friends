import React, { useState } from 'react';
import axios from 'axios';


const Login = props => {

  const [credentials, setCredentials] = useState(
    {
      credentials: {
        username: '',
        password: ''
      }
    })

  const handleChange = e => {
    setCredentials(
      { credentials:
        {
          ...credentials.credentials,
          [e.target.name]: e.target.value
        }
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
    <form>
      <input onChange={ e => handleChange(e) } placeholder='username' />
      <input onChange={ e => handleChange(e) } placeholder='password' />
      <button type='submit'> Login </button>
    </form>
  )
};

export default Login;
