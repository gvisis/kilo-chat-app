import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import axios from "axios";

function ChatApp({ isLoading, setLoadingState }) {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatSelected, setChatSelected] = useState({});
  const [mainUser, setMainUser] = useState({});
  const [isErorr, setIsError] = useState(null);


  const usersApiUrl =
    "https://api.jsonbin.io/b/60a2c2f3d5b0ee05c1ef7861/latest";

  // Sets state for the selected user by id
  const selectChat = (userId) => {
    try {
      if (userId !== null || userId !== undefined) {
        const selectedUser = chatUsers.filter((users) => users.id === userId);
        setChatSelected(selectedUser[0]);
      }
    } catch (error) {
        console.error(error)
        setIsError(true)
        return <Error />
      }
    }

  // Filters the main user
  const filterAndSetUsers = (userObject) => {
    setChatUsers(userObject);
    const mainUser = { ...userObject.filter((user) => user.mainUser === true) };
    setMainUser(mainUser[0]);
  };

  // API Settings
  const apiKey = "$2b$10$zsQeFc4HAPaWVNwcqq1M3eCNVtIzBNNQ4tybT4HRbzs8iP9dJoLpO";
  const headers = {
    "Content-Type": "application/json",
    "secret-key": apiKey,
    versioning: "false",
  };

  const getUsersData = async (apiUrl) => {
    await axios
      .get(apiUrl, {
        headers: headers,
      })
      .then((response) => {
        filterAndSetUsers(response.data.users);
        setLoadingState(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsersData(usersApiUrl);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Sidebar
        isLoading={isLoading}
        isErorr={isErorr}
        chatUsers={chatUsers}
        selectChat={selectChat}
        mainUser={mainUser}
      />
      <ChatWindow
        isErorr={isErorr}
        chatSelected={chatSelected}
        mainUser={mainUser}
        chatUsers={chatUsers}
      />
    </>
  );
}
export default ChatApp;
