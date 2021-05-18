import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from 'axios';


const SendingMessage = ({ handleSendForm, setInputValue, textValue }) => {
    
//   const postNewMessage = async (messages) => {
//     await axios
//       .put(apiUrl, messages, {
//         headers: headers,
//       })
//       .then((response) => {
//         console.log(response.status);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

  return (
    <form className="chat_container-input" onSubmit={handleSendForm}>
      <input
        value={textValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        disabled={!textValue.length}
        className="send-button"
      >
        <FaPaperPlane />
      </button>
    </form>
  );
};

export default SendingMessage;
