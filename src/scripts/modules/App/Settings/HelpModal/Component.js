import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Modal from 'src/scripts/components/Modal/Component';

import { ReactComponent as CloseIcon } from 'src/assets/icons/plus_icon.svg';
import style from './style.module.css';

class HelpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feedback: '',
    };

    this.onClose = this.onClose.bind(this);
    this.onFeedbackChange = this.onFeedbackChange.bind(this);
  }

  onClose() {
    this.setState({ feedback: '' });
    this.props.onClose();
  }

  onFeedbackChange({ target }) {
    const { value } = target;
    this.setState({ ...this.state, feedback: value });
  }

  render() {
    const { open } = this.props;

    return (
      <Modal open={open}>
        <div className={style.content}>
          <CloseIcon
            className={classNames(style.close, 'hover')}
            onClick={this.onClose}
          />
          <h2 className={style.header}>
            Send Us Feedback
          </h2>
          <textarea
            className={style.input_form}
            rows="3"
            placeholder="Feedback"
            onChange={this.onFeedbackChange}
            value={this.state.feedback}
          />
          <div className={style.button_wrapper}>
            <button
              className={classNames(style.cancel, 'hover')}
              onClick={this.onClose}
            >
              Cancel
            </button>
            <button
              className={classNames(style.done, 'hover')}
              onClick={this.onClose}
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

HelpModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default HelpModal;
