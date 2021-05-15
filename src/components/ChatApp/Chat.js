import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ChatWindow from "./ChatWindow/ChatWindow";
import Profile from "../Profile/Profile";

function ChatApp() {
  return (
    <>
      <Sidebar />
      <ChatWindow />
      {/* <Profile /> */}
    </>
  );
}

export default ChatApp;
