import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Loading from "../Loading/Loading";
import { apiUrl, headers } from "../../js/apiSettings";
import useFetch from "../../js/useFetch";

const ChatApp = ({ isLoading, isError }) => {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatSelected, setChatSelected] = useState({});
  const [mainUser, setMainUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);

  const { data } = useFetch(apiUrl, headers);

  // Sets state for the selected user by id
  const selectChat = (userId) => {
    if (editProfile) {
      setEditProfile(!editProfile);
    }
    try {
      if (userId !== null || userId !== undefined) {
        const selectedUser = chatUsers.filter((users) => users.id === userId);
        setChatSelected(selectedUser[0]);
      }
    } catch (error) {
      console.error(error);
      return <Error />;
    }
  };

  // Filters the main user
  const filterAndSetMainUser = (userObject) => {
    setChatUsers(userObject);
    const mainUser = { ...userObject.filter((user) => user.mainUser === true) };
    setMainUser(mainUser[0]);
  };

  const handleEdit = () => {
    setEditProfile(!editProfile);
  };

  const handleUserUpdate = (tempUsers) => {
    filterAndSetMainUser(tempUsers);
  };

  useEffect(() => {
    filterAndSetMainUser(data);
  }, [chatSelected, data]);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }

  return (
    <>
      <Sidebar
        chatUsers={chatUsers}
        selectChat={selectChat}
        mainUser={mainUser}
        handleEdit={handleEdit}
      />
      {editProfile ? (
        <Profile mainUser={mainUser} handleEdit={handleEdit} />
      ) : (
        <ChatWindow
          chatSelected={chatSelected}
          mainUser={mainUser}
          chatUsers={chatUsers}
          handleUserUpdate={handleUserUpdate}
        />
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  const { isLoading, isError } = state;
  return { isLoading, isError };
};
export default connect(mapStateToProps)(ChatApp);
