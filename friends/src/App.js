import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Route path='/login' component={ Login } />
      
      <PrivateRoute exact path='/' component={ FriendsList } />


    </div>
  );
}

export default App;
