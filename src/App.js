import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ProtectedRoutes from './components/ProtectedRoutes';
import UserInfo from './components/UserInfo';
import background from './Styles/Back.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})` , minHeight:'100vh' , backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <Router>
       <Navbar/>
        <Switch>
        <Route path='/' exact component={LandingPage} />
          <Route path='/login' component={LoginForm} />
          <ProtectedRoutes path='/user' component={UserInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
