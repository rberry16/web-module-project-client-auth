import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import FriendsList from './Components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/login'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/friends'>
          <FriendsList />
        </Route>
        <Route exact path='/friends/add'>
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;
