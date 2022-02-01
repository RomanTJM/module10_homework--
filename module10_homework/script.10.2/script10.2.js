// Задание 2.
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const width = window.screen.width;
    const height = window.screen.height;
    alert(`Ваше разрешение экрана: ${width}px на ${height}px`);
})