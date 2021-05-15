import React from "react";

function ChatWindow() {
  return (
    <section className="chat_container">
      <header className="chat_container-title padding-10">
        <div className="chat_user-active">
          <div className="chat_user-active-name">Morgan Freeman</div>
          <div className="chat_user-active-status"></div>
          <span>online</span>
        </div>
      </header>
      <main className="chat_container-messages padding-10">
        <div className="message other_message">
          <img
            src="https://randomuser.me/api/portraits/thumb/women/17.jpg"
            alt=""
            className="img_other"
          />
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            odit atque tempore quo quidem, doloribus dolor rerum dolores odio
            minus placeat debitis dicta voluptas animi adipisci id! Veritatis,
            delectus dolore!
          <div className="message-time">14:46 PM</div>
          </div>
        </div>

        <div className="message user_message">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/17.jpg"
            alt=""
            className="img_user"
          />
          <div className="message-text">
            Lorem ipsum dolor sit am delectus dolore!
            <div className="message-time">14:46 PM</div>
          </div>
        </div>
        <div className="message other_message">
          <img
            src="https://randomuser.me/api/portraits/thumb/women/17.jpg"
            alt=""
            className="img_other"
          />
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            odit atque tempore quo quid placeat debitis dicta voluptas animi adipisci id! Veritatis,
            delectus dolore!
          <div className="message-time">14:46 PM</div>
          </div>
        </div>
      </main>
      <footer className="chat_container-send padding-10">footer</footer>
    </section>
  );
}

export default ChatWindow;
