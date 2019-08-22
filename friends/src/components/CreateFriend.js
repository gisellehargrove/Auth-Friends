import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const CreateFriend = () => {
  const [creds, setCreds] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleSubmit = e => {
    axiosWithAuth().post('http://localhost:5000/api/friends', creds)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e => {
    setCreds(
      {
        ...creds,
        [e.target.name]: e.target.value
      }
    );
  };


  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input placeholder='name' onChange={e => handleChange(e)} name='name' value={creds.name} />
        <input placeholder='age' onChange={e => handleChange(e)} name='age' value={creds.age} />
        <input placeholder='email' onChange={e => handleChange(e)} name='email' value={creds.email} />
        <button>Add New Friend</button>
      </form>
    </div>
  )

};

export default CreateFriend;
