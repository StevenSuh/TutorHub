import React from 'react';
import classNames from 'classnames';

import { ReactComponent as CheckIcon } from 'src/assets/icons/check.svg';
import style from './style.module.css';
import * as defs from './defs';
import * as profileDefs from '../Profile/defs';

class SettingsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: profileDefs.CURRENT_PROFILE.name,
      settings: defs.CURRENT_SETTINGS,
    };
  }

  onNameChange = ({ target }) => {
    profileDefs.CURRENT_PROFILE.name = target.value;

    this.setState({
      ...this.state,
      name: target.value,
    });
  }

  onTutorModeChange = () => {
    const { settings } = this.state;
    settings.tutorMode = !settings.tutorMode;

    this.setState({
      ...this.state,
      settings,
    });
  }

  onMessagesChange = () => {
    const { settings } = this.state;
    settings.messages = !settings.messages;

    this.setState({
      ...this.state,
      settings,
    });
  }

  render() {
    return (
      <div className={style.settings_page}>
        <div className={style.title}>Settings</div>

        <div className={style.header_wrapper}>
          <h4 className={style.header}>Edit Name</h4>
          <input
            className={style.input}
            placeholder="Name"
            onChange={this.onNameChange}
            value={this.state.name}
          />
        </div>

        <div className={style.header_wrapper}>
          <h4 className={style.header}>Account</h4>
          <div className={style.check_wrapper}>
            <p>Tutor Mode</p>
            <CheckIcon
              onClick={this.onTutorModeChange}
              className={classNames({
                [style.check_icon]: true,
                [style.active]: this.state.settings.tutorMode,
              })}
            />
          </div>
        </div>

        <div className={style.header_wrapper}>
          <h4 className={style.header}>Notifications</h4>
          <div className={style.check_wrapper}>
            <p>Messages</p>
            <CheckIcon
              onClick={this.onMessagesChange}
              className={classNames({
                [style.check_icon]: true,
                [style.active]: this.state.settings.messages,
              })}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsComponent;
