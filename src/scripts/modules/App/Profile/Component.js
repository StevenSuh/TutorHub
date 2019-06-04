import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

import Modal from 'src/scripts/components/Modal/Component';
import ReviewModal from './ReviewModal/Component';
import ImageGridModal from './ImageGridModal/Component';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';
import { ReactComponent as PlusIcon } from 'src/assets/icons/plus_icon.svg';
import { ReactComponent as StarIcon } from 'src/assets/icons/star.svg';
import { ReactComponent as StarGreyIcon } from 'src/assets/icons/star_grey.svg';
import style from './style.module.css';
import * as defs from './defs';
import * as msgDefs from '../Messages/defs';
import * as searchDefs from '../Search/defs';
import * as settingsDefs from '../Settings/defs';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props.location.state = this.props.location.state || {};

    const hasRequested = this.props.location.state.hasRequested === undefined ?
      this.props.hasRequested : this.props.location.state.hasRequested;
    const isTutor = this.props.location.state.isTutor === undefined ?
      this.props.isTutor : this.props.location.state.isTutor;
    const isSearching = this.props.location.state.isSearching === undefined ?
      this.props.isSearching : this.props.location.state.isSearching;
    let profile = this.props.profile;
    let reviews = this.props.reviews;

    if (this.props.match.params.id) {
      const id = parseInt(this.props.match.params.id, 10);
      const item = searchDefs.EXAMPLE_PROFILES.find(item => item.id === id);

      if (item) {
        profile = item;
        reviews = item.reviews;
      }
    }

    this.state = {
      isTranscripts: false,
      isDisabled: isTutor && !settingsDefs.CURRENT_SETTINGS.tutorMode,
      hasReviewed: false,
      hasRequested,
      isSearching,
      isReviewing: false,
      isTutor,
      profile,
      reviews,
    };

    this.addReview = this.addReview.bind(this);
    this.openAddReview = this.openAddReview.bind(this);
    this.editProfile = this.editProfile.bind(this);
    this.requestTutor = this.requestTutor.bind(this);
    this.closeReview = this.closeReview.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      const id = parseInt(this.props.match.params.id, 10);
      const index = searchDefs.EXAMPLE_PROFILES.findIndex(item => item.id === id);
  
      if (index === -1) {
        this.props.history.back();
      }
    }
  }

  calculateAvgReview(reviews) {
    const totalScore = reviews.reduce((x, { rating }) => rating + x, 0);
    const avgReviewScore = Math.round(totalScore / Math.max(reviews.length, 1));

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
    const items = this.state.profile.subjects.map(({ title, description }) => (
      <div className={style.subject} key={title}>
        <h4 className={style.subject_title}>
          {title}
        </h4>
        <p className={style.subject_description}>
          {description}
        </p>
      </div>
    ));

    if (items.length === 0) {
      items.push(
        <div className={style.empty_subjects} key={0}>
          No Subjects
        </div>
      );
    }

    return items;
  }

  getAllReviews() {
    const items = this.state.reviews.map(({ rating, date, description }, index) => (
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
    
    if (items.length === 0) {
      items.push(
        <div className={style.empty_reviews} key={0}>
          No Reviews
        </div>
      );
    }

    return items;
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
    const firstItem = msgDefs.CURRENT_MESSAGES_LIST[msgDefs.CURRENT_MESSAGES_LIST.length - 1];
    const id = firstItem === undefined ? 0 : firstItem.id + 1;

    const msgList = {
      id,
      isNew: true,
      from: this.state.profile.name,
      fromPhotoUrl: this.state.profile.photoUrl,
      date: moment().format('M/DD/YY'),
      lastMessage: `Send a message to ${this.state.profile.name} to talk about what you’re looking for in a tutor.`,
    };
    msgDefs.CURRENT_MESSAGES_LIST.splice(0, 0, msgList);

    const msgThread = {
      id,
      from: this.state.profile.name,
      thread: [],
    };
    msgDefs.CURRENT_MESSAGE_THREADS.splice(0, 0, msgThread);

    this.props.history.push('/app/messages');
  }

  viewTranscripts = () => {
    this.setState({ ...this.state, isTranscripts: true });
  }

  closeTranscripts = () => {
    this.setState({ ...this.state, isTranscripts: false });
  }

  closeReview(hasReviewed = false) {
    this.setState({ ...this.state, isReviewing: false, hasReviewed });
  }

  onClickBack = () => {
    this.props.history.goBack();
  }

  render() {
    const {
      hasReviewed,
      hasRequested,
      isDisabled,
      isReviewing,
      isSearching,
      isTranscripts,
      isTutor,
      profile,
      reviews,
    } = this.state;

    return (
      <div className={classNames(style.profile_page)}>
        <Modal open={isDisabled}>
          <div className={style.error_content}>
            <h2 className={style.error_header}>
              Tutor Mode is disabled
            </h2>
            <p className={style.error_msg}>
              To continue, enable tutor mode at Settings page
            </p>
            <div
              className={classNames(style.error_confirm, 'hover')}
              onClick={() => this.props.history.push('/app/settings')}
            >
              Confirm
            </div>
          </div>
        </Modal>
        <ReviewModal
          open={!isTutor && isReviewing}
          onClose={this.closeReview}
          onAddReview={this.addReview}
        />
        <ImageGridModal
          onClose={this.closeTranscripts}
          onSubmit={this.closeTranscripts}
          open={isTranscripts}
          links={profile.transcriptUrls}
          isEditing={false}
        />

        {this.props.location.pathname !== '/app/profile' && (
          <div className={style.back_button}>
            <div
              className={style.back_wrapper}
              onClick={this.onClickBack}
            >
              <ChevronLeft />
              <div className={style.back_text}>Back</div>
            </div>
          </div>
        )}

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
        <div className={style.tutor_wrapper}>
          {isTutor && (
            <button
              className={classNames(style.edit_profile, 'hover')}
              onClick={this.editProfile}
              type="button"
            >
              Edit Profile
            </button>
          )}
          {!isTutor && !hasRequested && (
            <button
              className={classNames(style.request_tutor, 'hover')}
              onClick={this.requestTutor}
              type="button"
            >
              Request Tutor
            </button>
          )}
          {!isTutor && (
            <button
              className={classNames(style.view_transcripts, 'hover')}
              onClick={this.viewTranscripts}
              type="button"
            >
              View Transcripts
            </button>
          )}
        </div>
        <h2 className={style.subject_header}>
          Subjects
        </h2>
        <div className={style.subject_wrapper}>
          {this.getSubjectComponent()}
        </div>
        <h2 className={style.availability_header}>
          Availability
        </h2>
        {profile.availability && (
          <p className={style.availability}>
            {profile.availability}
          </p>
        )}
        {!profile.availability && (
          <div className={style.empty_availability}>
            No Availability
          </div>
        )}
        <div className={style.review_header_wrapper}>
          <h2 className={style.review_header}>
            Reviews
          </h2>
          {!isTutor && !isSearching && !hasReviewed && (
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
  hasRequested: PropTypes.bool.isRequired,
  isTutor: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

ProfileComponent.defaultProps = {
  hasRequested: false,
  isTutor: true,
  isSearching: false,
  profile: defs.CURRENT_PROFILE,
  reviews: defs.CURRENT_REVIEWS,
};

export default ProfileComponent;
