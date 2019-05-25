import React from 'react';
import classNames from 'classnames';

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
      this.props.history.push('/app/search', { newUser: true });
    }

    //this.forceUpdate();
    //window.location.reload();
  }

  render() {
    return (
      <div className={classNames(style.signup_page, 'landing_page_padding')}>

        <Link to="/signup">
          <div className='back_container'>
            <Back className='back'></Back>
            <p className='back_text'>Back</p>
          </div>
        </Link>


        <form  onSubmit={this.handleSubmit}>
          <div className='description'>
            <p className='create_acc'>Create A Password</p>
            <p className='text dark_grey_word'>
              <span className='hint'>Enter and confirm your desired password</span>
            </p>
          </div>

          <div className='textbox'>
            <p className='text' >Password</p>
            <input type="password" className='text' value={this.state.password} onChange={this.handlePassword}/>
          </div>

          <div className='textbox'>
            <p className='text' >Confirm Password</p>
            <input type="password" className='text' value={this.state.confirm} onChange={this.handleConfirm}/>
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
export default PasswordComponent;
