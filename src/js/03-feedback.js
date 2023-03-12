import trottle from 'lodash.throttle';
const formInputEl = document.querySelector(".feedback-form");
const emailEl = formInputEl.email;
const messageEl = formInputEl.message;

 formInputEl.addEventListener("input", trottle(getCurrentValue, 500))

function getCurrentValue(event) {
   
    const {
      elements: { email, message },
      } = event.currentTarget;
      const form = {email: email.value, message: message.value};
    console.log(form);
   
localStorage.setItem('feedback-form-state', JSON.stringify({email: email.value, message: message.value}));

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



