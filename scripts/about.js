/**
* Объект Экран Об Авторах.
*
* Содержит описание элементов экрана Об Авторах.
*
* @constructor
*/
about = {
	bgImage: new Image(),
	pageImage: new Image(),
	backButton: new Image(),

	backButtonX: 4,
	backButtonY: 4,
	backButtonWidth: 90,
	backButtonHeight: 81,

    /**
	* Ининциализирует объекты на экране Об Авторах
	*
	*/
    init: function() {
       about.bgImage.src = "./scripts/resource/bg.png";
       about.pageImage.src = "./scripts/resource/about_page.png";
       about.backButton.src = './scripts/resource/back.png';
    },

    /**
    * Отрисовывает элементы экрана Правила.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
       context.clearRect(0, 0, game.width, game.height);
       context.drawImage(this.bgImage, 0, 0);
       context.drawImage(this.pageImage, 0, 0);
       context.drawImage(this.backButton, 4, 4);
    },

    /**
    * Обрабатывает события мыши.
    *
    * @param {Event} mouseEvent событие мыши.
    */
    checkClick: function(mouseEvent) {
    	if(mouseEvent.offsetX > about.backButtonX && mouseEvent.offsetX < about.backButtonX + about.backButtonWidth) {
            if(mouseEvent.offsetY > about.backButtonY && mouseEvent.offsetY < about.backButtonY + about.backButtonHeight) {
            	canvas.removeEventListener('mouseup', about.checkClick);
            	canvas.addEventListener('mouseup', menu.checkClick);
            	game.currentState = state.MENU;
            }
        }
    }
};