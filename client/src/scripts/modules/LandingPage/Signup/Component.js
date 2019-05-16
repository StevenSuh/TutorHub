import React from 'react';

import style from '../style.css?module';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { ReactComponent as Back } from 'src/assets/icons/chevron-left.svg';

class SignupComponent extends React.Component {
  render() {
    return (
      <div className={style.signup_page}>
        <div>
          <Back className='back' onClick={this.props.history.goBack}></Back>
          <p className='back_text' onClick={this.props.history.goBack}>BACK</p>
        </div>


      </div>
    );
  }
}

export default SignupComponent;
