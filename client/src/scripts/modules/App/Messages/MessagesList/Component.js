import React from 'react';
import classNames from 'classnames';

import MessageDetails from '../MessageDetails/Component';

import style from './style.module.css';
import * as defs from '../defs';

class MessagesComponent extends React.Component {
  onClickMessageItem(index) {
    this.props.history.push(`/app/messages/${index}`);
  }

  render() {
    const messages = defs.EXAMPLE_MESSAGES_LIST;

    return (
      <div className={style.messages_page}>
        {messages.map((message, index) => (
          <div
            className={classNames({
              [style.message_container]: true,
              [style.seen]: message.isNew,
            })}
            onClick={() => this.onClickMessageItem(index)}
            key={index}
          >
            <img className={style.image} src={message.fromPhotoUrl} />
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
        ))}
      </div>
    );
  }
}

export default MessagesComponent;
