var /* Sprites */
    spritePegnuin,
    spriteBackground
;


/**
 * Sprite class
 *
 * @constructor
 * @this {Sprite}
 * @param {Image}  image    spritesheet image
 * @param {number} x      x-position in spritesheet
 * @param {number} y      y-position in spritesheet
 * @param {number} width  width of sprite 
 * @param {number} height height of sprite
 */
function Sprite(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};
/**
 * Draw sprite the canvas context
 *
 * @this {Sprite}
 * @param  {CanvasRenderingContext2D} ctx context used for drawing
 * @param  {number} x   x-position on canvas to draw from
 * @param  {number} y   y-position on canvas to draw from
 */
Sprite.prototype.draw = function(context, x, y) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

/**
 * Initiate all sprite
 * 
 * @param  {Image} img spritesheet image
 */
function initSprites(image) {
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