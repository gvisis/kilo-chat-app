import React, { useState, useEffect } from "react";

import { apiUrl, headers } from "../../js/apiSettings";
import useFetch from "../../js/useFetch";

import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Loading from "../Loading/Loading";

const ChatApp = () => {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatSelected, setChatSelected] = useState({});
  const [mainUser, setMainUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);
  const { data, isFetchError, isFetchLoading, api } = useFetch(apiUrl, headers);

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
  const filterAndSetUsers = (userObject) => {
    setChatUsers(userObject);
    const mainUser = { ...userObject.filter((user) => user.mainUser === true) };
    setMainUser(mainUser[0]);
  };

  const handleEdit = (bool) => {
    setEditProfile(!editProfile);
  };

  const handleUserUpdate = () => {
    api.fetchData(apiUrl, headers);
  };
  
  useEffect(() => {
    filterAndSetUsers(data);
  }, [data]);

  if (isFetchLoading) {
    return <Loading />;
  } else if (isFetchError) {
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
export default ChatApp;
