import bot from './assets/bot.svg';
import user from './assets/user.svg';

// querySelect, #element_name, ${..code..} are all part of jQuery
const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

// The three dots that appear while the AI generates a response
function loader(element){
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '....'){
      element.textContent = '';
    }
  }, 300)

}

// Instead of displaying the text right away, this function will type out each char 1-by-1
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if(index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20)
}

// A unique ID is generated using timestamp and Math.random() so that each message can be uniquely tracked
function generateUniqueId(){
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;

}

// AI's message will be displayed in a faded-white stripe
function chatStripe (isAi, value, uniqueId) {
  return (
    `
      <div class="wrapper ${isAi && 'ai'}">
        <div class="chat">
          <div class="profile">
            <img
              src="${isAi ? bot : user}"
              alt="${isAi ? 'bot' : 'user'}"
            />
          </div>
          <div class="message" id=${uniqueId}>${value}</div>
        </div>
      </div>
    `
  )
}

// function is called when the user submits a message
const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  // generate the user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get('prompt'));
  form.reset();

  // generate AI_bot's chatstripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ", uniqueId);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  const messageDiv = document.getElementById(uniqueId);
  loader(messageDiv);

  // fetch data from server -> AI bot's response
  const response = await fetch('http://localhost:5001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: data.get('prompt')
    })
  })

  // Clear the 3 dots from div tag where AI's message will be displayed
  clearInterval(loadInterval);
  messageDiv.innerHTML='';

  // if the response is succesfully received display the AI's response else display error
  if(response.ok){
    const data = await response.json();
    const parsedData = data.bot.trim();

    typeText(messageDiv, parsedData);
  } else {
    const err = await response.text();
    messageDiv.innerHTML = "Something went wrong";
    alert(err);
  }
}

// users can press submit or hit enter to submit their message
form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    handleSubmit(e);
  }
})
