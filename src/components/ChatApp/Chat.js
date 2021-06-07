import React, { useState, useEffect } from "react";
import axios from "axios";

import { apiUrl, headers } from "../../js/apiSettings";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import Loading from "../Loading/Loading";
import useFetch from "../../js/useFetch";

const ChatApp = () => {
  const [chatUsers, setChatUsers] = useState({});
  const [chatSelected, setChatSelected] = useState({});
  const [mainUser, setMainUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);

  const { data, isFetchError, isFetchLoading } = useFetch(apiUrl, headers);
  console.log("first er", isFetchError);
  console.log("first lo", isFetchLoading);

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
    console.log(userObject);
    setChatUsers(userObject);
    const mainUser = { ...userObject.filter((user) => user.mainUser === true) };
    setMainUser(mainUser[0]);
  };

  const handleEdit = (bool) => {
    setEditProfile(!editProfile);
  };

  // useEffect(() => {
  //   // Fetching the first data from API
  //   const getUsersData = async (url) => {
  //     await axios
  //       .get(url, {
  //         headers: headers,
  //       })
  //       .then((response) => {
  //         filterAndSetUsers(response.data);
  //         setLoadingState(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getUsersData(apiUrl);
  // }, [setLoadingState]);

  useEffect(() => {
    if (isFetchError.status === 200) {
      filterAndSetUsers(data);
    }
  }, [data]);

  if (isFetchLoading) {
    return <Loading />;
  }

  const handleClick = () => {
    console.log(data);
  };

  return (
    <>
      <button onClick={handleClick}>clicko</button>
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
        />
      )}
    </>
  );
};
export default ChatApp;
