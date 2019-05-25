import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';
import { ReactComponent as StarIcon } from 'src/assets/icons/star.svg';
import { ReactComponent as StarGreyIcon } from 'src/assets/icons/star_grey.svg';
import style from './style.module.css';
import * as defs from '../defs';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.props.location.state = this.props.location.state || {};

    const query = this.props.location.state.query === undefined ?
      this.props.query : this.props.location.state.query;

    this.state = {
      query,
    };
  }

  onClickBack = () => {
    this.props.history.goBack();
  }

  onClickItem = (id) => {
    this.props.history.push(`/app/search/profile/${id}`, { isTutor: false, isSearching: true });
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

  renderProfileItems = () => {
    const query = this.state.query.toLowerCase();
    const allProfiles = defs.EXAMPLE_PROFILES;
    const profiles = allProfiles.filter(({ subjects }) => {
      for (let subject of subjects) {
        const titleIdx = subject.title.toLowerCase().indexOf(query);
        const descIdx = subject.description.toLowerCase().indexOf(query);

        if (titleIdx > -1 || descIdx > -1) {
          return true;
        }
      }
      return false;
    });

    const items = profiles.map((profile, index) => (
      <div
        className={classNames(style.person_wrapper, 'hover')}
        onClick={() => this.onClickItem(profile.id)}
        key={index}
      >
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
              {this.calculateAvgReview(profile.reviews)}
            </div>
            <p>{profile.reviews.length} Reviews</p>
          </div>
        </div>
      </div>
    ));

    if (items.length === 0) {
      items.push(
        <div className={style.no_results}>No Results</div>
      );
    }

    return items;
  }

  render() {
    return (
      <div className={style.search_results_page}>
        <div className={style.back_button}>
          <div
            className={style.back_wrapper}
            onClick={this.onClickBack}
          >
            <ChevronLeft />
            <div className={style.back_text}>Back</div>
          </div>
        </div>

        <h2 className={style.h2}>
          <span>{'Tutors For '}</span>
          {this.state.query}
        </h2>

        {this.renderProfileItems()}
      </div>
    );
  }
}

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
};

SearchResults.defaultProps = {
  query: 'Econ',
};

export default SearchResults;
