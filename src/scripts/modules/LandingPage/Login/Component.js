import React from 'react';

import style from '../style.css?module';
import { Redirect } from 'react-router-dom';
import { ReactComponent as Back } from 'src/assets/icons/chevron-left.svg';

import * as profileDefs from 'src/scripts/modules/App/Profile/defs';
import * as messageDefs from 'src/scripts/modules/App/Messages/defs';
import * as settingsDefs from 'src/scripts/modules/App/Settings/defs';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: '',
        done: false
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.email.length>0 && this.state.password.length>0){
      profileDefs.fillProfile();
      messageDefs.fillMessages();
      settingsDefs.CURRENT_SETTINGS.tutorMode = true;
      this.props.history.push('/app');
    }
    //this.forceUpdate();
    //window.location.reload();
  }

  render() {
    return (
      <div className={style.signup_page}>

        <div className='landing_page_padding'>
          <div>
            <div className='back_container'>
              <Back className='back' onClick={this.props.history.goBack}></Back>
              <p className='back_text' onClick={this.props.history.goBack}>Back</p>
            </div>
          </div>
        </div>

        <div className='spacer'> </div>

        <form onSubmit={this.handleSubmit}>
          <div className='textbox'>
            <p className='text' >Email</p>
            <input type="text" className='text' value={this.state.email} onChange={this.handleEmail}/>
          </div>

          <div className='textbox'>
            <p className='text' >Password</p>
            <input type="Password" className='text' value={this.state.password} onChange={this.handlePassword}/>
          </div>

          <p className='forgot text grey_word'>Forgot your password?</p>


          <Login state={this.state}></Login>
        </form>
      </div>

    );
  }
}

function Login(props){
  if(props.state.email.length>0 && props.state.password.length>0){
    return(

      <div className ='button blue_back bottom'>
        <button type="submit" className = 'centered text white_word next_button'>
          Next
        </button>
      </div>

    )
  }

  return(
    <div className ='button grey_back bottom' onClick={props.handleSubmit}>
      <button className = 'centered text black_word next_button'>
        Next
      </button>
    </div>
  )

}
export default LoginComponent;
