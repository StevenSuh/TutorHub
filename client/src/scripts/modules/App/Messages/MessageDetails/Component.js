import React from 'react';

import style from './style.module.css';
import * as defs from '../defs';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';


class MessagesComponent extends React.Component {
  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    const messages = defs.EXAMPLE_MESSAGE_THREADS;

    if (id < 0 || id >= messages.length) {
      this.props.history.push('/app/messages');
    }
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);

    console.log('1', defs.EXAMPLE_MESSAGE_THREADS);
    const thread = defs.EXAMPLE_MESSAGE_THREADS[id];
    console.log('2', thread);

    /*
    [1, 2, 3, 4].map((arrItem) => {
      console.log(arrItem); // 1 2 3 4
      return [arrItem * 2, arrItem * 3];
    }); => [2, 4, 6, 8]
    
    */

    return (
      <div className={style.messages_page}>

        <div className={style.back_button}>
          <ChevronLeft />
          Back
        </div>

        {thread.map((message, index) => (
          <div key={index}>
            <div className={style.name}>{message.from}</div>
            <div className={style.message_text}>{message.message}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default MessagesComponent;
