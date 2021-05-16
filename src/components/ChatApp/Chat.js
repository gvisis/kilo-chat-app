import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Loading from "../Loading/Loading";
import axios from "axios";

function ChatApp({ isLoading, setLoadingState }) {
  const [chatUsers, setChatUsers] = useState([]);
  const [chatSelected, setChatSelected] = useState([]);
  const [isErorr, setIsError] = useState(null);

  const usersApiUrl = "https://api.jsonbin.io/b/60a1559f3656981d5122283b";

  // Filters only the selected user
  const selectChat = (userId) => {
    const selectedUser = chatUsers.filter((users) => users.id === userId);
    setChatSelected(selectedUser);
    console.log(chatSelected[0].name.first);
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    // Fetch userdata
    const getUsersData = (usersApiUrl) => {
      axios
        .get(usersApiUrl)
        .then((res) => {
          setChatUsers(res.data.users);
        })
        .then(() => {
          setLoadingState(false);
        })
        .catch((err) => {
          console.log(err);
          setIsError(err.message);
        });
    };

    getUsersData(usersApiUrl);
    return () => {
      source.cancel();
    };
  }, [selectChat]);

  if (isLoading) {
    return <Loading isLoading={isLoading} setLoadingState={setLoadingState} />;
  }

  console.log(chatUsers);
  return (
    <>
      {/* {chatUsers.length !== 0 && (
        <Sidebar
          isLoading={isLoading}
          isErorr={isErorr}
          chatUsers={chatUsers}
          selectChat={selectChat}
        />
      )}
      {chatSelected && (
        <ChatWindow isErorr={isErorr} chatSelected={chatSelected} />
      )} */}
    </>
  );
}

export default ChatApp;

// import Profile from "../Profile/Profile";
{
  /* <Profile /> */
}
