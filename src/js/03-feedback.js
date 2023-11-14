import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Función para guardar los valores en el almacenamiento local
const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
};

// Función para cargar los valores del almacenamiento local en los campos del formulario
const loadFormState = () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
};

// Función para enviar el formulario
const submitForm = (event) => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageTextarea.value = '';
};

// Agregar eventos al formulario
form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', submitForm);

// Cargar valores guardados al cargar la página
loadFormState();
