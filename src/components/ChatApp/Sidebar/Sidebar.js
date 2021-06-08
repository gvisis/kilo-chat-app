import React from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import { EditButton } from "./EditButton";

const Sidebar = ({ chatUsers, selectChat, mainUser, handleEdit }) => {
  // Destructuring the info of the main user
  const { firstName, lastName, city, picture } = mainUser;

  return (
    <aside className="convo-list">
      {mainUser && (
        <div className="user-profile">
          <img src={picture} alt={firstName} className="profile-img" />
          <span className="profile-name">
            {firstName} {lastName}
          </span>
          <span className="profile-status">{city}</span>
          <div className="profile-edit" onClick={handleEdit}>
            <EditButton />
            <span>Edit</span>
          </div>
        </div>
      )}
      <div className="sidebar_chat">
        {/* Showing all chat users (except the main user) in the sidebar */}
        {chatUsers
          .filter((chatUser) => chatUser.mainUser !== true)
          .map((chatUser) => {
            const { firstName, lastName, id, picture } = chatUser;

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
                </div>
              </div>
            );
          })}
      </div>
      <div className="convo_list-logout">
        <FaSignOutAlt />
        <Link to="/login">
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
