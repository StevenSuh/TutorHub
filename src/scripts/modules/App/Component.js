import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navbar from 'src/scripts/components/Navbar/Component';
import Search from './Search/Component';
import SearchResults from './Search/SearchResults/Component';
import Profile from './Profile/Component';
import ProfileEdit from './Profile/ProfileEdit/Component';
import Messages from './Messages/Component';
import MessageDetails from './Messages/MessageDetails/Component';
import Settings from './Settings/Component';

class App extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Navbar location={location} />
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
                <Route exact path="/app/search/results" component={SearchResults} />
                <Route exact path="/app/search/profile/:id" component={Profile} />
                <Route exact path="/app/profile" component={Profile} />
                <Route exact path="/app/profile/edit" component={ProfileEdit} />
                <Route exact path="/app/messages" component={Messages} />
                <Route exact path="/app/messages/:id" component={MessageDetails} />
                <Route exact path="/app/settings" component={Settings} />
                <Redirect to="/app/search" />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
