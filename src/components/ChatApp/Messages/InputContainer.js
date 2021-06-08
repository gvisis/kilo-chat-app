import React, { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const InputContainer = ({
  handleSendForm,
  setInputValue,
  textValue,
  messageError,
  setErrorMessageState,
}) => {
  const timeOut = 3000;

  useEffect(() => {
    if (messageError) {
      toast.error("Error sending your message", {
        position: "top-right",
        autoClose: timeOut,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });

      setTimeout(() => {
        setErrorMessageState(false);
      }, timeOut);
    }
  }, [setErrorMessageState, messageError]);

  return (
    <form className="chat_container-input" onSubmit={handleSendForm}>
      {messageError && (
        <div>
          <ToastContainer />
        </div>
      )}
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

export default InputContainer;
