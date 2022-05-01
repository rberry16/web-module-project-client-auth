import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';

import Login from './Components/Login';
import AddFriend from './Components/AddFriend';
import FriendsList from './Components/FriendsList';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className='links' to='/login'>Login</Link>
          <Link className='links' to='/friends'>Friends List</Link>
          <Link className='links' to='/friends/add'>Add a Friend</Link>
          <Link className='links' to='/logout'>Logout</Link>
        </header>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/login'>
          <Redirect to='/' />
        </Route>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/friends/add' component={AddFriend} />
        <PrivateRoute exact path='/logout' component={Logout} />
      </div>
    </Router>
  );
}

export default App;
