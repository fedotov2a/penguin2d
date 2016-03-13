/**
* Объект Конец игры.
* 
* @constructor
*/
gameOver = {
	/**
	* Отрисовывает экран конца игры.
	*
	* @param {CanvasRenderingContext2D} context место для рисования.  
 	*/
	render: function(context) {
		context.fillStyle="#0000bb";
		context.fillRect(0, 0, 720, 480);
		context.font = '40pt Calibri';
        context.fillStyle = 'white';
        context.fillText("КОНЕЦ ИГРЫ :(", 100, 110);
        context.fillText("ОЧКОВ НАБРАНО: " + scoreBar.score, 100, 170);
        context.fillText("F5 - СЫГРАТЬ ЕЩЁ РАЗ", 100, 250);
	}
};