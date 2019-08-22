import React, { useState } from 'react';
import axios from 'axios';


const Login = props => {

  const [credentials, setCredentials] = useState(
    {
      username: 'Lambda School',
      password: 'i<3Lambd4'
    })

  const handleChange = e => {
    // setCredentials(
    //     {
    //       ...credentials,
    //       [e.target.name]: e.target.value
    //     })
  };

  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(response => {
        console.log(response)
        localStorage.setItem('userToken', response.data.payload);
      })
      .catch(err => {
        console.log(err)
      });
  };


  return (
    <form onSubmit={ e => login(e) }>
      <input name='username' onChange={ e => handleChange(e) } placeholder='username' />
      <input name='password' onChange={ e => handleChange(e) } placeholder='password' />
      <button type='submit'> Login </button>
    </form>
  )
};

export default Login;
