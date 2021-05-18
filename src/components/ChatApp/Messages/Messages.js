import React, { useState, useRef } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import InputContainer from "./InputContainer";
import SingleMessage from "./SingleMessage";

const Messages = ({ mainUser, chatSelected }) => {
  const scrollTo = useRef();
  const [textValue, setTextValue] = useState("");
  const [isError, setIsError] = useState(true);

  const setInputValue = (value) => {
    setTextValue(value);
  };

  const updateApiData = async (apiUrl, messageToAdd, headers) => {

    // await axios
    //   .put(apiUrl, messages, {
    //     headers: headers,
    //   })
    //   .then((response) => {
    //     console.log(response.status);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  const handleSendForm = (e) => {
    e.preventDefault();

    // Checking if value is valid
    if (textValue !== null || textValue.length > 0) {
      sendMessage(textValue, chatSelected.id);
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
      
      if (updateApiData(message)) {
        setTextValue("");
      } else {
        setIsError("There was a problem sending your message")
      }
      // receiveMessage(messageToBeSent, mainUser.id);
      scrollTo.current.scrollIntoView({ behavior: "smooth" });
    } else {
      return false;
    }
  };

  // const receiveMessage = (messageToSendBack, backToId) => {
  //   const fakeMessage = {
  //     sentTime: moment().format(),
  //     sentText: messageToSendBack + " this is repeated message.",
  //     to: backToId,
  //   };
  //   chatSelected.allMessages.push(fakeMessage);
  // scrollTo.current.scrollIntoView({ behavior: "smooth" });
  // };

  // Filter messages to the same person
  const sentTexts = mainUser.allMessages.filter(({ to }) => to === chatSelected.id);
  const receivedTexts = chatSelected.allMessages.filter(
    ({ to }) => to === mainUser.id
  );
    
  //Concat the converastion and sort it by time
  const concatedConversation = sentTexts.concat(receivedTexts);
  const conversation = concatedConversation
    .slice()
    .sort((a, b) => moment(b.sentTime).diff(a.sentTime));

  return (
    <section className="chat_container">
      <header className="chat_container-title padding-10">
        <div className="chat_user-active">
          <div className="chat_user-active-name">
            {chatSelected.name.firstName} {chatSelected.name.lastName}
          </div>
          <div className="chat_user-active-status"></div>
          <span>online</span>
        </div>
      </header>
      <main className="chat_container-messages padding-10">
        <span ref={scrollTo}></span>
        <SingleMessage conversation={conversation} mainUser={mainUser} chatSelected={chatSelected} />
      </main>
      <footer className="chat_container-send padding-10">
        <InputContainer
          textValue={textValue}
          handleSendForm={handleSendForm}
          setInputValue={setInputValue}
          conversation={conversation}
          isError={isError}
        />
      </footer>
    </section>
  );
};

export default Messages;
