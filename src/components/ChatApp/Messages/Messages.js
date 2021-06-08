import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";

import { apiUrl, headers } from "../../../js/apiSettings";
import InputContainer from "./InputContainer";
import SingleMessage from "./SingleMessage";
import useFetch from "../../../js/useFetch";

const Messages = ({ mainUser, chatSelected, chatUsers, handleUserUpdate }) => {
  const scrollTo = useRef();
  const [textValue, setTextValue] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [tempUsers, setTempUsers] = useState(chatUsers);
  const { api } = useFetch(apiUrl, headers);

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

  // Checking if value ir not empty and sending it through functions
  const handleSendForm = (e) => {
    e.preventDefault();

    if (textValue !== null || textValue.length > 0) {
      sendMessage(textValue, chatSelected.id);
    } else {
      console.log("suveikia handlesendforma");
      setMessageError(true);
      return false;
    }
  };

  // Message updates to API
  const sendMessage = (messageToBeSent, userId) => {
    if (userId !== undefined || userId !== null) {
      // Prepare the message object
      const mainUserMessages = {
        ...mainUser,
        allMessages: [
          ...mainUser.allMessages,
          {
            sentTime: moment().format(),
            sentText: messageToBeSent,
            to: userId,
          },
        ],
      };
      const fakeUserMessages = {
        ...chatSelected,
        allMessages: [
          ...chatSelected.allMessages,
          {
            sentTime: moment().add(1, "seconds").format(),
            sentText: messageToBeSent + " (this is repeated message)",
            to: mainUser.id,
          },
        ],
      };

      setTempUsers([
        ...chatUsers.map((user) => {
          if (user.id === mainUser.id) {
            return (user = mainUserMessages);
          } else if (user.id === chatSelected.id) {
            return (user = fakeUserMessages);
          }
          return user;
        }),
      ]);
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (api.putData(tempUsers)) {
      setMessageError(false);
      setTextValue("");
      handleUserUpdate();
      scrollTo.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log('fail');
      setTextValue("");
      setMessageError(true);
    }
  }, [tempUsers]);

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
