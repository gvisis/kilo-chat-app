<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gvisis/library-crud-laravel/">
    <img src="https://i.imgur.com/aZwCWf5.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Chi-Chat</h3>

  <p align="center">
    Beta chat application
    <br />
    <br />
    <a href="https://kilo-chat-project.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/gvisis/kilo-chat-app/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#packages-used">Packages used</a></li>
      </ul>
      <ul>
        <li><a href="#other">Other</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Made with React as a task for job application. 

* Known bugs: 
    * ~~After you send a message, you will receive the repeated message TWICE.~~ (Fixed: 05-20) 
    * Edit page not sending edited data to back API ( it was not required (?) as a task, but will be implemented in the future)

### Built With

-   [React](https://reactjs.org/)
-   [SASS](https://sass-lang.com/)

### Packages used
- [axios](https://github.com/axios/axios)
- [moment](https://momentjs.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-toastify](https://www.npmjs.com/package/react-toastify)

### Other
* User details from
    -  [RandomUser API](https://randomuser.me/)
* Chats stored at
    - [Jsonbin.io](https://jsonbin.io/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/gvisis/kilo-chat-app.git
    ```
2. In the root directory execute the following command to install the application
    ```sh
    npm install 
    ```
3. Install NPM dependencies
    ```sh
    npm start   
    ```
4. Login page credentials. Using other details you will get an login error as shown below
    ```sh
    Username: demo@demo.com
    Password: demo
    ```

<!-- USAGE EXAMPLES -->

## Screenshots

* Login page shows the errors when wrong email or password is entered
<img src="https://i.imgur.com/6Mqnilu.png" width="50%" height="50%">

* Basic view  of the website showing the chat and the sidebar
<img src="https://i.imgur.com/oje7KtS.png" width="50%" height="50%">

* Edit view (not sending data to API yet). You will get this view by hovering on the user account element in top left corner

    <img src="https://i.imgur.com/JmNX8Ep.png" width="50%" height="50%">

<!-- CONTACT -->

## Contact

Give me some work! 

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=whit
[linkedin-url]: https://www.linkedin.com/in/gvidas-s-7a1104b4/
