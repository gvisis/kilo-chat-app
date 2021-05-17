import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Loading from "../Loading/Loading";

function ChatApp({ isLoading, setLoadingState }) {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatSelected, setChatSelected] = useState({});
  const [mainUser, setMainUser] = useState({});
  const [isErorr, setIsError] = useState(null);

  const usersApiUrl = "https://api.jsonbin.io/b/60a1559f3656981d5122283b/latest";

  // Filters only the selected user
  const selectChat = (userId) => {
    if (userId !== null || userId !== undefined) {
      const selectedUser = chatUsers.filter((users) => users.id === userId);
      setChatSelected(selectedUser[0]);
    }
  };

  const filterAndSetUsers = (userObject) => {
    setChatUsers(userObject);
    const mainUser = {...userObject.filter((user) => user.mainUser === true)}
    setMainUser(mainUser[0]);
  }

  const getUsersData = async (apiUrl) => {
    setLoadingState(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const { users } = data;
      filterAndSetUsers(users);
      setLoadingState(false);
    } catch (error) {
      console.log(error.message);
    }
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
      <ChatWindow isErorr={isErorr} chatSelected={chatSelected} mainUser={mainUser} chatUsers={chatUsers} />
    </>
  );
}

export default ChatApp;

// import Profile from "../Profile/Profile";
{
  /* <Profile /> */
}
