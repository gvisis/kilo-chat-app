import React, { useState, useEffect } from "react";
import Messages from "../Messages/Messages";

function ChatWindow({ chatSelected, mainUser, chatUsers }) {
  const [isUserSelected, setIsUserSelected] = useState(false);

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
        <div className="chat_container-messages padding-10">
          <div className="no-messages">No user selected</div>
        </div>
      </section>
    );
  }
  return (
    <Messages
      chatSelected={chatSelected}
      mainUser={mainUser}
      chatUsers={chatUsers}
    />
  );
}

export default ChatWindow;
