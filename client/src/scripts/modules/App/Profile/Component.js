import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './style.module.css';
import * as defs from './defs';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      profile: this.props.profile,
      reviews: this.props.reviews,
    };
  }

  render() {
    return (
      <div
        className={classNames(style.profile_page)}
      >
        Profile Page
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
  isTutor: false,
  profile: defs.EXAMPLE_PROFILE,
  reviews: defs.EXAMPLE_REVIEWS,
};

export default ProfileComponent;
