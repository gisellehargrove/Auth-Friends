import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(response => {
        console.log(response);
        setFriendsList(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  if(!friendsList.length) return <h1>...Loading</h1>


  return (
    <div>
      {friendsList.map(friend =>
        <div className='friend-container' key={friend.id}>
          <Link to={`/friend/${friend.id}`}>
            <div className='name'>
              {friend.name}
            </div>
            <div className='age'>
              {friend.age}
            </div>

            <div className='email'>
              {friend.email}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FriendsList;
