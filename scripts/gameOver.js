/**
* Объект Экран Конец Игры.
*
* Содержит описание элементов экрана Конца Игры.
*
* @constructor
*/
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
        
    /**
    * Ининциализирует объекты на экране Конец игры
    *
    */
    init: function() {
        gameOver.endImage.src = "./scripts/resource/end_page.png";
        gameOver.retryImage.src = "./scripts/resource/retry.png";
        gameOver.retryClickImage.src = "./scripts/resource/retry_click.png";
    },
    
    /**
    * Отрисовывает элементы экрана Конца игры.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
        context.clearRect(0, 0, game.width, game.height);
        context.drawImage(this.endImage, 0, 0);
        context.drawImage(this.retryImage, gameOver.buttonX[0], gameOver.buttonY[0]);

        context.beginPath();
        context.font = '25pt Arial';
        context.fillStyle = '#FFA500';
        context.fillText('Результат:          x' + scoreBar.score, 210, 230);
        context.fillText('Лучший:         x' + localStorage.bestScore, 210, 290);
        snowflake.sprite.draw(context, 390, 190);
        snowflake.sprite.draw(context, 350, 250);
        context.closePath();
    },

    /**
    * Обрабатывает события клавиатуры.
    *
    * @param {Event} event событие клавиатуры.
    *
    */
    onPress: function(event) {
        if (event.keyCode === KEY_SPACE) {
            window.removeEventListener('keydown', gameOver.onPress);
            canvas.removeEventListener('mouseup', gameOver.checkClick);
            game.frames = 0;
            game.speed = 3.5;
            scoreBar.score = 0;
            penguin.isDie = false;
            icecream.reset();
            iceHole.reset();
            pieceOfIce.reset();
            rock.reset();
            snowdrift.reset();
            snowflake.reset();
            walrus.reset();
            healthBar.sprite = [
                new Sprite(image, 1226, 711, 43, 60),
                new Sprite(image, 1226, 711, 43, 60),
                new Sprite(image, 1226, 711, 43, 60)
            ];
            game.currentState = state.GAME;
        }
    },
    
    /**
    * Обрабатывает события мыши.
    *
    * @param {Event} mouseEvent событие мыши.
    */
    checkClick: function(mouseEvent) {       
        if(mouseEvent.offsetX > gameOver.buttonX[0] && mouseEvent.offsetX < gameOver.buttonX[0] + gameOver.buttonWidth[0]) {
            if(mouseEvent.offsetY > gameOver.buttonY[0] && mouseEvent.offsetY < gameOver.buttonY[0] + gameOver.buttonHeight[0]) {
                canvas.removeEventListener('mouseup', gameOver.checkClick);
                window.removeEventListener('keydown', gameOver.onPress);
                game.frames = 0;
                game.speed = 3.5;
                scoreBar.score = 0;
                penguin.isDie = false;
                icecream.reset();
                iceHole.reset();
                pieceOfIce.reset();
                rock.reset();
                snowdrift.reset();
                snowflake.reset();
                walrus.reset();
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