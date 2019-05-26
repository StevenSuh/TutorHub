import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './style.module.css';

class Modal extends React.Component {
  componentDidMount() {
    if (this.props.open) {
      document.body.setAttribute('style', 'overflow: hidden;');
    }
  }

  componentDidUpdate(prevProps) {
    const prevOpen = prevProps.open;
    const currOpen = this.props.open;

    if (!prevOpen && currOpen) {
      document.body.setAttribute('style', 'overflow: hidden;');
    }
    if (prevOpen && !currOpen) {
      document.body.removeAttribute('style', 'overflow: hidden;');
    }
  }

  render() {
    const { children, open } = this.props;

    if(open){
      return (
        <div className={style.modal}>
          <div className={classNames({
            [style.dark_bg]: true,
            [style.open]: open,
          })} />
          <div className={classNames({
            [style.content]: true,
            [style.open]: open,
          })}>
            {children}
          </div>
        </div>
      );
    }
    return(
      <div>
      </div>
    )
  }
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Modal;
