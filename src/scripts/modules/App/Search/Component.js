import React from 'react';
import Modal from './../../../components/Modal/Component.js'
import style from './style.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {ReactComponent as Close} from './../../../../assets/icons/plus_icon.svg'
import {ReactComponent as SearchIcon} from './../../../../assets/icons/search_icon.svg'
import {ReactComponent as DropDown} from './../../../../assets/icons/chevron-leftDownArrow.svg'
import Select, { components } from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import * as settingsDefs from '../Settings/defs';

class SearchComponent extends React.Component {


  constructor(props) {
    super(props);

    this.props.location.state = this.props.location.state || {};

    const newUser = this.props.location.state.newUser === undefined ?
      this.props.newUser : this.props.location.state.newUser;


    this.state = {
      open: newUser,
      query:""
    };


    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputKeyDown(event) {
      switch (event.keyCode) {
          case 13: // ENTER
              if(this.state.query.length>0){
                event.preventDefault();
                return;
              }

      }
  }

  handleChange(selectedOption){
    this.setState({ query:selectedOption });
    this.handleSubmit(selectedOption);

  }


  handleSubmit(event){
    //event.preventDefault();

    const query = event.value || document.getElementById("Search").value;
    console.log(document.getElementById("Search"));
    if (query) {
      this.props.history.push('/app/search/results',{query});
    }
  }

  toggleModal(){
    this.setState({
      open:false
    });

    //this.props.history.push('/app/search');
  }

  componentDidMount() {

  }

  becomeTutor = () => {
    settingsDefs.CURRENT_SETTINGS.tutorMode = true;
    this.props.history.push('/app/profile/edit');
  }

  render() {
    const {
      open
    } = this.state;

    const options = [

          { value: 'CMPS 12A', label: 'CMPS 12A' },
          { value: 'CMPS 12B', label: 'CMPS 12B' },
          { value: 'CMPS 101', label: 'CMPS 101' },


          { value: 'Econ 10A', label: 'ECON 10A' },
          { value: 'ECON 161A', label: 'ECON 161A' },
          { value: 'ECON 113', label: 'ECON 113' }
    ];

    const SelectStyles = {
      indicatorSeparator: styles => ({})
    };

    const ControlComponent = (props) => (
      <>
        <SearchIcon className={classNames(style.icon,'hover')}  onTouchStart={this.handleSubmit} onClick={this.handleSubmit}></SearchIcon>
        <components.ValueContainer {...props} />
      </>
    );

    return (
      <div className={style.search_page}>
          <p className={style.title}>Search For Classes</p>
          <form className={style.search_container} onSubmit={this.handleSubmit}>


            <CreatableSelect
            placeholder = "Search for class..."
            label="Single select"
            options={options}
            components={{ ValueContainer: ControlComponent }}
            styles={SelectStyles}
            noOptionsMessage={()=>"No Results"}
            onChange={this.handleChange}
            formatCreateLabel={(text)=>text}
            inputId="Search"
            OnBlur = {()=>{}}
            />
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
                        onClick={this.becomeTutor}
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

SearchComponent.propTypes = {
  newUser: PropTypes.bool.isRequired,
};

SearchComponent.defaultProps = {
  newUser: false,
};

export default SearchComponent;
