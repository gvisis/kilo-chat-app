import moment from "moment";
import React from "react";

// Single message view depending on who wrote it
const SingleMessage = ({ conversation, mainUser, chatSelected }) => {
  const { firstName, picture, id } = chatSelected;

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
                  {moment(sentTime).format("D/MM/YYYY HH:mm")}
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
