/**
 * Создает экземпляр Sprite
 *
 * @param {Image} image картинка со спрайтами
 * @param {number} x - позиция спрайта по оси X
 * @param {number} y - позиция спрайта по оси Y
 * @param {number} width  ширина спрайта
 * @param {number} height высота спрайта
 *
 * @constructor
 */
function Sprite(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

/**
 * Отрисовывает спрайт на канвас
 *
 * @param  {CanvasRenderingContext2D} context место для рисования.
 * @param  {number} x позиция по оси X для отрисовки спрайта
 * @param  {number} y позиция по оси Y для отрисовки спрайта
 */
Sprite.prototype.draw = function(context, x, y) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};
