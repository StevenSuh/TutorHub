import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ImageLinkModal from '../ImageLinkModal/Component';
import SubjectModal from '../SubjectModal/Component';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';
import { ReactComponent as EditIcon } from 'src/assets/icons/edit_icon.svg';
import style from './style.module.css';
import * as defs from '../defs';

class ProfileEditComponent extends React.Component {
  constructor(props) {
    super(props);

    const { availability } = this.props.profile;
    const isDefault = availability === '' || availability === 'Message for availability';

    if (isDefault) {
      this.props.profile.availability = '';
    }

    this.state = {
      availType: isDefault ? '0' : '1',
      bioFocus: false,
      changeLink: 'picture',
      isAdding: false,
      isChangingPic: false,
      profile: this.props.profile,
      subjectFocus: [],
    };
  }

  onClickBack = () => {
    this.props.history.goBack();
  }

  openPictureUrl = () => {
    this.setState({ ...this.state, isChangingPic: true, changeLink: 'picture' });
  }

  openTranscriptUrl = () => {
    this.setState({ ...this.state, isChangingPic: true, changeLink: 'transcript' });
  }

  closePictureUrl = () => {
    this.setState({ ...this.state, isChangingPic: false });
  }

  changePictureUrl = (result) => {
    const { profile } = this.state;

    for (let key in result) {
      profile[key] = result[key];
    }

    this.setState({ ...this.state, profile });
  }

  onBioChange = ({ target }) => {
    const { value } = target;
    const { profile } = this.state;
    profile.bio = value;

    this.setState({ ...this.state, profile });
  }

  onBioFocus = () => {
    const { bioFocus } = this.state;
    this.setState({ ...this.state, bioFocus: !bioFocus });
  }

  getSubjectItems = () => {
    const { profile, subjectFocus } = this.state;

    const items = profile.subjects.map(({ title, description }, index) => (
      <div className={style.subject_item} key={title}>
        <div className={style.subject_item_header_wrapper}>
          <h4 className={style.subject_item_header}>{title}</h4>
          <button
            className={classNames(style.subject_delete, 'hover', 'active')}
            onClick={() => this.deleteSubject(index)}
          >
            Delete
          </button>
        </div>
        <div className={style.subject_item_desc_wrapper}>
          <EditIcon className={classNames({
            [style.subject_icon]: true,
            [style.active]: subjectFocus[index],
          })} />
          <textarea
            className={classNames({
              [style.subject_item_desc]: true,
              [style.active]: subjectFocus[index],
            })}
            placeholder="Edit your subject description..."
            onBlur={() => this.onSubjectFocus(index)}
            onChange={(event) => this.onSubjectChange(index, event)}
            onFocus={() => this.onSubjectFocus(index)}
            value={description}
          />
        </div>
      </div>
    ));

    if (items.length === 0) {
      items.push(
        <h4 className={style.no_subject} key="Empty">
          No Subjects
        </h4>
      );
    }

    return items;
  }

  deleteSubject = (index) => {
    const { profile } = this.state;
    profile.subjects.splice(index, 1);

    this.setState({ ...this.state, profile });
  }

  onSubjectChange = (index, { target }) => {
    const { value } = target;
    const { profile } = this.state;
    profile.subjects[index].description = value;

    this.setState({ ...this.state, profile });
  }

  onSubjectFocus = (index) => {
    const { subjectFocus } = this.state;
    subjectFocus[index] = !subjectFocus[index];

    this.setState({ ...this.state, subjectFocus });
  }

  openTutor = () => {
    this.setState({ ...this.state, isAdding: true });
  }

  closeTutor = () => {
    this.setState({ ...this.state, isAdding: false });
  }

  addTutor = (course) => {
    const { profile } = this.state;
    profile.subjects.push(course);

    this.setState({ ...this.state, profile });
  }

  onChangeAvailType = (value) => {
    if (value !== this.state.availType) {
      const { profile } = this.state;

      this.setState({
        ...this.state,
        availType: value,
        profile,
      });
    }
  }

