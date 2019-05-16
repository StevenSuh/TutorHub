import React from 'react';

import style from '../style.css?module';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { ReactComponent as Back } from 'src/assets/icons/chevron-left.svg';

class LoginComponent extends React.Component {
  constructor() {
    super();

    this.state = {
        email: '',
        password: ''
    };
  }

  render() {
    return (
      <div className={style.signup_page}>
        <div>
          <Back className='back' onClick={this.props.history.goBack}></Back>
          <p className='back_text' onClick={this.props.history.goBack}>BACK</p>
        </div>

        <div className='spacer'> </div>
        <div className='textbox'>
          <p className='text' >Email</p>
          <input className='text'/>
        </div>

        <div className='textbox'>
          <p className='text' >Password</p>
          <input className='text'/>
        </div>

        <p className='forgot text grey_word'>Forgot your password?</p>


        <div className ='button grey_back bottom' >
          <Link className = 'centered text black_word'>
            Log In
          </Link>
        </div>
      </div>

    );
  }
}

export default LoginComponent;
