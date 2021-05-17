import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SendingMessage from "./SendingMessage";

const Messages = ({ mainUser, chatSelected }) => {
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
  }

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
        sentTime: Date(),
        sentText: messageToBeSent,
        to: userId,
      };
      mainUser.allMessages.push(message);
      receiveMessage(messageToBeSent, mainUser.id);
      setTextValue("");
    } else {
      return false;
    }
  };

  const receiveMessage = (messageToSendBack, backToId) => {
    const fakeMessage = {
      sentTime: Date(),
      sentText: messageToSendBack + " this is repeated message.",
      to: backToId,
    };
    chatSelected.allMessages.push(fakeMessage);
  };

  // Filter messages to the same person and concat them as a conversation
  const sentTexts = mainUser.allMessages.filter(({ to }) => to === id);
  const receivedTexts = chatSelected.allMessages.filter(
    ({ to }) => to === mainUser.id
  );
  const concatedConversation = sentTexts.concat(receivedTexts);
  const conversation = concatedConversation
    .slice()
    .sort((a, b) => b.sentTime - a.sentTime);
  console.log(conversation);
  console.log("conc", concatedConversation);

  // API Settings
  const apiKey = "$2b$10$zsQeFc4HAPaWVNwcqq1M3eCNVtIzBNNQ4tybT4HRbzs8iP9dJoLpO";
  const apiUrl = "https://api.jsonbin.io/b/60a2c2f3d5b0ee05c1ef7861/latest";

  const headers = {
    "Content-Type": "application/json",
    "secret-key": apiKey,
    versioning: "false",
  };

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
        <button onClick={() => getJson()}>GET</button>
        <button onClick={() => postNewMessage()}>PUT</button>
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
                  <div className="message-time">{sentTime}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-messages">No messages</div>
        )}
      </main>
      <footer className="chat_container-send padding-10">
        <SendingMessage textValue={textValue} handleSendForm={handleSendForm} setInputValue={setInputValue}/>
      </footer>
    </section>
  );
};

export default Messages;
