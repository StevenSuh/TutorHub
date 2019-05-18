import React from 'react';

import style from '../style.css?module';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';

import { ReactComponent as Back } from 'src/assets/icons/chevron-left.svg';

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
        this.setState(
          {
            done:true
          }
        );
      }
  }

  render() {
    if(this.state.done === true){
      return <Redirect to='/password'/>
    }
    return (
      <div className={style.signup_page}>
        <div>
          <Back className='back' onClick={this.props.history.goBack}></Back>
          <p className='back_text' onClick={this.props.history.goBack}>BACK</p>
        </div>

        <div className='description'>
          <p className='create_acc'>Create Your Account</p>
          <p className='text dark_grey_word'>Enter your full name and email</p>
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
      <Link to="/password">
      <div className ='button blue_back bottom'>
        <button className = 'centered text white_word'>
          Next
        </button>
      </div>
      </Link>
    )
  }

  return(
    <div className ='button grey_back bottom' onClick={props.handleSubmit}>
      <button className = 'centered text black_word'>
        Next
      </button>
    </div>
  )

}

export default SignupComponent;
