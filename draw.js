const HEIGHT = window.innerHeight, WIDTH = window.innerWidth, FPS = 60, SCREEN_ID = "screen";

var colors = {
    background: "#B1D4E0",
    bird: "#0C2D48",
    birdCheck: "#B6D9E5" 
};

var canvas, ctx;

function initialize(){
    let screen =  document.createElement("canvas");
    screen.id = SCREEN_ID;
    screen.width = WIDTH;
    screen.height = HEIGHT;

    document.body.appendChild(screen);

    canvas = document.getElementById(SCREEN_ID);
    ctx = canvas.getContext("2d");
}

function clearScreen(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

function draw(birds){
    clearScreen();

    for(let bird of birds){
        ctx.fillStyle = colors.birdCheck;
        
        ctx.beginPath();
        ctx.arc(bird.position.x, bird.position.y, bird.radiusCheck, 0, 2 * Math.PI);
        ctx.fill();
    }

    for(let bird of birds){
        ctx.fillStyle = colors.bird;

        ctx.beginPath();
        ctx.arc(bird.position.x, bird.position.y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

