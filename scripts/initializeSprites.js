var /* Sprites */
    spritePegnuin,
    spriteBackground
;

var pathToSprites = './scripts/resource/sprites.png';

/**
 * Initiate all sprite
 * 
 * @param  {Image} img spritesheet image
 */
function initializeSprites(image) {
    spritePegnuin = [
        new Sprite(image, 0, 0, 0, 0),
        new Sprite(image, 0, 0, 0, 0),
        new Sprite(image, 0, 0, 0, 0),
        new Sprite(image, 0, 0, 0, 0),
        new Sprite(image, 0, 0, 0, 0),
        new Sprite(image, 0, 0, 0, 0),
        new Sprite(image, 0, 0, 0, 0) 
    ];

    spriteBackground = new Sprite(image, 0, 0, 500, 400);
}


/**
* Initialize canvas
*/
function initializeCanvas() {
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
* Initialize graphics
*/
function initializeGraphics() {
    var image = new Image();
    image.onload = function() {
        initializeSprites(this);
        run();
    }
    image.src = pathToSprites;
}