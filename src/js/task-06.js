// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на
// правильное количество введённых символов.

const inputEl = document.querySelector('#validation-input');

function onBlurFn() {
  const dataLengthEl = inputEl.getAttribute('data-length');

  if (inputEl.value.length < dataLengthEl) {
    inputEl.style.borderColor = 'red';
    alert(`В строке должно быть ${dataLengthEl} символов.`);
    return;
  }
  inputEl.style.borderColor = 'green';
  alert(`Отлично!`);
  return;
}

inputEl.addEventListener('blur', onBlurFn);
