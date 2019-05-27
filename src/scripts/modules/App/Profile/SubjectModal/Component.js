import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Modal from 'src/scripts/components/Modal/Component';

import { ReactComponent as CloseIcon } from 'src/assets/icons/plus_icon.svg';
import style from './style.module.css';

class SubjectModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };

    this.onDone = this.onDone.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
  }

  onDone() {
    const { title, description } = this.state;

    this.props.onSubmit({
      title,
      description,
    });
    this.onClose();
  }

  onClose() {
    this.setState({
      title: '',
      description: '',
    });
    this.props.onClose();
  }

  onTitleChange({ target }) {
    const { value } = target;
    this.setState({ ...this.state, title: value });
  }

  onDescChange({ target }) {
    const { value } = target;
    this.setState({ ...this.state, description: value });
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
            Tutor New Subject
          </h2>
          <h4 className={style.input_header}>
            Title
          </h4>
          <input
            className={style.input_form}
            placeholder="Subject Title"
            onChange={this.onTitleChange}
            value={this.state.title}
          />
          <h4 className={style.input_header}>
            Description
          </h4>
          <textarea
            className={style.input_form}
            rows="3"
            placeholder="Subject Description"
            onChange={this.onDescChange}
            value={this.state.description}
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
              onClick={this.onDone}
            >
              Done
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

SubjectModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SubjectModal;
