import "../../sass/login.scss";

import { React, useState, useEffect } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";

function Login({ userLogin, isError }) {
  const loginIcons = {
    color: "#29c0cd",
    width: "32px",
    height: "32px",
    opacity: "60%",
    padding: "10px",
  };
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Sending data to check for email
  const sendData = (e) => {
    e.preventDefault();
    userLogin(userEmail, userPassword);
  };
  
// Zaidimu aikstele
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
const date = randomDate(new Date(2021, 4, 16), new Date());
const newLocaleDate = date.toLocaleString("en-UK");

const newName = {
  name: {
    firstName: "Naujas",
    lastName: "Mersas",
  },
  city: "Vilnius",
  email: "demo@demo.com",
  mainUser: true,
  id: "e7315309-6bdf-4365-966a-0ae037fc73d3",
  username: "yellowcat",
  phone: "07542-132-222",
  picture: "https://randomuser.me/api/portraits/women/18.jpg",
  allMessages: [
    {
      createdAt: newLocaleDate,
      sentText: "sitas textas yra mano ir as parasiau Sofia",
      to: "d68c14af-d2a0-428f-a398-376ace41cb1e",
    },
  ],
};
const secondName = {
  name: {
    firstName: "Senas",
    lastName: "Mersas",
  },
  city: "Vilnius",
  email: "demo@demo.com",
  mainUser: true,
  id: "e7315309-6bdf-4365-966a-0ae037fc73d3",
  username: "yellowcat",
  phone: "07542-132-222",
  picture: "https://randomuser.me/api/portraits/women/18.jpg",
  allMessages: [
    {
      createdAt: newLocaleDate,
      sentText: "sitas textas yra mano ir as parasiau Sofia",
      to: "d68c14af-d2a0-428f-a398-376ace41cb1e",
    },
  ],
};

const users = {
  users: []
}
users.users.push(newName);
console.log("Real",users);

users.users.push(secondName);
console.log("Real",users);
const newMessage = {
  createdAt: randomDate(new Date(2021, 4, 16), new Date()),
  sentText: "nauja zinute prirasyta",
  to: "43593sd-1234123-sfs"
}
const newMessage2 = {
  createdAt: randomDate(new Date(2021, 4, 16), new Date()),
  sentText: "nauja zinute prirasyta",
  to: "43593sd-1234123-sfs"
}
users.users[1].allMessages.push(newMessage);
console.log("Real",users);
users.users[1].allMessages.push(newMessage2);
console.log("Real",users);

const userOneMessages = users.users[1].allMessages;

const activities = [
  { title: 'Hiking', date: new Date('2019-06-28') },
  { title: 'Shopping', date: new Date('2019-06-10') },
  { title: 'Trekking', date: new Date('2019-06-22') }
]
// slice protects original array

const sortedMessages = userOneMessages.slice().sort((a, b) => b.createdAt - a.createdAt)

console.log(sortedMessages);
// ============
  return (
    <main className="login-main">
      <form className="login-wrap" onSubmit={sendData}>
        <div className="login-header">
          <span className="login_title-text">Login</span>
        </div>
        <div className="login-row email">
          <label className="input-title">E-mail</label>
          <div className="input-container">
            <FaEnvelope style={loginIcons} />
            <input
              type="text"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          {isError && <div className="error-login">{isError}</div>}
        </div>
        <div className="login-row pass">
          <label className="input-title">Password</label>
          <div className="input-container">
            <FaKey style={loginIcons} />
            <input
              type="password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          {isError && <div className="error-login">{isError}</div>}
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-login">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
