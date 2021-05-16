import React, { useState, useEffect } from "react";
import Messages from "../Messages/Messages";

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
  return <Messages {...chatSelected} />;
}

export default ChatWindow;
