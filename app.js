let tg = window.Telegram.WebApp;
let acceptBtn = document.getElementById('btnAccept');
let closeBtn = document.getElementById('btnCancel');
let codeInput = document.getElementById('codeInput');

// Временный вывод в консоль для проверки срабатывания события при клике на кнопку
console.log('JavaScript код загружен');

acceptBtn.addEventListener('click', () => {
    console.log('Клик на кнопку "Принять"');
    const code = codeInput.value;
    const regex = /^\d{5}$/
    if (regex.test(code)) {
        tg.sendData(code); // отправляем данные в бота
        tg.close();
    } else {
        alert("Пожалуйста, введите код.");
    }
});


codeInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
  console.log('Клик на кнопку "Принять"');
  const code = codeInput.value;
  const regex = /^\d{5}$/
  if (regex.test(code)) {
      tg.sendData(code); // отправляем данные в бота
      tg.close();
  } else {
      alert("Пожалуйста, введите код.");
  }
}
});




closeBtn.addEventListener('click', () => {
    console.log('Клик на кнопку "Отмена"');
    tg.close();
});
