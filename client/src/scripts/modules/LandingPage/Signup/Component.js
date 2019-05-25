import React from 'react';

import style from '../style.css?module';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

import { ReactComponent as Back } from 'src/assets/icons/chevron-left.svg';

import * as profileDefs from '../../App/Profile/defs';

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        done: false
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event){
    this.setState({name: event.target.value});
  }

  handleEmail(event){
    this.setState({email: event.target.value});
  }


  handleSubmit(event){
    event.preventDefault();
      if(this.state.email.length>0 && this.state.name.length>0){
        profileDefs.CURRENT_PROFILE.name = this.state.name;
        console.log(profileDefs.CURRENT_PROFILE);
        this.props.history.push('/password');
      }
  }

  render() {
    return (
      // <div className={style.signup_page}>
      <div className='landing_page_padding'>
        <div>
          <div className='back_container'>
            <Back className='back' onClick={this.props.history.goBack}></Back>
            <p className='back_text' onClick={this.props.history.goBack}>Back</p>
          </div>
        </div>

        <div className='description'>
          <p className='create_acc'>Create Your Account</p>
          <p className='text dark_grey_word'>
            <span className='hint'>Enter your full name and email</span>
          </p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='textbox'>
            <p className='text' >Full Name</p>
            <input type="text" className='text'  value={this.state.email} onChange={this.handleEmail}/>
          </div>

          <div className='textbox'>
            <p className='text' >Email Address</p>
            <input type="text" className='text' value={this.state.name} onChange={this.handleName}/>
          </div>


          <Signup state={this.state}></Signup>


        </form>





      </div>
    );
  }
}

function Signup(props){
  if(props.state.email.length>0 && props.state.name.length>0){
    return(
      <div className ='button blue_back bottom'>
        <button className = 'centered text white_word next_button'>
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

export default SignupComponent;
