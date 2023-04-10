# ChatGPT: SmartChat
Implementation of ChatGPT: SmartChat using OpenAI's API. Information is sent and received using functions implemented in JavaScript with Node and Express frameworks used for backend and Vanilla framework used for frontend. 

- The server communicates with the advanced ChatGPT model API
- Elegant User Interface that enhances the ChatGPT app
- server.js can be modified to chat with any of OpenAI's trained models with a wide range of frequencies

![Quote](https://github.com/kannikakabilar/ChatGPT-SmartChat/blob/main/screenshots/Screen%20Shot%202023-02-08%20at%2012.06.10%20PM.png)
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-08 at 12.14.49 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-08 at 12.17.39 PM.png" width="45%">
</p>
<p align="center">
  <img alt="Light" src="screenshots/Screen Shot 2023-02-08 at 12.20.45 PM.png" width="45%">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img alt="Dark" src="screenshots/Screen Shot 2023-02-08 at 12.25.31 PM.png" width="45%">
</p>

# How to run
- Visit https://openai.com/ > API > Login > email: [yahoo.ca] | password: [simplepassword] > Click on your profile icon > View API keys > Create new secret key <br />
- Paste this in the empty string in .env file located in the server folder. <br />
- Run Server: Open a terminal and navigate to where the project is cloned/downloaded
```md
> cd ChatGPT-SmartChat/server
> npm install
> npm start
```
- Run Client: Open another terminal and navigate to where the project is cloned/downloaded
```md
> cd ChatGPT-SmartChat/client
> npm install
> npm run dev
```
- If address 5001 (for server-side) or 5173 (for client-side, which may vary - look at output in terminal to see which port# is used) is already in use, you can just kill which ever process is using the port with below command, and run again
```md
> lsof -ti:5001 | xargs kill -9
> lsof -ti:5173 | xargs kill -9
```
- Below show setup process for creating this project - no need to execute it to run this app
```md
[need to have node installed]
> node -v 
[Below line is for setting a vanilla client project]
> npm create vite@latest client --template vanilla 
[>> type 'y' & enter >> enter (for Vanilla) >> enter (for JavaScript)]
[setting up server side, create an empty folder called server and navigate into it]
> npm init -y
> npm install cors dotenv express nodemon openai
[create a new file called server.js]
```

# Concepts Learned
- Knowledge of utilizing any API from OpenAI
  - Make API requests
  - Handling the following API response
- Setup a Vanilla JS project using Vite
- Use jQuery to handle form submission
- Use Node.js with express framework for server side
- Responsive layout with CSS
- Handle events with JavaScript
- Render markdown from string

# File Structure
- client side handles front-end: handling form submission, displaying message, and webpage layout
  - assets folder contains images and the public folder contains the .ico file
  - node_modules folder contains installed packages for the client-side
  - package*.json files indicate which files need to be installed for client
  - index.html contains the basic layout of the webpage
  - script.js contains functions that will be executed once when the user sends a message 
  - style.css contains design of the main index.html page
  
- server side handles back-end: communication with API
  - node_modules folder contains installed packages for the server-side
  - package*.json files indicate which files need to be installed for server
  - server.js contains functions that communicates with the API
  - .env contains API key