  onCustomChange = ({ target }) => {
    const { profile } = this.state;
    profile.availability = target.value;

    this.setState({
      ...this.state,
      profile,
    });
  }

  onDone = () => {
    const { profile } = this.state;

    if (this.state.availType === '0') {
      profile.availability = 'Message for availability';
    }

    for (let key in profile) {
      defs.EXAMPLE_PROFILE[key] = profile[key];
    }
    
    this.props.history.push('/app/profile');
  }

  render() {
    const {
      bioFocus,
      isAdding,
      isChangingPic,
      changeLink,
      profile,
    } = this.state;

    return (
      <div className={style.profile_edit_page}>
        <ImageLinkModal
          open={isChangingPic}
          onClose={this.closePictureUrl}
          onSubmit={this.changePictureUrl}
          link={changeLink === 'picture' ? profile.photoUrl : profile.transcriptUrl}
          type={changeLink}
        />
        <SubjectModal
          open={isAdding}
          onClose={this.closeTutor}
          onSubmit={this.addTutor}
        />

        <div className={style.back_button}>
          <div
            className={style.back_wrapper}
            onClick={() => this.onClickBack()}
          >
            <ChevronLeft />
            <div className={style.back_text}>Back</div>
          </div>
          <button
            className={classNames(style.done_text, 'hover')}
            onClick={this.onDone}
            type="button"
          >
            Done
          </button>
        </div>
        <img className={style.picture} src={profile.photoUrl || defs.DEFAULT_IMAGE} alt="profile" />
        <button
          className={classNames(style.change_picture, 'hover')}
          onClick={this.openPictureUrl}
        >
          Change Profile Photo
        </button>
        <button
          className={classNames(style.edit_transcript, 'hover')}
          onClick={this.openTranscriptUrl}
          type="button"
        >
          Edit Transcripts
        </button>
        <hr />
        <div className={style.bio_wrapper}>
          <h3 className={style.bio_header}>Bio</h3>
          <EditIcon className={classNames({
            [style.bio_icon]: true,
            [style.active]: bioFocus,
          })} />
          <textarea
            className={classNames({
              [style.bio]: true,
              [style.active]: bioFocus,
            })}
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
          <button
            className={classNames(style.new_course, 'hover')}
            onClick={this.openTutor}
            type="button"
          >
            Tutor New Subject
          </button>
        </div>
        <hr />
        <div className={style.avail_wrapper}>
          <h3 className={style.subject_header}>
            Availability
          </h3>
          <div
            className={style.radio_wrapper}
            onClick={() => this.onChangeAvailType('0')}
          >
            <span className={classNames({
              [style.radio_span]: true,
              [style.active]: this.state.availType === '0',
            })} />
            <span className={classNames({
              [style.label]: true,
              [style.active]: this.state.availType === '0',
            })}>
              Message for availability
            </span>
          </div>
          <div
            className={style.radio_wrapper}
            onClick={() => this.onChangeAvailType('1')}
          >
            <span className={classNames({
              [style.radio_span]: true,
              [style.active]: this.state.availType === '1',
            })} />
            <div className={style.custom_radio}>
              <span className={classNames({
                [style.label]: true,
                [style.active]: this.state.availType === '1',
              })}>
                Custom
              </span>
              <textarea
                className={style.input_form}
                rows="3"
                placeholder="ie. Monday - 12PM to 6PM"
                onChange={this.onCustomChange}
                value={profile.availability}
              />
            </div>
          </div>
          <button
            className={classNames(style.new_course, 'hover')}
            onClick={this.onDone}
            type="button"
          >
            Done
          </button>
        </div>
      </div>
    );
  }
}

ProfileEditComponent.propTypes = {
  profile: PropTypes.object.isRequired,
};

ProfileEditComponent.defaultProps = {
  profile: defs.CURRENT_PROFILE,
};

export default ProfileEditComponent;
