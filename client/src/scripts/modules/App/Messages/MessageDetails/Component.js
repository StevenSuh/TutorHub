import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';
import * as defs from '../defs';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';


class MessagesComponent extends React.Component {

  onClickBack() {
    // this.props.history.push('/app/messages');
    this.props.history.goBack();
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    const messages = defs.EXAMPLE_MESSAGE_THREADS;

    if (id < 0 || id >= messages.length) {
      this.props.history.push('/app/messages');
    }
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);

    const from = defs.EXAMPLE_MESSAGE_THREADS[id].from;
    const thread = defs.EXAMPLE_MESSAGE_THREADS[id].thread;

    return (
      <div className={style.messages_page}>
        <div className={style.back_button}
        onClick={() => this.onClickBack()}>
          <ChevronLeft />
          <div className={style.back_text}>Back</div>
        </div>
        <div className={style.sender}>{from}</div>
        {thread.map((message, index) => (
          <div key={index}>
            <div className={classNames({
              [style.name]: true,
              [style.you]: message.isYou,
            })}>
              {message.from}
            </div>
            <div className={style.message_text}>{message.message}</div>
          </div>
        ))}
      
        <div className={style.text_input}>
          <div className={style.text_outline}>
            <div className={style.text_form}>
              <input className={style.text_active} type="text" placeholder="Type a message..."/>
                <div className={style.submit_button}>
                  SEND
                </div>
            </div>
          </div>
        </div>

      </div>
    );

  }
}

export default MessagesComponent;

    /*
    [1, 2, 3, 4].map((arrItem) => {
      console.log(arrItem); // 1 2 3 4
      return [arrItem * 2, arrItem * 3];
    }); => [2, 4, 6, 8]
    
    */