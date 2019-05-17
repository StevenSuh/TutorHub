import React from 'react';

import MessagesList from './MessagesList/Component';

import style from './style.module.css';

class MessagesComponent extends React.Component {
  render() {
    return (
      <div className={style.messages_page}>
       
       <div className={style.title}>Messages Page</div>
        
        <MessagesList {...this.props} />

      </div>
      
    );
  }
}

export default MessagesComponent;
