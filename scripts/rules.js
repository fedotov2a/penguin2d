/**
* Объект Экран Правила.
*
* Содержит описание элементов экрана Правила.
*
* @constructor
*/
rules = {
	bgImage: new Image(),
	pageImage: new Image(),
	backButton: new Image(),

	backButtonX: 4,
	backButtonY: 4,
	backButtonWidth: 90,
	backButtonHeight: 81,

	/**
	* Ининциализирует объекты на экране Правила
	*
	*/
    init: function() {
       rules.bgImage.src = "./scripts/resource/bg.png";
       rules.pageImage.src = "./scripts/resource/rules_page.png";
       rules.backButton.src = './scripts/resource/back.png';
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
    	if(mouseEvent.offsetX > rules.backButtonX && mouseEvent.offsetX < rules.backButtonX + rules.backButtonWidth) {
            if(mouseEvent.offsetY > rules.backButtonY && mouseEvent.offsetY < rules.backButtonY + rules.backButtonHeight) {
            	canvas.removeEventListener('mouseup', rules.checkClick);
            	canvas.addEventListener('mouseup', menu.checkClick);
            	game.currentState = state.MENU;
            }
        }
    }
};