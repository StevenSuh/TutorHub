import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';
import * as defs from '../defs';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';


class MessagesComponent extends React.Component {
  constructor(props) {
    super(props);

    const id = parseInt(this.props.match.params.id, 10);
    const item = defs.EXAMPLE_MESSAGE_THREADS[id];

    this.state = {
      from: item.from,
      thread: item.thread,
    };

    this.chatWrapper = React.createRef();
    this.onClickSend = this.onClickSend.bind(this);
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
  }

  onClickBack() {
    // this.props.history.push('/app/messages');
    this.props.history.goBack();
  }

  onClickSend() {
    const input = document.getElementById('send_input');

    const newThread = this.state.thread;
    newThread.push({
      isYou: true,
      from: 'Stanley',
      timestamp: new Date(),
      message: input.value,
    });

    this.setState({
      ...this.state,
      thread: newThread,
    });

    input.value = '';

    setTimeout(() => {
      this.chatWrapper.current.scrollTop = this.chatWrapper.current.scrollHeight;
    });
  }

  onInputKeyUp(event) {
    if (event.key === 'Enter') {
      const input = document.getElementById('send_input');

      if (input.value) {
        this.onClickSend();
      }
    }
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    const messages = defs.EXAMPLE_MESSAGE_THREADS;

    if (id < 0 || id >= messages.length) {
      this.props.history.push('/app/messages');
    }
  }

  render() {
    const from = this.state.from;
    const thread = this.state.thread;

    return (
      <div className={style.messages_page}>
        <div
          className={style.chat_wrapper}
          ref={this.chatWrapper}
        >
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
              <div className={classNames({
                [style.message_text]: true,
                [style.you]: message.isYou,
              })}>
                {message.message}
              </div>
            </div>
          ))}
        </div>
      
        <div className={style.text_form}>
          <input
            className={style.text_active}
            onKeyUp={this.onInputKeyUp}
            id="send_input"
            type="text"
            placeholder="Type a message..."
          />
          <div className={style.submit_button} onClick={this.onClickSend}>
            SEND
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