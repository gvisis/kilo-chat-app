import React from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";

function Sidebar({ chatUsers, selectChat, mainUser }) {
  // Getting and destructuring the info of the main user
  const {
    name: { first, last },
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
          <img src={picture} alt={first} className="profile-img" />
          <span className="profile-name">
            {first} {last}
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
              name: { first, last },
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
                <img src={picture} alt={first} className="profile-img" />
                <div className="chat_user-title">
                  <span className="chat_user-name">
                    {first} {last}
                  </span>
                  <p className="chat_user-message">Last text written</p>
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
