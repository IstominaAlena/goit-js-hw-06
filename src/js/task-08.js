// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны
// быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля
// будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй
// свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const refs = {
  form: document.querySelector('.login-form'),
  emailInput: document.querySelector('input[type="email"]'),
  passwordInput: document.querySelector('input[type="password"]'),
  button: document.querySelector('button[type="submit"]'),
  submitObject: {},
};

function onValidForm(form) {
  console.log();
  if (!form.emailInput.value || !form.passwordInput.value) {
    return false;
  }
  return true;
}
function onResetForm() {
  refs.emailInput.value = '';
  refs.passwordInput.value = '';
}

function onFormSubmit(event) {
  event.preventDefault();
  let result = onValidForm(refs);
  if (result) {
    let formElements = event.currentTarget.elements;

    refs.submitObject[formElements.email.name] = formElements.email.value;
    refs.submitObject[formElements.password.name] = formElements.password.value;

    console.log(refs.submitObject);
    onResetForm();
    return;
  }
  alert('Все поля должны быть заполнены!');
}

refs.form.addEventListener('submit', onFormSubmit);
