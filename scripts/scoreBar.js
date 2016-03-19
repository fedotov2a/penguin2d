/**
* Объект "Панель Очков".
*
* Содержит описание и поведение Панели Очков в игре.
*
* @constructor
*/
var scoreBar = {
    score: 0,
    sprite: new Sprite(image, 1069, 116, 62, 62),

    /**
    * Отрисовывает объект "Панель Очков" в игре.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
        this.sprite.draw(context, 630, 20);
        context.beginPath();
        context.font = '40pt Helvetica';
        context.fillStyle = 'blue';
        context.fillText(this.score + " x", 550 - Math.ceil((Math.log(this.score * 100 + 10) / Math.log(10))) * 10, 65);
        context.closePath();
    }
};