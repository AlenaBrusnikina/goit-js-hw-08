import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Заповни всі поля!');
  }

  const userInfo = {
    email: formEl.email.value,
    password: formEl.message.value,
  };

  console.log(userInfo);

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput() {
  const formData = {
    email: formEl.email.value,
    message: formEl.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const formData = JSON.parse(savedData);
  formEl.email.value = formData.email;
  formEl.message.value = formData.message;
}
