import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputContainer = ({
  handleSendForm,
  setInputValue,
  textValue,
  isError,
}) => {

  if (isError) {
    toast.error(isError, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <form className="chat_container-input" onSubmit={handleSendForm}>
      {isError && (
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
