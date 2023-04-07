import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Сохранения текущих значений полей формы
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Заполнения полей формы
const restoreFormState = () => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};
// Сохраняем состояние формы в локальное хранилище
emailInput.addEventListener('input', throttle(saveFormState, 500));
messageInput.addEventListener('input', throttle(saveFormState, 500));

restoreFormState();

// Обработчик отправки формы
form.addEventListener('submit', event => {
  event.preventDefault();

  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };

  // Очищаем локальное хранилище и поля формы
  localStorage.removeItem('feedback-form-state');
  // Очищаем локальное хранилище и поля формы
  emailInput.value = '';
  messageInput.value = '';

  console.log(formState);
});
