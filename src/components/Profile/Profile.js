import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile({ handleEdit, mainUser }) {
  const [mainUserValues, setMainUserValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [successfulEdit, setSuccessfulEdit] = useState(false);

  const getKeys = (key) => {
    const allowedKeys = [
      "name",
      "city",
      "phone",
      "username",
      "email",
      "firstName",
      "lastName",
    ];

    if (allowedKeys.includes(key)) {
      return key;
    }
  };

  //   Changes values in the input field
  const handleChange = (e, index, key) => {
    mainUserValues[index][key] = e.target.value;
    setMainUserValues([...mainUserValues]);
  };

  useEffect(() => {
    const timeOut = 3000;
    if (successfulEdit) {
      toast.success("Info Edited! (Not realy)", {
        position: "top-right",
        autoClose: timeOut,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });

      setTimeout(() => {
        setSuccessfulEdit(false);
        handleEdit();
      }, timeOut);
    }
  }, [successfulEdit,handleEdit]);

  //   Filters only required entries by the key
  useEffect(() => {
    const filteredValuesByKey = Object.entries(mainUser)
      .filter(([key]) => getKeys(key))
      .map((e) => ({ [e[0]]: e[1] }));
    setMainUserValues(filteredValuesByKey);
    setIsLoading(false);
    return () => {
      setIsLoading(true);
    };
  }, [handleEdit,mainUser]);

  if (isLoading) {
    return (
      <section className="chat_container">
        <div className="chat_container-messages">
          <div className="profile-container">
            <header>
              <h3>Loading...</h3>
            </header>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="chat_container">
      <div className="chat_container-messages">
        <div className="profile-container">
          <header>
            <h3>Edit profile</h3>
          </header>
          <main>
            <form>
              {mainUserValues.map((item, index) => {
                return Object.entries(item).map(([key, keyValue]) => {
                  return (
                    <div key={index} className="profile_input-row">
                      <label className="profile_input-title">{key}</label>
                      <input
                        value={keyValue}
                        className="profile_input"
                        type="text"
                        onChange={(e) => handleChange(e, index, key)}
                      />
                    </div>
                  );
                });
              })}
            </form>
          </main>
          <footer className="profile_buttons">
            <div
              className="btn edit-btn"
              onClick={() => setSuccessfulEdit(true)}
            >
              edit
            </div>
            <div className="btn close-btn" onClick={handleEdit}>
              close
            </div>
            {successfulEdit && (
              <div>
                <ToastContainer />
              </div>
            )}
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Profile;
