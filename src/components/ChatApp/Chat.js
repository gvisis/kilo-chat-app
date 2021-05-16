import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Loading from "../Loading/Loading";

function ChatApp({ isLoading, setLoadingState }) {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatSelected, setChatSelected] = useState([]);
  const [isErorr, setIsError] = useState(null);

  const usersApiUrl = "https://api.jsonbin.io/b/60a1559f3656981d5122283b/1";

  // Filters only the selected user
  const selectChat = (userId) => {
    // console.log('users', chatUsers);
    const selectedUser = chatUsers.filter((users) => users.id === userId);
    setChatSelected(selectedUser);
    console.log(chatSelected);
  };

  //   useEffect(() => {
  //     getUsersData(user)
  //  }, [chatSelected]);

  // Fetch userdata
  // const getUsersData = (usersApiUrl) => {
  //   axios
  //     .get(usersApiUrl)
  //     .then((res) => {
  //       setChatUsers(res.data.users);
  //     })
  //     .then(() => {
  //       setLoadingState(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsError(err.message);
  //     });
  // };

  const getUsersData = async (apiUrl) => {
    setLoadingState(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const { users } = data;
      setChatUsers(users);
      setLoadingState(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsersData(usersApiUrl);
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} setLoadingState={setLoadingState} />;
  }

  return (
    <>
      <Sidebar
        isLoading={isLoading}
        isErorr={isErorr}
        chatUsers={chatUsers}
        selectChat={selectChat}
      />
      <ChatWindow isErorr={isErorr} chatSelected={chatSelected} />
    </>
  );
}

export default ChatApp;

// import Profile from "../Profile/Profile";
{
  /* <Profile /> */
}
