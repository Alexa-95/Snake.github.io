const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var time = 250;

var upClick = document.querySelector('.up');
var downClick = document.querySelector('.down');
var leftClick = document.querySelector('.left');
var rightClick = document.querySelector('.right');

var snake;

upClick.addEventListener('touchstart', ((event) =>{
    snake.changeDirectionUp(event);
}));
downClick.addEventListener('touchstart', ((event) =>{
    snake.changeDirectionDown(event);
}));
leftClick.addEventListener('touchstart', ((event) =>{
    snake.changeDirectionLeft(event);
}));
rightClick.addEventListener('touchstart', ((event) =>{
    snake.changeDirectionRight(event);
}));

upClick.addEventListener('click', ((event) =>{
    snake.changeDirectionUp(event);
}));
downClick.addEventListener('click', ((event) =>{
    snake.changeDirectionDown(event);
}));
leftClick.addEventListener('click', ((event) =>{
    snake.changeDirectionLeft(event);
}));
rightClick.addEventListener('click', ((event) =>{
    snake.changeDirectionRight(event);
}));

(function setup(){
    snake = new Snake;
    fruit = new Fruit();

    fruit.pickLocation();
    
    window.setInterval(() => {
        // snake.reset();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();
        
        if(snake.eat(fruit)) {            
            
            fruit.pickLocation();
            time+=10;
            console.log(time)
        }
        

    }, time)
}());

window.addEventListener('keydown', ((evt) =>{
    const direction = evt.key.replace('Arrow', '');
    // console.log(direction);
    snake.changeDirection(direction);
}));
