import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Modal from 'src/scripts/components/Modal/Component';

import { ReactComponent as CloseIcon } from 'src/assets/icons/plus_icon.svg';
import { ReactComponent as StarIcon } from 'src/assets/icons/star.svg';
import { ReactComponent as StarGreyIcon } from 'src/assets/icons/star_grey.svg';
import style from './style.module.css';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      description: '',
      error: '',
    };

    this.onDone = this.onDone.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onFeedbackChange = this.onFeedbackChange.bind(this);
  }

  onDone() {
    const { rating, description } = this.state;

    if (rating === 0 || !description) {
      this.setState({
        ...this.state,
        error: 'You are missing a field',
      });
      return;
    }

    this.props.onAddReview({
      rating,
      description,
    });
    this.onClose(true);
  }

  onClose(hasReviewed = false) {
    this.setState({
      rating: 0,
      description: '',
      error: '',
    });
    this.props.onClose(hasReviewed);
  }

  onFeedbackChange({ target }) {
    const { value } = target;
    this.setState({ ...this.state, description: value });
  }

  getReviewComponent() {
    const { rating } = this.state;
    const review = [];

    for (let i = 0; i < rating; i++) {
      review.push((
        <StarIcon
          className={style.star}
          key={i}
          onClick={() => this.setState({ rating: i + 1 })}
        />
      ));
    }
    for (let i = rating; i < 5; i++) {
      review.push((
        <StarGreyIcon
          className={style.star}
          key={i}
          onClick={() => this.setState({ rating: i + 1 })}
        />
      ));
    }

    return review;
  }

  render() {
    const { open } = this.props;

    return (
      <Modal open={open}>
        <div className={style.content}>
          <CloseIcon
            className={classNames(style.close, 'hover')}
            onClick={() => this.onClose()}
          />
          <h2 className={style.header}>
            Review Tutor
          </h2>
          {this.state.error && (
            <p className={style.error}>{this.state.error}</p>
          )}
          <div className={style.review_wrapper}>
            {this.getReviewComponent()}
          </div>
          <textarea
            className={style.feedback_form}
            rows="3"
            placeholder="Feedback"
            onChange={this.onFeedbackChange}
            value={this.state.description}
          />
          <div className={style.button_wrapper}>
            <button
              className={classNames(style.cancel, 'hover')}
              onClick={() => this.onClose()}
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

ReviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ReviewModal;
