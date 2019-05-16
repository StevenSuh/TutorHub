import React from 'react';


import style from './style.css?module';
import { Link } from 'react-router-dom'
import Signup from './Signup/Component';
import Login from './Login/Component';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
            <Router>
                <Main />
            </Router>
        );
  }
}

  function Main() {
    return(
      <main id='main'>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
      </main>
    )
  }

  function Landing(){
    return (
      <div className={style.landing_page}>
        <p className='title'>TutorHub</p>
        <div className='spacer'>

            <div className ='button blue_back' >
              <Link to="/signup" className = 'centered text white_word'>
                Sign Up
              </Link>
            </div>
            <div className ='button grey_back' >
              <Link to="/login" className = 'centered text black_word'>
                Log In
              </Link>
            </div>

        </div>
      </div>
    );
  }


export default LandingPage;
