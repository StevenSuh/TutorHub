import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import LandingPage from './modules/LandingPage/Component';
import App from './modules/App/Component';

const Wrapper = () =>
  (
    <Router basename={process.env.PUBLIC_URL}>
      <TransitionGroup className="transition-group">
        <CSSTransition
          appear
          classNames="reveal"
          timeout={{ enter: 200, exit: 0 }}
          unmountOnExit
        >
          <Switch>
            <Route path="/app" component={App} />
            <Route path="/" component={LandingPage} />
            <Redirect to="/" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );

export default Wrapper;
