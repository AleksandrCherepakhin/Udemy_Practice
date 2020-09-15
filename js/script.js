/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



// удаляем рекламный блок
let adver = document.querySelectorAll(".promo__adv img");
adver.forEach(item => {
    item.remove()
});

// меняем жанр с комедии на драмму
let genr = document.querySelector(".promo__genre");
genr.textContent = "Drama";

//меняем фон картинки
let BG = document.querySelector(".promo__bg");
BG.style.backgroundImage = "url('../project/img/bg.jpg')";

//очистили старый список
let newList = document.querySelector(".promo__interactive-item");
newList.innerHTML = "";

//сортировка фильмов
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();

//создаем новый список
movieDB.movies.forEach((film, i) =>{
    newList.innerHTML += `<li class="promo__interactive-item">
    ${film} 
    <div class="delete"></div>
    </li>`;
});






 