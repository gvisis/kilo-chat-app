import React from "react";

function Profile({ handleEdit }) {
  return (
    <section className="chat_container">
      <div className="chat_container-messages padding-10">
        <div className="profile-container">
          <header>
            <h3>Edit profile</h3>
          </header>
          <main>
            <form>
              <div className="profile_input-row">
                <label className='profile_input-title'>Sveiki</label>
                <input className='profile_input'type="text" disabled />
              </div>
              <div className="profile_input-row">
                <label className='profile_input-title'>Sveiki</label>
                <input className='profile_input'type="text" />
              </div>
              <div className="profile_input-row">
                <label className='profile_input-title'>Sveiki</label>
                <input className='profile_input'type="text" />
              </div>
              <div className="profile_input-row">
                <label className='profile_input-title'>Sveiki</label>
                <input className='profile_input'type="text" />
              </div>
            </form>
          </main>
          <footer className='profile_buttons'>
            <div className='btn edit-btn'>edit</div>
            <div className='btn close-btn' onClick={handleEdit}>close</div>
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
