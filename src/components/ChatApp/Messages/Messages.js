import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaBorderNone, FaPaperPlane } from "react-icons/fa";

const Messages = ({ mainUser, chatSelected, chatUsers }) => {
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [receivedResult, setReceivedResult] = useState({});
  const [textValue, setTextValue] = useState("");
  const [messageToBeSent, setMessageToBeSent] = useState("");

  //   const [conversation, setConversation] = useState([]);

  const {
    name: { first, last },
    allMessages,
    picture,
    id,
  } = chatSelected;

  const allMainMessages = mainUser.allMessages;
  const sentTexts = allMainMessages.filter(({ to }) => to === id);

  const allSelectedUserMessages = chatSelected.allMessages;
  const receivedTexts = allSelectedUserMessages.filter(
    ({ to }) => to === mainUser.id
  );

  const conversation = sentTexts.concat(receivedTexts);

  const randomDate = (start, end) => {
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toLocaleString("en-UK");
  };
  const messageCreatedDate = randomDate(new Date(2021, 4, 16), new Date());

  // New data being sent
  const newName = {
    name: {
      firstName: "Naujas",
      lastName: "Mersas",
    },
    city: "Vilnius",
    email: "demo@demo.com",
    mainUser: true,
    id: "e7315309-6bdf-4365-966a-0ae037fc73d3",
    username: "yellowcat",
    phone: "07542-132-222",
    picture: "https://randomuser.me/api/portraits/women/18.jpg",
    allMessages: [
      {
        createdAt: messageCreatedDate,
        sentText: "sitas textas yra mano ir as parasiau Sofia",
        to: "d68c14af-d2a0-428f-a398-376ace41cb1e",
      },
    ],
  };

  // API Settings
  const apiKey = "$2b$10$zsQeFc4HAPaWVNwcqq1M3eCNVtIzBNNQ4tybT4HRbzs8iP9dJoLpO";
  //   const apiUrl = "https://api.jsonbin.io/b/60a28018d5b0ee05c1ef344c/latest";
  const apiUrl = "https://api.jsonbin.io/b/60a1559f3656981d5122283b/latest";

  const headers = {
    "Content-Type": "application/json",
    "secret-key": apiKey,
    versioning: "false",
  };

  // Get API Data
  const getJson = async () => {
    await axios
      .get(apiUrl, {
        headers: headers,
      })
      .then((response) => {
        setReceivedResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSendSubmit = (e) => {
    e.preventDefault();

    // Checking if value is valid
    if (textValue !== null || textValue.length > 0) {
      setMessageToBeSent({
        createdAt: Date().toLocaleString(),
        sentText: textValue,
        to: id,
      });
    } else {
      return false;
    }
  };

  // PUT New data to API
  const postNewMessage = async () => {
    await axios
      .put(apiUrl, newName, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });

    // try {
    //   const settings = {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "secret-key": apiKey,
    //       versioning: "false",
    //     },
    //     body: JSON.stringify(
    //       { ...receivedResult.users },
    //       receivedResult.users.push(newName)
    //     ),
    //   };
    //   const response = await fetch(apiUrl, settings);
    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log(data);
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <section className="chat_container">
      <header className="chat_container-title padding-10">
        <div className="chat_user-active">
          <div className="chat_user-active-name">
            {first} {last}
          </div>
          <div className="chat_user-active-status"></div>
          <span>online</span>
        </div>
        <button onClick={() => getJson()}>GET</button>
        <button onClick={() => postNewMessage()}>PUT</button>
      </header>
      <main className="chat_container-messages padding-10">
        {conversation.map(({ sentText, createdAt, to }, index) => {
          return (
            <div
              key={index}
              className={`message ${
                to !== id ? "other_message" : "user_message"
              }`}
            >
              <img
                src={picture}
                alt={first}
                className={`${to !== id ? "img_other" : "img_user"}`}
              />
              <div className="message-text">
                {sentText}
                <div className="message-time">{createdAt}</div>
              </div>
            </div>
          );
        })}
      </main>
      <footer className="chat_container-send padding-10">
        <form className="chat_container-input" onSubmit={handleSendSubmit}>
          <input type="text" onChange={(e) => setTextValue(e.target.value)} />
          <button
            type="submit"
            disabled={!textValue.length}
            className="send-button"
          >
            <FaPaperPlane />
          </button>
        </form>
      </footer>
    </section>
  );
};

export default Messages;
