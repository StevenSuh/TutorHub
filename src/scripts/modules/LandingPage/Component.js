import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import style from './style.css?module';
import { Link } from 'react-router-dom'
import Signup from './Signup/Component';
import Login from './Login/Component';
import Password from './Password/Component';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <TransitionGroup className="transition-group">
          <CSSTransition
            appear
            classNames="reveal"
            key={location.key}
            timeout={{ enter: 200, exit: 0 }}
            unmountOnExit
          >
            <div className="transition-group">
              <Main />
            </div>
          </CSSTransition>
        </TransitionGroup>

      </div>
    );
  }
}

  function Main() {
    return(
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/password" component={Password} />
        <Redirect to="/" />
      </Switch>
    );
  }

  function Landing(){
    return (
      <div className={style.landing_page}>
        <p className='title'>TutorHub</p>
        <div className='spacer'>

          <Link to="/signup">
            <div className ='button blue_back' >
              <p className = 'centered text white_word'>
                Sign Up
              </p>
            </div>
          </Link>

          <Link to="/login">
            <div className ='button grey_back' >
              <p className = 'centered text black_word'>
                Log In
              </p>
            </div>
          </Link>

        </div>
      </div>
    );
  }


export default LandingPage;
