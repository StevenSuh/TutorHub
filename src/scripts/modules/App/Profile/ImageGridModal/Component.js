import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Modal from 'src/scripts/components/Modal/Component';

import { ReactComponent as CloseIcon } from 'src/assets/icons/plus_icon.svg';
import { ReactComponent as UploadIcon } from 'src/assets/icons/upload-cloud.svg';
import style from './style.module.css';

class ImageGridModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: this.props.links,
      zoom: false,
      zoomImgSrc: null,
    };

    this.fileInputRef = React.createRef();

    this.onDone = this.onDone.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
  }

  onDone() {
    this.onClose();
  }

  onClose() {
    const { links } = this.state;
    const result = { transcriptUrls: links };

    this.props.onSubmit(result);
    this.props.onClose();
  }

  async onUrlChange({ target }) {
    const { links } = this.state;
    const { files } = target;
    const file = await this.getBase64(files[0]);

    links.push(file);
    this.setState({ ...this.state, links });
    target.value = '';
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise((resolve, reject) => {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject();
      };
    });
  }

  removeLink = (index) => {
    const { links } = this.state;
    links.splice(index, 1);

    this.setState({ ...this.state, links });
  }

  zoomImg = (src) => {
    this.setState({ ...this.state, zoom: true, zoomImgSrc: src });
  }

  unzoomImg = () => {
    this.setState({ ...this.state, zoom: false, zoomImgSrc: null });
  }

  render() {
    const {
      isEditing,
      open,
    } = this.props;
    const { zoom, zoomImgSrc } = this.state;

    return (
      <Modal open={open}>
        {zoom && (
          <img
            className={classNames(style.zoom_img, 'hover')}
            src={zoomImgSrc}
            alt="zoomed transcript"
            onClick={this.unzoomImg}
          />
        )}
        <div className={classNames({
          [style.content]: true,
          [style.hide]: zoom,
        })}>
          <CloseIcon
            className={classNames(style.close, 'hover')}
            onClick={this.onClose}
          />
          <h2 className={style.header}>
            {isEditing ? 'Change Transcripts' : 'View Transcripts'}
          </h2>
          <TransitionGroup className="transition-group">
            <CSSTransition
              appear
              classNames="reveal"
              key={this.state.links.length}
              timeout={{ enter: 200, exit: 0 }}
              unmountOnExit
            >
              <div className={classNames(style.grid_wrapper, 'transition-group')}>
                {this.state.links.map((link, index) => (
                  <div className={style.grid_item} key={index}>
                    <img
                      onClick={() => this.zoomImg(link)}
                      className={classNames(style.grid_item_img, 'hover')}
                      src={link}
                      alt="transcript"
                    />
                    {isEditing && (
                      <CloseIcon
                        className={classNames(style.close, style.img_close, 'hover')}
                        onClick={() => this.removeLink(index)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CSSTransition>
          </TransitionGroup>
          {isEditing && (
            <div className={style.feedback_wrapper}>
              <input
                className={style.feedback_hide}
                onChange={this.onUrlChange}
                type="file"
                accept="image/*"
                ref={this.fileInputRef}
              />
              <div
                className={classNames(style.feedback_form, 'hover')}
                onClick={() => this.fileInputRef.current.click()}
              >
                <UploadIcon />
                <div>Click to upload a transcript</div>
              </div>
            </div>
          )}
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

ImageGridModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  isEditing: PropTypes.bool.isRequired,
};

ImageGridModal.defaultProps = {
  links: [],
};

export default ImageGridModal;
