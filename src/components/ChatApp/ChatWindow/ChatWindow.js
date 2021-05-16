import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

function ChatWindow({ isError, chatSelected }) {
  const [isUserSelected, setIsUserSelected] = useState(false);

  // sentTime
  let date = new Date();
  const time = date.getHours() + ":" + date.getMinutes();

  const isObjectEmpty = (object) => {
    if (Object.entries(object).length === 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!isObjectEmpty(chatSelected)) {
      setIsUserSelected(true);
    } else {
      setIsUserSelected(false);
    }
  }, [chatSelected]);

  if (!isUserSelected) {
    return (
      <section className="chat_container">
        <div>No user selected</div>
      </section>
    );
  }

  const {
    name: { first, last },
    allMessages,
    picture,
  } = chatSelected;

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
      </header>
      <main className="chat_container-messages padding-10">
        <div className="message other_message">
          <img
            src="https://randomuser.me/api/portraits/thumb/women/17.jpg"
            alt=""
            className="img_other"
          />
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            odit atque tempore quo quidem, doloribus dolor rerum dolores odio
            minus placeat debitis dicta voluptas animi adipisci id! Veritatis,
            delectus dolore!
            <div className="message-time">14:46 PM</div>
          </div>
        </div>

        <div className="message user_message">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/17.jpg"
            alt=""
            className="img_user"
          />
          <div className="message-text">
            Lorem ipsum dolor sit am delectus dolore!
            <div className="message-time">14:46 PM</div>
          </div>
        </div>
        <div className="message other_message">
          <img
            src="https://randomuser.me/api/portraits/thumb/women/17.jpg"
            alt=""
            className="img_other"
          />
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            odit atque tempore quo quid placeat debitis dicta voluptas animi
            adipisci id! Veritatis, delectus dolore!
            <div className="message-time">14:46 PM</div>
          </div>
        </div>
      </main>
      <footer className="chat_container-send padding-10">
        <div className="chat_container-input">
          <input type="text" />
          <FaPaperPlane />
        </div>
      </footer>
    </section>
  );
}

export default ChatWindow;
