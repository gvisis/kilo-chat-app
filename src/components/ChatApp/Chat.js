import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Loading from "../Loading/Loading";
import axios from "axios";

// import Profile from "../Profile/Profile";

function ChatApp({ isLoading, finishLoading }) {
  const [user, setUser] = useState({});
  const randomUserUrl = "https://randomuser.me/api/";

  useEffect(() => {
    axios
      .get(randomUserUrl)
      .then((res) => {
        const {
          location: { city },
          email,
          cell,
          login: { uuid, username },
          name: { first, last },
          picture: { large },
        } = res.data.results[0];

        setUser({
          ...user,
          firstName: first,
          lastName: last,
          email: email,
          location: city,
          phone: cell,
          id: uuid,
          userName: username,
          picture: large,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} finishLoading={finishLoading} />;
  }

  return (
    <>
      <Sidebar />
      <ChatWindow />
      {/* <Profile /> */}
    </>
  );
}

export default ChatApp;
