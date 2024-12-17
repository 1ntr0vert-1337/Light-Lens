document.getElementById('callbackForm').addEventListener('submit', function(event) {
    // Задать правильное значение капчи
    var correctCaptcha = '4m49';  // Здесь нужно задать правильное значение капчи
    var userInput = document.getElementById('capchaInput').value;

    // Проверка капчи
    if (userInput !== correctCaptcha) {
        // Если капча неверная, отменить отправку формы
        event.preventDefault();  // Отменить отправку формы
        document.getElementById('error-message').style.display = 'block';  // Показать сообщение об ошибке
    } else {
        // Если капча правильная, скрыть сообщение об ошибке (если есть)
        document.getElementById('error-message').style.display = 'none';  
        
        // Перенаправление пользователя на другую страницу
        window.location.href = 'thank_you.html';  // Убедитесь, что путь указан правильно
    }
});