import React from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";

function Sidebar({ chatUsers, selectChat, mainUser }) {
  // Getting and destructuring the info of the main user
  const {
    name: { firstName, lastName },
    city,
    email,
    phone,
    picture,
    username,
  } = mainUser;

  const editIconStyle = {
    marginRight: "5px",
  };

  return (
    <aside className="convo-list">
      {mainUser && (
        <div className="user-profile">
          <img src={picture} alt={firstName} className="profile-img" />
          <span className="profile-name">
            {firstName} {lastName}
          </span>
          <span className="profile-status">{city}</span>
          <div className="profile-edit">
            <FaEdit style={editIconStyle} />
            <span>Edit</span>
          </div>
        </div>
      )}
      <div className="sidebar_chat">
        {/* Showing all chat users (except the main user) in the sidebar */}
        {chatUsers
          .filter((chatUser) => chatUser.mainUser !== true)
          .map((chatUser) => {
            const {
              name: { firstName, lastName },
              city,
              email,
              phone,
              id,
              picture,
              username,
            } = chatUser;

            return (
              <div
                key={id}
                className="sidebar_chat-item"
                onClick={() => selectChat(id)}
              >
                <img src={picture} alt={firstName} className="profile-img" />
                <div className="chat_user-title">
                  <span className="chat_user-name">
                    {firstName} {lastName}
                  </span>
                  <p className="chat_user-message">lastName text written</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="convo_list-logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;
