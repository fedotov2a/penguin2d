var /* Game vars */
    canvas,
    context,
    gameWidth,
    gameHeight,
    currentState,
    frames = 0,
    backgroundPosition = 0,
    score = 0,
    best = localStorage.getItem('best') || 0;
;


/**
* Initiate canvas
*/
function initCanvas() {
    canvas = document.createElement('canvas');
    gameWidth = window.innerWidth;
    gameHeight = window.innerHeight;

    if (gameWidth >= 500 || gameHeight >= 400) {
        gameWidth = 500;
        gameHeight = 400;
        canvas.style.border = '1px solid #000';
    }

    canvas.width = gameWidth;
    canvas.height = gameHeight;

    context = canvas.getContext('2d');
    document.getElementById('my-canvas').appendChild(canvas);
}

/**
* Initiate graphics
*/
function initGraphics() {
    var image = new Image();
    image.onload = function() {
        initSprites(this);
        run();
    }
    image.src = './scripts/resource/sprites.png';
}

function main() {
    initCanvas();
    initGraphics();

}

function run() {
    var loop = function() {
        update();
        render();
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function update() {
    frames = (frames === 5000) ? 0 : frames + 1;
    backgroundPosition = (backgroundPosition - 1) % spriteBackground.width;
}

function render() {
    spriteBackground.draw(context, backgroundPosition, 0);
    spriteBackground.draw(context, backgroundPosition + spriteBackground.width, 0);
        
}

main();