![stack](mdContent/Arkanoid-logo.png)
#  Arkanoid (Brick Breaker) 🕹️

### Содержание 📖
- [Почему мы выбрали этот проект?](#почему-мы-выбрали-этот-проект-)
- [Игра из прошлого — мечта в настоящем](#игра-из-прошлого--мечта-в-настоящем-)
- [Установка и запуск](#установка-и-запуск-%EF%B8%8F)
- [Стэк](#стэк-)
- [Реализация](#реализация-)
- [Как написать свою игру схожую по сложности на arkanoid](#как-написать-свою-игру-схожую-по-сложности-на-arcanoid-)
- [Авторы](#команда-разработчиков--gay-squad--в-составе-фархад-ахмедияр-айбек)

## Почему мы выбрали этот проект? 🎯

![mem3](mdContent/mem3.png)

Мы выбрали этот проект потому, что хотели создать нечто уникальное. Обычные проекты типа go-reloaded или tetris-optimizer казались нам скучными и заезженными. Нам хотелось чего-то креативного, что заинтересует широкую аудиторию. Решив создать свою игру, мы почувствовали, что это будет по-настоящему захватывающим и увлекательным проектом

Наша идея не только уникальна, но и заинтересует многих. Ведь кто не мечтал создать что-то своё, свою собственную игру? В этом проекте мы видим не просто задачу, а возможность воплотить свои творческие идеи и подарить миру увлекательный продукт.

## Игра из прошлого — мечта в настоящем ⏳

Arkanoid — видеоигра для игровых автоматов, разработанная компанией Taito в 1986 году. Игра основана на играх серии Breakout фирмы Atari. Именно её название стало нарицательным для класса подобных игр.

![arkanoid](mdContent/arkanoid.png)

Игрок контролирует небольшую платформу-ракетку, которую можно передвигать горизонтально от одной стенки до другой, подставляя её под шарик, предотвращая его падение вниз. Удар шарика по кирпичу приводит к разрушению кирпича. После того как все кирпичи на данном уровне уничтожены, происходит переход на следующий уровень, с новым набором кирпичей.


![arkanoid](mdContent/gamegif.gif)

## Установка и запуск 🛠️
1. Клонируйте репозиторий: `git clone https://github.com/Aibekabdi/brick-breaker.git`
2. Перейдите в директорию проекта: `cd brick-braker`
3. Запустите проект с помощью команды: `go run .`
4. Откройте браузер и перейдите по адресу: http://localhost:8080

![arkanoid](mdContent/install.png)

## Стэк 💻

![stack](mdContent/Maskgroup.png)

Да, всё действительно так. Для данного проекта требуется знать всего лишь HTML/CSS и JavaScript. Ничего больше не требуется 😁

## Реализация 📝

![mem](mdContent/mem.png)

Игра запускается в главном HTML-файле (index.html) и предоставляет пользователю интерактивное игровое поле, заполненное кирпичами, шариком и платформой-ракетой.

### Инициализация игры
Перед загрузкой сайта происходит заполнение игрового поля (обозначенного в HTML, например, как ```<div id="field">```) необходимыми элементами, такими как кирпичи, шар и платформа-ракета.

![init](mdContent/init.png)

### Основная логика игры
Основной код включает функцию, отвечающую за логику игры. В этой функции реализовано движение объектов, включая шар, и их взаимодействие с краями поля, кирпичами и платформой. При ударе шара о стены или кирпичи происходит изменение направления его движения.

![logic](mdContent/logic.png)

### Управление платформой-ракетой
Пользователь может управлять платформой-ракетой, перемещая ее влево и вправо. Это обеспечивает интерактивность игры и позволяет пользователю влиять на направление движения шара.

![keyup](mdContent/keyup.png)

### Запуск игры
Игра запускается с использованием функции, которая обрабатывает основную логику игры по кадрам. Для этого используется requestAnimationFrame(gameLogic), что обеспечивает плавное выполнение игровой логики.

![startgame](mdContent/startgame.png)

### Дополнительные функциональности
Счетчик и табло: Реализован счетчик для отслеживания набранных очков.
Жизни: Игра включает в себя механизм жизней, отображающий оставшиеся попытки перед поражением.
Пауза: Добавлена функциональность паузы, позволяющая приостановить игру в любой момент.

![improvements](mdContent/improvements.png)

## Как написать свою игру схожую по сложности на Arcanoid? 🎮👾

#### Перед тем, как начать разрабатывать свою игру, выберите игру из списка или по сложности схожую игру:
- Bomberman
- Flipper/ Pinball
- Space Invaders
- Donkey Kong
- Brick Breaker/ Arkanoid
- Pac-Man
- Super Mario
- Tetris
- Duck Hunt

#### Изучение игры:
- Что это за игра?
- Какие основные механики в игре?
- Какие подводные камни существуют?

![mem2](mdContent/mem2.png)

#### Изучение разработки игр на JS:
- Как создаются игры на JS без фреймворков?
- Как обычно происходит управление в играх на JS?

#### Составление плана:
- Как начать разработку?
- Нарисовать площади игры (квадратик).
- Заполнение площади объектами (стены, пол, боты, персонаж пользователя).
- Написание управления для пользователя.

#### Бонус:
- Разработка логики для бота.
- Рандомное появление ботов.

## Команда разработчиков 🏳‍🌈 GAY SQUAD 🏳‍🌈 в составе [Фархад](https://github.com/farhadalmaty) [Ахмедияр](https://github.com/AdamAuthor) [Айбек](https://github.com/Aibekabdi) 

![gaysquad](mdContent/gaysquad.png)
