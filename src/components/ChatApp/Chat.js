import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Loading from "../Loading/Loading";
import { apiUrl, headers } from "../../js/apiSettings";
import axios from "axios";

function ChatApp({ isLoading, setLoadingState }) {
  const [chatUsers, setChatUsers] = useState({});
  const [chatSelected, setChatSelected] = useState({});
  const [mainUser, setMainUser] = useState({});
  const [isErorr, setIsError] = useState(null);
  const [editProfile, setEditProfile] = useState(false);

  // Sets state for the selected user by id
  const selectChat = (userId) => {
    if (editProfile) {
      setEditProfile(!editProfile)
    }
    try {
      if (userId !== null || userId !== undefined) {
        const selectedUser = chatUsers.filter((users) => users.id === userId);
        setChatSelected(selectedUser[0]);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
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

  const getUsersData = async (url) => {
    await axios
      .get(url, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data);
        filterAndSetUsers(response.data);
        setLoadingState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsersData(apiUrl);
  }, []);

  if (isLoading) {
    return <Loading />;
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
        <Profile handleEdit={handleEdit} />
      ) : (
        <ChatWindow
          isErorr={isErorr}
          chatSelected={chatSelected}
          mainUser={mainUser}
          chatUsers={chatUsers}
        />
      )}
    </>
  );
}
export default ChatApp;
