import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import CreateFriend from './components/CreateFriend';
import Friend from './components/Friend';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path='/login' component={ Login } />

      <PrivateRoute exact path='/' component={ FriendsList } />
      <PrivateRoute path='/create' component={ CreateFriend } />
      <PrivateRoute path='/friend/:id' component={ Friend } />


    </div>
  );
}

export default App;
