import React from 'react';

import style from '../style.css?module';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { ReactComponent as Back } from 'src/assets/icons/chevron-left.svg';


class PasswordComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        confirm: '',
        password: '',
        done:false
    };

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePassword(event){
    this.setState({password: event.target.value});
  }

  handleConfirm(event){
    this.setState({confirm: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.confirm.length>0 && this.state.password.length>0){
      this.setState(
        {
          done:true
        }
      );
    }
    //this.forceUpdate();
    //window.location.reload();
  }

  render() {
    if(this.state.done === true){
      window.location.replace(window.location.origin+"/app")
    }

    return (
      <div className={style.signup_page}>
        <Link to="/signup">
          <div>
            <Back className='back' ></Back>
            <p className='back_text' >BACK</p>
            </div>
        </Link>

        <form  onSubmit={this.handleSubmit}>
          <div className='description'>
            <p className='create_acc'>Create A Password</p>
            <p className='text dark_grey_word'>Enter and confirm your desired password</p>
          </div>

          <div className='textbox'>
            <p className='text' >Password</p>
            <input type="text" className='text' value={this.state.password} onChange={this.handlePassword}/>
          </div>

          <div className='textbox'>
            <p className='text' >Confirm Password</p>
            <input type="text" className='text' value={this.state.confirm} onChange={this.handleConfirm}/>
          </div>


        
          <Enter state={this.state}></Enter>
        </form>

      </div>
    );
  }
}

function Enter(props){
  if(props.state.password.length>0 && props.state.confirm.length>0){
    console.log("here");
    return(
      <div className ='button blue_back bottom'>
        <button type="submit" className = 'centered text white_word'>
          Next
        </button>
      </div>

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
export default PasswordComponent;