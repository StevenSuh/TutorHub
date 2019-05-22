import React from 'react';
import Modal from './../../../components/Modal/Component.js'
import style from './style.module.css';
import classNames from 'classnames';
import {ReactComponent as Close} from './../../../../assets/icons/plus_icon.svg'
import {ReactComponent as SearchIcon} from './../../../../assets/icons/search_icon.svg'
import {ReactComponent as DropDown} from './../../../../assets/icons/chevron-leftDownArrow.svg'
class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.location.state = this.props.location.state || {};
    const open = this.props.location.state.open || this.props.open;

    console.log(this.props.location);
    this.state = {
        open: true
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.history.push('/app/search/results')
  }

  toggleModal(event){
      this.setState({
          open:!this.state.open
      });
      this.props.location.state.open = this.state.open;

      //this.props.history.push('/app/search');
  }

  componentDidMount() {

  }

  render() {
    const {
      open
    } = this.state;

    return (
      <div className={style.search_page}>
          <p className={style.title}>Search For Classes</p>
          <form className={style.search_container} onSubmit={this.handleSubmit}>
            <SearchIcon className={classNames(style.icon,'hover')} onClick={this.handleSubmit}></SearchIcon>
            <input type="search" autoComplete="On" className={style.search_bar} placeholder="Search for class..." ></input>
            <DropDown className={classNames(style.icon,'hover')}/>
          </form>
          <Modal open={this.state.open}
              children={
                <div className={style.modal} >
                  <Close className={classNames(style.close,'hover')} onClick={this.toggleModal}></Close>
                  <div className={style.content}>
                    <p className={style.welcome}>Welcome!</p>
                    <p className={style.description}>To get started easily, are you...</p>
                    <div>
                      <button
                        className={classNames(style.modal_button,style.blue_back,'hover')}
                        onClick={this.toggleModal}
                        type="button"
                      >
                        Looking for help
                      </button>

                      <button
                        className={classNames(style.modal_button,style.white_back,'hover')}
                        onClick={()=> this.props.history.push('/app/profile/edit')}
                        type="button"
                      >
                        Becoming a tutor
                      </button>

                    </div>
                  </div>
                </div>
              }
          />
      </div>
    );
  }
}

export default SearchComponent;
