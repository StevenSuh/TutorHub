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

    return (
      <div className={style.modal}>
        <div
          className={classNames({
            [style.dark_bg]: true,
            [style.open]: open,
          })}
          onClick={this.props.onClose}
        />
        <div className={classNames({
          [style.content]: true,
          [style.open]: open,
        })}>
          {children}
        </div>
      </div>
    );
  }
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  onClose: () => {},
};

export default Modal;
