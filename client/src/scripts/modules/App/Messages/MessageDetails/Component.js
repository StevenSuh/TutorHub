import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import style from './style.module.css';
import * as defs from '../defs';

import { ReactComponent as ChevronLeft } from 'src/assets/icons/chevron-left.svg';

class MessagesComponent extends React.Component {
  constructor(props) {
    super(props);

    const id = parseInt(this.props.match.params.id, 10);
    const item = defs.CURRENT_MESSAGE_THREADS.find(item => item.id === id);
    const msgItem = defs.CURRENT_MESSAGES_LIST.find(item => item.id === id);

    if (item && msgItem) {
      msgItem.isNew = false;

      this.state = {
        id: item.id,
        isTalkingToTutor: item.isTalkingToTutor,
        from: item.from,
        thread: item.thread,
      };
    } else {
      this.state = {
        id: null,
        isTalkingToTutor: null,
        from: null,
        thread: [],
      };
    }

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

    const msgItem = defs.CURRENT_MESSAGES_LIST.find(item => item.id === this.state.id);
    msgItem.lastMessage = 'You: ' + input.value;
    msgItem.date = moment().format('M/DD/YY');

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
    const index = defs.CURRENT_MESSAGE_THREADS.findIndex(item => item.id === id);

    if (index === -1) {
      this.props.history.push('/app/messages');
    }
  }

  getMessageThreadItems() {
    const thread = this.state.thread;

    const items = thread.map((message, index) => (
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
    ));

    if (items.length === 0) {
      if (this.state.isTalkingToTutor) {
        items.push(
          <h4 className={style.no_msg} key={0}>
            {`Send a message ${this.state.from} to what you’re looking for in a tutor.`}
          </h4>
        );
      } else {
        items.push(
          <h4 className={style.no_msg} key={0}>
            {`Send a message to ask ${this.state.from} looking for in a tutor.`}
          </h4>
        );
      }
    }

    return items;
  }

  render() {
    const from = this.state.from;

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
          {this.getMessageThreadItems()}
        </div>
      
        <div className={style.text_form}>
          <input
            className={style.text_active}
            onKeyUp={this.onInputKeyUp}
            id="send_input"
            type="text"
            autoComplete="off"
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