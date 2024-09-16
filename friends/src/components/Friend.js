import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({ match }) => {
  const [friend, setFriend] = useState({})

  useEffect(() => {
    axiosWithAuth().get(`http://localhost:5000/api/friends/${match.params.id}`)
      .then(response => {
        setFriend(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [match.params.id])

  return (
    <div className='friend'>
      <div className='friend-name'>
        {friend.name}
      </div>

      <div className='friend-age'>
        {friend.age} years old
      </div>

      <div className='friend-email'>
        {friend.email}
      </div>
    </div>
  )
};

export default Friend;
