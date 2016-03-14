gameOver= {   
    
    overImage: new Image(),
    retryImage: new Image(),
    retryClickImage: new Image(),

    
    // положение кнопки по (X,Y) [Retry]
    buttonX: [310],
    buttonY: [320],
    
    // размер кнопки [Retry]
    buttonWidth: [123],
    buttonHeight: [81], 
        

    init: function() {
        gameOver.overImage.src = "./scripts/resource/end_page.png";
        
        gameOver.retryImage.src = "./scripts/resource/retry.png";
        gameOver.retryClickImage.src = "./scripts/resource/retry_click.png";
    },
    
    render: function(context) {
        //this.clear(context);
        this.draw(context);
    },
    
    
    clear: function(context) {
        context.clearRect(0, 0, game.width, game.height);
    },
    
    
    draw: function(context){
        context.drawImage(this.overImage, 0, 0);
        context.drawImage(this.retryImage, gameOver.buttonX[0], gameOver.buttonY[0]);
    },
    
    // Нажатие кнопок
    checkClick: function(mouseEvent){
            
            console.log(mouseEvent.offsetX + " " + mouseEvent.offsetY);
            
        // кнопка Ещё (Retry)
            if(mouseEvent.offsetX > gameOver.buttonX[0] && mouseEvent.offsetX < gameOver.buttonX[0] + gameOver.buttonWidth[0]){
                if(mouseEvent.offsetY > gameOver.buttonY[0] && mouseEvent.offsetY < gameOver.buttonY[0] + gameOver.buttonHeight[0]){
                   game.currentState = state.GAME; // switch state
                }
            }
    }

};