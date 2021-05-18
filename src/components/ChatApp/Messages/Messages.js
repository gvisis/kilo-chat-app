import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from 'moment';

import SendingMessage from "./SendingMessage";

const Messages = ({ mainUser, chatSelected }) => {
  const scrollTo = useRef();
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [receivedResult, setReceivedResult] = useState({});
  const [textValue, setTextValue] = useState("");

  // const [conversation, setConversation] = useState([]);

  const {
    name: { firstName, lastName },
    picture,
    id,
  } = chatSelected;

  const setInputValue = (value) => {
    setTextValue(value);
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    // Checking if value is valid
    if (textValue !== null || textValue.length > 0) {
      sendMessage(textValue, id);
    } else {
      return false;
    }
  };

  const sendMessage = (messageToBeSent, userId) => {
    if (
      (messageToBeSent.length !== 0 && userId !== undefined) ||
      userId !== null
    ) {
      const message = {
        sentTime: moment().format(),
        sentText: messageToBeSent,
        to: userId,
      };
      mainUser.allMessages.push(message);
      setTextValue("");
      scrollTo.current.scrollIntoView({ behavior: "smooth" });
    } else {
      return false;
    }
  };
  // console.log(chatSelected)
  // receiveMessage(messageToBeSent, mainUser.id);

  const receiveMessage = (messageToSendBack, backToId) => {
    const fakeMessage = {
      sentTime: new Date().toLocaleTimeString(),
      sentText: messageToSendBack + " this is repeated message.",
      to: backToId,
    };
    chatSelected.allMessages.push(fakeMessage);
  };

  // Filter messages to the same person
  const sentTexts = mainUser.allMessages.filter(({ to }) => to === id);
  const receivedTexts = chatSelected.allMessages.filter(
    ({ to }) => to === mainUser.id
  );
  //Concat the converastion and sort it by time

  const concatedConversation = sentTexts.concat(receivedTexts);
  const conversation = concatedConversation
    .slice()
    .sort((a, b) => moment(b.sentTime).diff(a.sentTime));
console.log(conversation);
  return (
    <section className="chat_container">
      <header className="chat_container-title padding-10">
        <div className="chat_user-active">
          <div className="chat_user-active-name">
            {firstName} {lastName}
          </div>
          <div className="chat_user-active-status"></div>
          <span>online</span>
        </div>
      </header>
      <main className="chat_container-messages padding-10">
        {conversation.length !== 0 ? (
          conversation.map(({ sentText, sentTime, to }, index) => {
            return (
              <div
                key={index}
                className={`message ${
                  to !== id ? "other_message" : "user_message"
                }`}
              >
                <img
                  src={`${to !== id ? picture : mainUser.picture}`}
                  alt={firstName}
                  className={`${to !== id ? "img_other" : "img_user"}`}
                />
                <div className="message-text">
                  {sentText}
                  <div className="message-time">{moment().format('D/MM/YYYY HH:mm',sentTime)}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-messages">No messages</div>
        )}
        <span ref={scrollTo}></span>
      </main>
      <footer className="chat_container-send padding-10">
        <SendingMessage
          textValue={textValue}
          handleSendForm={handleSendForm}
          setInputValue={setInputValue}
        />
      </footer>
    </section>
  );
};

export default Messages;
