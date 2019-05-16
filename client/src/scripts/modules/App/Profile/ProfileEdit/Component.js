import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as EditIcon } from 'src/assets/icons/edit_icon.svg';
import style from './style.module.css';

class ProfileEditComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bioFocus: false,
      profile: this.props.profile,
      subjectFocus: [],
    };

    this.onBioChange = this.onBioChange.bind(this);
    this.onBioFocus = this.onBioFocus.bind(this);
    this.deleteSubject = this.deleteSubject.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.onSubjectFocus = this.onSubjectFocus.bind(this);
  }

  onBioChange({ target }) {
    const { value } = target;
    const { profile } = this.state;
    profile.bio = value;

    this.setState({ ...this.state, profile });
  }

  onBioFocus() {
    const { bioFocus } = this.state;
    this.setState({ ...this.state, bioFocus: !bioFocus });
  }

  getSubjectItems() {
    const { profile, subjectFocus } = this.state;

    return profile.subjects.map(({ title, description }, index) => (
      <div className={style.subject_item} key={title}>
        <div className={style.subject_item_header_wrapper}>
          <h4 className={style.subject_item_header}>{title}</h4>
          <button
            className={style.subject_delete}
            onClick={() => this.deleteSubject(index)}
          >
            Delete
          </button>
        </div>
        <div className={style.subject_item_desc_wrapper}>
          <EditIcon className={classNames({
            [style.subject_edit]: true,
            [style.active]: subjectFocus[index],
          })} />
          <textarea
            className={style.subject_item_desc}
            rows="3"
            placeholder="Edit your subject description..."
            onBlur={() => this.onSubjectFocus(index)}
            onChange={(event) => this.onSubjectChange(index, event)}
            onFocus={() => this.onSubjectFocus(index)}
            value={description}
          />
        </div>
      </div>
    ));
  }

  deleteSubject(index) {
    const { profile } = this.state;
    profile.subjects.splice(index, 1);

    this.setState({ ...this.state, profile });
  }

  onSubjectChange(index, { target }) {
    const { value } = target;
    const { profile } = this.state;
    profile.subjects[index].description = value;

    this.setState({ ...this.state, profile });
  }

  onSubjectFocus(index) {
    const { subjectFocus } = this.state;
    subjectFocus[index] = !subjectFocus[index];

    this.setState({ ...this.state, subjectFocus });
  }

  render() {
    const {
      bioFocus,
      profile,
    } = this.state;

    return (
      <div className={style.profile_edit_page}>
        <img className={style.picture} src={profile.photoUrl} alt="profile" />
        <button
          className={style.change_picture}
          onClick={this.openPictureUrl}
        >
          Change Profile Photo
        </button>
        <hr />
        <div className={style.bio_wrapper}>
          <h3 className={style.bio_header}>Bio</h3>
          <EditIcon className={classNames({
            [style.bio_icon]: true,
            [style.active]: bioFocus,
          })} />
          <textarea
            className={style.bio}
            rows="3"
            placeholder="Edit your bio..."
            onBlur={this.onBioFocus}
            onChange={this.onBioChange}
            onFocus={this.onBioFocus}
            value={profile.bio}
          />
        </div>
        <hr />
        <div className={style.subject_wrapper}>
          <h3 className={style.subject_header}>
            Subjects
          </h3>
          {this.getSubjectItems()}
        </div>
      </div>
    );
  }
}

ProfileEditComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onModifyProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default ProfileEditComponent;
