import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import CreateFriend from './components/CreateFriend';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path='/login' component={ Login } />

      <PrivateRoute exact path='/' component={ FriendsList } />
      <PrivateRoute path='/create' component={ CreateFriend } />


    </div>
  );
}

export default App;
