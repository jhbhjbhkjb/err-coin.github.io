document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const coinButton = document.getElementById('coin-button');
    let count = 0;

    coinButton.addEventListener('click', () => {
        count += 1;
        counterElement.innerText = count;

        // Вибрация при клике
        if (navigator.vibrate) {
            // Вызываем вибрацию только в ответ на действие пользователя
            coinButton.addEventListener('click', () => {
                navigator.vibrate(50); // Вибрация на 50 миллисекунд
            });
        }

        // Отправка данных боту
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.sendData(JSON.stringify({ action: 'click', count: count }));
        }
    });
});
