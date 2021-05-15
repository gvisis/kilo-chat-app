import React from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
// https://randomuser.me/documentation#howto
function Sidebar() {
  const editIconStyle = {
    marginRight: "5px",
  };
  return (
    <aside className="convo-list">
      <div className="user-profile">
        <img
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt=""
          className="profile-img"
        />
        <span className="profile-name">Margharet</span>
        <span className="profile-status">Newfoundland</span>
        <div className="profile-edit">
          <FaEdit style={editIconStyle} />
          <span>Edit</span>
        </div>
      </div>
      <div className="sidebar_chat">
        <div className="sidebar_chat-item">
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt=""
            className="profile-img"
          />
          <div className="chat_user-title">
            <span className="chat_user-name">Morgan Freeman</span>
            <p className="chat_user-message">Last text written</p>
          </div>
        </div>
        <div className="sidebar_chat-item">
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt=""
            className="profile-img"
          />
          <div className="chat_user-title">
            <span className="chat_user-name">Morgan Freeman</span>
            <p className="chat_user-message">Last text written</p>
          </div>
        </div>
      </div>
      <div className="convo_list-logout">
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;
