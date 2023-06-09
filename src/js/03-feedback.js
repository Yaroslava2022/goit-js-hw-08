import trottle from 'lodash.throttle';
const formInputEl = document.querySelector(".feedback-form");
const emailEl = formInputEl.email;
const messageEl = formInputEl.message;

 formInputEl.addEventListener("input", trottle(getCurrentValue, 500))

 
function getCurrentValue() {
  
    const {
      elements: { email, message },
      } = formInputEl;
      const form = {email: email.value, message: message.value};

  if (email.value || message.value ) {
localStorage.setItem('feedback-form-state', JSON.stringify({...form, email: email.value, message: message.value}));

}
}



formInputEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }
  const user = {email: email.value, message: message.value};
  console.log(user);
 localStorage.removeItem('feedback-form-state')
  event.currentTarget.reset();
 }

 const fillForm = () => {
    const objFromLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  
    if (objFromLocalStorage) {
        emailEl.value = objFromLocalStorage.email || '';
        messageEl.value=objFromLocalStorage.message || '';

    }
 }
 fillForm()



