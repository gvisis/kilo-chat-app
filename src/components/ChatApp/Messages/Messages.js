import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { apiUrl, headers } from "../../../js/apiSettings";

import moment from "moment";

import InputContainer from "./InputContainer";
import SingleMessage from "./SingleMessage";

const Messages = ({ mainUser, chatSelected, chatUsers }) => {
  const scrollTo = useRef();
  const [textValue, setTextValue] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [fakeMessage, setFakeMessage] = useState({});

  const setInputValue = (value) => {
    setTextValue(value);
  };
  const setErrorMessageState = (value) => {
    setMessageError(value);
  };

  // Filter messages to the same person
  const sentTexts = mainUser.allMessages.filter(
    ({ to }) => to === chatSelected.id
  );
  const receivedTexts = chatSelected.allMessages.filter(
    ({ to }) => to === mainUser.id
  );

  //Concat the converastion and sort it by time
  const concatedConversation = sentTexts.concat(receivedTexts);
  const conversation = concatedConversation
    .slice()
    .sort((a, b) => moment(b.sentTime).diff(a.sentTime));

  useEffect(() => {
    setFakeMessage(fakeMessage);
  }, [chatSelected, fakeMessage]);

  // Message updates to API
  const updateApiData = async (messageToAdd) => {
    if (messageToAdd.sentText.length > 0) {
      const fakeMessage = {
        sentTime: moment().add(1, "seconds").format(),
        sentText: messageToAdd.sentText + " (this is repeated message)",
        to: mainUser.id,
      };
      chatSelected.allMessages.push(fakeMessage);
      await axios
        .put(apiUrl, chatUsers, {
          headers: headers,
        })
        .then((response) => {
          if (response.ok) {
            setMessageError(false);
            return true;
          }
        })
        .catch((error) => {
          setMessageError(true);
          return false;
        });
    }
  };

  // Checking if value ir not empty and sending it through functions
  const handleSendForm = (e) => {
    e.preventDefault();

    if (textValue !== null || textValue.length > 0) {
      sendMessage(textValue, chatSelected.id);
    } else {
      return false;
    }
  };

  const sendMessage = (messageToBeSent, userId) => {
    if (userId !== undefined || userId !== null) {
      // Prepare the message object
      const message = {
        sentTime: moment().format(),
        sentText: messageToBeSent,
        to: userId,
      };
      mainUser.allMessages.push(message);

      // Check and update Api Data
      updateApiData(message);
      if (updateApiData(message)) {
        setTextValue("");
      } else {
        setTextValue("");
        setMessageError(true);
      }

      scrollTo.current.scrollIntoView({ behavior: "smooth" });
    } else {
      return false;
    }
  };

  return (
    <section className="chat_container">
      <header className="chat_container-title padding-10">
        <div className="chat_user-active">
          <div className="chat_user-active-name">
            {chatSelected.firstName} {chatSelected.lastName}
          </div>
          <div className="chat_user-active-status"></div>
          <span>online</span>
        </div>
      </header>
      <main className="chat_container-messages padding-10">
        <span ref={scrollTo}></span>
        <SingleMessage
          conversation={conversation}
          mainUser={mainUser}
          chatSelected={chatSelected}
        />
      </main>
      <footer className="chat_container-send padding-10">
        <InputContainer
          textValue={textValue}
          handleSendForm={handleSendForm}
          setInputValue={setInputValue}
          messageError={messageError}
          setErrorMessageState={setErrorMessageState}
        />
      </footer>
    </section>
  );
};

export default Messages;
