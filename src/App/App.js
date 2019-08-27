import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './Register/Register';
import Header from './Header/Header';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';
import Profile from './Profile/Profile';
import Category from './Category/Category';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/category/:id" component={Category} />

        </div>
      </Router>
    )
  }
}
 
  export default App;
