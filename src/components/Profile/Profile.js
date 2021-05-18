import React, { useEffect, useState } from "react";

function Profile({ handleEdit, mainUser }) {
  const [mainUserValues, setMainUserValues] = useState(mainUser);

  const { firstName, lastName, city, phone, username, email } = mainUser;

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

  //   const filteredByKey = Object.fromEntries(
  //     Object.entries(mainUser).filter(([key]) => getKeys(key))
  //   );

  const filteredByKey = Object.entries(mainUser)
    .filter(([key]) => getKeys(key))
    .map((e) => ({ [e[0]]: e[1] }));
  console.log(filteredByKey);

  for (let item of filteredByKey) {
    Object.entries(item).map(([key, value]) =>
      console.log("key:", key, "value:", value)
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
              {filteredByKey.map((item) => {
                return Object.entries(item).map(([key, value], index) => {
                  return (
                    <div className="profile_input-row">
                      <label className="profile_input-title">{key}</label>
                      <input
                        key={index}
                        value={value}
                        className="profile_input"
                        type="text"
                        onChange={(e) => setMainUserValues(e.target.value)}
                      />
                    </div>
                  );
                });
              })}
            </form>
          </main>
          <footer className="profile_buttons">
            <div className="btn edit-btn">edit</div>
            <div className="btn close-btn" onClick={handleEdit}>
              close
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Profile;

// {
//     "name": {
//         "firstName": "Demo",
//         "lastName": "Account"
//     },
//     "city": "Vilnius",
//     "email": "demo@demo.com",
//     "mainUser": true,
//     "id": "e7315309-6bdf-4365-966a-0ae037fc73d3",
//     "username": "yellowcat",
//     "phone": "07542-132-222",
//     "picture": "https://randomuser.me/api/portraits/lego/6.jpg",
// }
