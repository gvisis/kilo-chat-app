import moment from "moment";
import React from "react";

const SingleMessage = ({ conversation, mainUser, chatSelected }) => {
  const {
    name: { firstName },
    picture,
    id,
  } = chatSelected;
  
  return (
    <>
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
                <div className="message-time">
                  {moment().format("D/MM/YYYY HH:mm", sentTime)}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no-messages">No messages</div>
      )}
    </>
  );
};

export default SingleMessage;
