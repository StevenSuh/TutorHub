import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navbar from 'src/scripts/components/Navbar/Component';
import Search from './Search/Component';
import Profile from './Profile/Component';
import Messages from './Messages/Component';
import Settings from './Settings/Component';

class App extends React.Component {
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
              <Switch>
                <Route exact path="/app/search" component={Search} />
                <Route exact path="/app/profile" component={Profile} />
                <Route exact path="/app/messages" component={Messages} />
                <Route exact path="/app/settings" component={Settings} />
                <Redirect to="/app/search" />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Navbar location={location} />
      </div>
    );
  }
}

export default App;