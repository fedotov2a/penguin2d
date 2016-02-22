var /* Sprites for penguin and coordinates */
    spritePegnuin,
    spritePenguinX,
    spritePenguinY,
    spritePegnuinWidth = 45,
    spritePenguinHeight = 48
;

var /* Sprites for background and coordinates */
    spriteBackground,
    spriteBackgroundX,
    spriteBackgroundY,
    spriteBackgroundWidth,
    spriteBackgroundHeight
;
var pathToSprites = './scripts/resource/sprites.png';

/**
 * Initiate all sprite
 * 
 * @author Alexander Fedotov
 * @param  {Image} img spritesheet image
 */
function initializeSprites(image) {
    spritePegnuin = [
        /* animate for motion */
        new Sprite(image, 631, 2, spritePegnuinWidth, spritePenguinHeight),
        new Sprite(image, 677, 2, spritePegnuinWidth, spritePenguinHeight),
        new Sprite(image, 727, 2, spritePegnuinWidth, spritePenguinHeight),
        new Sprite(image, 775, 2, spritePegnuinWidth, spritePenguinHeight),

        /* animate for jump */
        new Sprite(image, 503, 2, 38, 50),
        new Sprite(image, 542, 2, 40, 48),
        new Sprite(image, 584, 2, 40, 48) 
    ];

    spriteBackground = new Sprite(image, 0, 0, 500, 400);
}


/**
* Initialize canvas
*
* @author Alexander Fedotov
*/
function initializeCanvas() {
    canvas = document.createElement('canvas');
    gameWidth = window.innerWidth;
    gameHeight = window.innerHeight;

    //var eventGame = 'mousedown';
    var eventGame = 'keydown';
    if (gameWidth >= 500 || gameHeight >= 400) {
        gameWidth = 500;
        gameHeight = 400;
        canvas.style.border = '1px solid #000';
    }

    //document.getElementById('my-canvas').addEventListener(eventGame, onPress, false);
    window.addEventListener(eventGame, onPress, false);
    canvas.width = gameWidth;
    canvas.height = gameHeight;

    context = canvas.getContext('2d');
    document.getElementById('my-canvas').appendChild(canvas);
}

/**
* Initialize graphics
*
* @author Alexander Fedotov
*/
function initializeGraphics() {
    var image = new Image();
    image.onload = function() {
        initializeSprites(this);
        run();
    }
    image.src = pathToSprites;
}