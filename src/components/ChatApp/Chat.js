import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Loading from "../Loading/Loading";

// import Profile from "../Profile/Profile";

function ChatApp({isLoading, finishLoading}) {

  if (isLoading){
    return <Loading isLoading={isLoading} finishLoading={finishLoading}/>
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
