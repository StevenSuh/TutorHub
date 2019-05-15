import React from 'react';

import { ReactComponent as EditIcon } from 'src/assets/icons/edit_icon.svg';
import style from './style.css?module';

class LandingPage extends React.Component {
  render() {
    return (
      <div className={style.landing_page}>
        <h1>Landing Page</h1>
        <EditIcon />
      </div>
    );
  }
}

export default LandingPage;
