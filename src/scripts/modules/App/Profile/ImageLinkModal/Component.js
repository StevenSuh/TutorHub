import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Modal from 'src/scripts/components/Modal/Component';

import { ReactComponent as CloseIcon } from 'src/assets/icons/plus_icon.svg';
import style from './style.module.css';

class ImageLinkModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: this.props.link,
    };

    this.onDone = this.onDone.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.link !== this.props.link) {
      this.setState({ link: this.props.link });
    }
  }

  onDone() {
    const { link } = this.state;
    const result = {};

    if (this.props.type === 'picture') {
      result.photoUrl = link;
    } else {
      result.transcriptUrls = [];
      result.transcriptUrls[0] = link;
    }

    this.props.onSubmit(result);
    this.onClose();
  }

  onClose() {
    this.setState({ link: '' });
    this.props.onClose();
  }

  onUrlChange({ target }) {
    const { value } = target;
    this.setState({ ...this.state, link: value });
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
            {this.props.type === 'picture' ? 'Change Profile Photo' : 'Change Transcripts'}
          </h2>
          <input
            className={style.feedback_form}
            placeholder={this.props.type === 'picture' ? 'Photo URL' : 'Transcripts URL'}
            onChange={this.onUrlChange}
            value={this.state.link}
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

ImageLinkModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

ImageLinkModal.defaultProps = {
  link: '',
};

export default ImageLinkModal;
