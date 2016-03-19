rules = {
	bgImage: new Image(),
	pageImage: new Image(),
	backButton: new Image(),

	backButtonX: 4,
	backButtonY: 4,
	backButtonWidth: 90,
	backButtonHeight: 81,
   
    init: function() {
       rules.bgImage.src = "./scripts/resource/bg.png";
       rules.pageImage.src = "./scripts/resource/rules_page.png";
       rules.backButton.src = './scripts/resource/back.png';
    },
   
    render: function(context) {
       context.clearRect(0, 0, game.width, game.height);
       context.drawImage(this.bgImage, 0, 0);
       context.drawImage(this.pageImage, 0, 0);
       context.drawImage(this.backButton, 4, 4);
    },

    checkClick: function(mouseEvent) {
    	if(mouseEvent.offsetX > rules.backButtonX && mouseEvent.offsetX < rules.backButtonX + rules.backButtonWidth) {
            if(mouseEvent.offsetY > rules.backButtonY && mouseEvent.offsetY < rules.backButtonY + rules.backButtonHeight) {
            	canvas.removeEventListener('mouseup', rules.checkClick);
            	canvas.addEventListener('mouseup', menu.checkClick);
            	game.currentState = state.MENU;
            }
        }
    }
    
//    bgImage: new Image(),
//    pageImage: new Image(),
//    
//     init: function() {
//        rules.bgImage.src = "./scripts/resource/bg.png";
//        
//        rules.bgImage.src = "./scripts/resource/bg.png";
//        rules.pageImage.src = "./scripts/resource/rules_page.png";
//    },
//    
//     render: function(context) {
//        //this.clear(context);
//        this.draw(context);
//    },
//    
//     clear: function(context) {
//        context.clearRect(0, 0, game.width, game.height);
//    },
//    
//    
//    draw: function(context){
//        context.drawImage(this.bgImage, 0, 0);
//        context.drawImage(this.pageImage, 0, 0);
//    },
//    
	render: function(context) {      
        
		context.fillStyle="#0000bb";
		context.fillRect(0, 0, 720, 480);
		context.font = '40pt Calibri';
    context.fillStyle = 'white';
    context.fillText("Правила", 100, 110);
	}
};