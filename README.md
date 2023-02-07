# ChatGPT3-SmartChat
Implementation of ChatGPT3: SmartChat using OpenAI's API. Information is sent and received using functions implemented in JavaScript with Node and Express used for backend and Vanilla used for frontend.

# How to run
- Visit https://openai.com/ > API > Login > email: [yahoo.ca] | password: [simplepassword] > Click on your profile icon > View API keys > Create new secret key <br />
- Paste this in the empty string in .env file located in the server folder. <br />
- Run Server: Open a terminal and navigate to where the project is cloned/downloaded
```md
> cd ChatGPT3-SmartChat/server
> npm install
> npm start
```
- Run Client: Open another terminal and navigate to where the project is cloned/downloaded
```md
> cd ChatGPT3-SmartChat/client
> npm install
> npm run dev
```
- If address 5001 (for server-side) or 5173 (for client-side, which may vary - look at output in terminal to see which port# is used) is already in use, you can just kill which ever process is using the port with below command, and run again
```md
> lsof -ti:5001 | xargs kill -9
> lsof -ti:5173 | xargs kill -9
```

# Concepts Learned

# File Structure
