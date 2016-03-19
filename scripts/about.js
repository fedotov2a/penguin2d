about = {
	bgImage: new Image(),
	pageImage: new Image(),
	backButton: new Image(),

	backButtonX: 4,
	backButtonY: 4,
	backButtonWidth: 90,
	backButtonHeight: 81,
   
    init: function() {
       about.bgImage.src = "./scripts/resource/bg.png";
       about.pageImage.src = "./scripts/resource/about_page.png";
       about.backButton.src = './scripts/resource/back.png';
    },
   
    render: function(context) {
       context.clearRect(0, 0, game.width, game.height);
       context.drawImage(this.bgImage, 0, 0);
       context.drawImage(this.pageImage, 0, 0);
       context.drawImage(this.backButton, 4, 4);
    },

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