import React from 'react';

import style from './style.css?module';

class MessagesComponent extends React.Component {
  render() {
    return (
      <div className={style.messages_page}>Messages Page</div>
    );
  }
}

export default MessagesComponent;
