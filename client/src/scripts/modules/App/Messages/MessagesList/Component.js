import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';
import * as defs from '../defs';

class MessagesComponent extends React.Component {
  onClickMessageItem(index) {
    this.props.history.push(`/app/messages/${index}`);
  }

  renderMessageItems() {
    const messages = defs.CURRENT_MESSAGES_LIST;

    const items = messages.map((message, index) => (
      <div
        className={classNames({
          [style.message_container]: true,
          [style.seen]: message.isNew,
        })}
        onClick={() => this.onClickMessageItem(message.id)}
        key={index}
      >
        <img className={style.image} src={message.fromPhotoUrl || defs.DEFAULT_IMAGE} alt="profile" />
        <div className={style.text_container}>
          <div className={style.name_date}>
            <div className={style.name}>
              {message.from}
            </div>
            <div className={style.date}>
              {message.date}
            </div>
          </div>
          <div className={style.user_message}>
            {message.lastMessage}
          </div>
        </div>
      </div>
    ));

    if (items.length === 0) {
      items.push(
        <div className={style.empty_list} key={0}>
          No messages here.<br />Go find someone to talk to!
        </div>
      );
    }

    return items;
  }

  render() {

    return (
      <div className={style.messages_page}>
        {this.renderMessageItems()}
      </div>
    );
  }
}

export default MessagesComponent;

