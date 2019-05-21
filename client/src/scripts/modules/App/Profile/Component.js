import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

import ReviewModal from './ReviewModal/Component';

import { ReactComponent as PlusIcon } from 'src/assets/icons/plus_icon.svg';
import { ReactComponent as StarIcon } from 'src/assets/icons/star.svg';
import { ReactComponent as StarGreyIcon } from 'src/assets/icons/star_grey.svg';
import style from './style.module.css';
import * as defs from './defs';
import * as msgDefs from '../Messages/defs';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props.location.state = this.props.location.state || {};

    const isTutor = this.props.location.state.isTutor || this.props.isTutor;
    const profile = this.props.location.state.profile || this.props.profile;
    const reviews = this.props.location.state.reviews || this.props.reviews;

    this.state = {
      isReviewing: false,
      isTutor,
      profile,
      reviews,
    };

    this.addReview = this.addReview.bind(this);
    this.openAddReview = this.openAddReview.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.requestTutor = this.requestTutor.bind(this);
    this.viewTranscripts = this.viewTranscripts.bind(this);
    this.closeReview = this.closeReview.bind(this);
  }

  calculateAvgReview(reviews) {
    const totalScore = reviews.reduce((x, { rating }) => rating + x, 0);
    const avgReviewScore = Math.round(totalScore / reviews.length);

    return this.getReviewComponent(avgReviewScore);
  }

  getReviewComponent(reviewScore) {
    const review = [];
    for (let i = 0; i < reviewScore; i++) {
      review.push(<StarIcon className={style.star} key={i} />);
    }

    for (let i = reviewScore; i < 5; i++) {
      review.push(<StarGreyIcon className={style.star} key={i} />);
    }

    return review;
  }

  getSubjectComponent() {
    return this.state.profile.subjects.map(({ title, description }) => (
      <div className={style.subject} key={title}>
        <h4 className={style.subject_title}>
          {title}
        </h4>
        <p className={style.subject_description}>
          {description}
        </p>
      </div>
    ));
  }

  getAllReviews() {
    return this.state.reviews.map(({ rating, date, description }, index) => (
      <div className={style.review} key={index}>
        <div className={style.review_starline_wrapper}>
          <div className={style.review_star_wrapper}>
            {this.getReviewComponent(rating)}
          </div>
          <p className={style.review_date}>
            {date}
          </p>
        </div>
        <p className={style.review_description}>
          {description}
        </p>
      </div>
    ));
  }

  addReview(review) {
    const reviews = this.state.reviews;
    reviews.splice(0, 0, {
      ...review,
      date: moment().format('M/DD/YY'),
    });

    this.setState({
      ...this.state,
      reviews,
    });
  }

  openAddReview() {
    this.setState({ ...this.state, isReviewing: true });
  }

  editProfile() {
    this.props.history.push('/app/profile/edit');
  }

  requestTutor() {
    // should add a new message thread
    const id = msgDefs.EXAMPLE_MESSAGES_LIST[msgDefs.EXAMPLE_MESSAGES_LIST.length - 1].id + 1;

    const msgList = {
      id,
      isNew: true,
      from: this.state.profile.name,
      fromPhotoUrl: this.state.profile.photoUrl,
      date: moment().format('M/DD/YY'),
      lastMessage: `Send a message ${this.state.profile.name} to what you’re looking for in a tutor.`,
    };
    msgDefs.EXAMPLE_MESSAGES_LIST.splice(0, 0, msgList);

    const msgThread = {
      id,
      from: this.state.profile.name,
      thread: [],
    };
    msgDefs.EXAMPLE_MESSAGE_THREADS.splice(0, 0, msgThread);

    this.props.history.push('/app/messages');
  }

  viewTranscripts() {
    window.open(this.props.profile.transcriptUrl);
  }

  closeReview() {
    this.setState({ ...this.state, isReviewing: false });
  }

  render() {
    const {
      isReviewing,
      isTutor,
      profile,
      reviews,
    } = this.state;

    return (
      <div className={classNames(style.profile_page)}>
        <ReviewModal
          open={!isTutor && isReviewing}
          onClose={this.closeReview}
          onAddReview={this.addReview}
        />

        <div className={classNames(style.person_wrapper)}>
          <img className={style.picture} src={profile.photoUrl || defs.DEFAULT_IMAGE} alt="profile" />
          <div className={style.person_info}>
            <h3 className={style.name}>
              {profile.name}
            </h3>
            <p className={style.bio}>
              {profile.bio}
            </p>
            <div className={style.avg_review_wrapper}>
              <div className={style.avg_review}>
                {this.calculateAvgReview(reviews)}
              </div>
              <p>{reviews.length} Reviews</p>
            </div>
          </div>
        </div>
        {isTutor && (
          <button
            className={classNames(style.edit_profile, 'hover')}
            onClick={this.editProfile}
            type="button"
          >
            Edit Profile
          </button>
        )}
        {!isTutor && (
          <div>
            <button
              className={classNames(style.request_tutor, 'hover')}
              onClick={this.requestTutor}
              type="button"
            >
              Request Tutor
            </button>
            <button
              className={classNames(style.view_transcripts, 'hover')}
              onClick={this.viewTranscripts}
              type="button"
            >
              View Transcripts
            </button>
          </div>
        )}
        <h2 className={style.subject_header}>
          Subjects
        </h2>
        <div className={style.subject_wrapper}>
          {this.getSubjectComponent()}
        </div>
        <h2 className={style.availability_header}>
          Availability
        </h2>
        <p className={style.availability}>
          {profile.availability}
        </p>
        <div className={style.review_header_wrapper}>
          <h2 className={style.review_header}>
            Reviews
          </h2>
          {!isTutor && (
            <button
              className={classNames(style.review_add, 'hover')}
              onClick={this.openAddReview}
              type="button"
            >
              <PlusIcon className={style.review_add_icon} />
              {' Add'}
            </button>
          )}
        </div>
        <div className={style.review_wrapper}>
          {this.getAllReviews()}
        </div>
      </div>
    );
  }
}

ProfileComponent.propTypes = {
  isTutor: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

ProfileComponent.defaultProps = {
  isTutor: true,
  profile: defs.EXAMPLE_PROFILE,
  reviews: defs.EXAMPLE_REVIEWS,
};

export default ProfileComponent;
