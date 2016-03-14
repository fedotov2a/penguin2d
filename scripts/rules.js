rules = {
    
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