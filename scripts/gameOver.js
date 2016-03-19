gameOver = {   
    
    endImage: new Image(),
    retryImage: new Image(),
    retryClickImage: new Image(),

    // положение кнопки по (X,Y) [Retry]
    buttonX: [310],
    buttonY: [320],
    
    // размер кнопки [Retry]
    buttonWidth: [123],
    buttonHeight: [81], 
        

    init: function() {
        gameOver.endImage.src = "./scripts/resource/end_page.png";
        gameOver.retryImage.src = "./scripts/resource/retry.png";
        gameOver.retryClickImage.src = "./scripts/resource/retry_click.png";
    },
    
    render: function(context) {
        context.clearRect(0, 0, game.width, game.height);
        context.drawImage(this.endImage, 0, 0);
        context.drawImage(this.retryImage, gameOver.buttonX[0], gameOver.buttonY[0]);

        context.beginPath();
        context.font = '32pt Helvetica';
        context.fillStyle = '#FFA500';
        context.fillText('Результат:      x' + scoreBar.score, 100, 240);
        context.fillText('Лучший:      x' + localStorage['bestScore'], 100, 300);
        snowflake.sprite.draw(context, 310, 190);
        snowflake.sprite.draw(context, 270, 250);
        context.closePath();
    },

    onPress: function(event) {
        if (event.keyCode === KEY_SPACE) {
            window.removeEventListener('keydown', gameOver.onPress);
            game.frames = 0;
            scoreBar.score = 0;
            penguin.isDie = false;
            healthBar.sprite = [
                new Sprite(image, 1226, 711, 43, 60),
                new Sprite(image, 1226, 711, 43, 60),
                new Sprite(image, 1226, 711, 43, 60)
            ];
            game.currentState = state.GAME;
        }
    },
    
    checkClick: function(mouseEvent) {       
        if(mouseEvent.offsetX > gameOver.buttonX[0] && mouseEvent.offsetX < gameOver.buttonX[0] + gameOver.buttonWidth[0]) {
            if(mouseEvent.offsetY > gameOver.buttonY[0] && mouseEvent.offsetY < gameOver.buttonY[0] + gameOver.buttonHeight[0]) {
                canvas.removeEventListener('mouseup', gameOver.checkClick);
                game.frames = 0;
                scoreBar.score = 0;
                penguin.isDie = false;
                healthBar.sprite = [
                    new Sprite(image, 1226, 711, 43, 60),
                    new Sprite(image, 1226, 711, 43, 60),
                    new Sprite(image, 1226, 711, 43, 60)
                ];
                game.currentState = state.GAME;
            }
        }
    }
};