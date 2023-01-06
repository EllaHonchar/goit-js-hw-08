import throttle from "lodash.throttle"; 

// Константа для ключа локального хранилища
const STORAGE_KEY = 'feedback-form-state';

const feedBack = document.querySelector('.feedback-form');

const {
    elements: { email, message },
  } = feedBack;

feedBack.addEventListener('submit', onFormSubmit);
feedBack.addEventListener('input', throttle(onFormInput, 500));

populateText();

function onFormSubmit (event) {
    event.preventDefault();
    console.log({
      email: email.value,
      message: message.value
    })
    //event.currentTarget.reset();
    feedBack.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput () {

    const formData = {
        email: email.value,
        message: message.value
      }
    
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateText() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
      let dataObject = JSON.parse(savedMessage);
      email.value = dataObject.email;
      message.value = dataObject.message;
    }
}
