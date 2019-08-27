import React from 'react';
import styled, {ThemeProvider } from 'styled-components';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './Register/Register';
import Header from './Header/Header';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';
import Profile from './Profile/Profile';
import Category from './Category/Category';
import theme from '../theme';

const AppStyled = styled.div`
  background: ${({theme}) => theme.main.background} !important;
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppStyled>
            <Header />

            <Route path="/" exact component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/category/:id" component={Category} />

          </AppStyled>
        </ThemeProvider>
      </Router>
    )
  }
}
 
  export default App;
