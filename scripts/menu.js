/**
* Объект Экран Главное Меню.
*
* Содержит описание элементов начального экрана игры.
*
* @constructor
*/
var menu = {
    muteOn: true,

    authorsImage: new Image(),
    bgImage: new Image(),    
    bgImage: new Image(),
    logoImage: new Image(),
    playImage: new Image(),
    playClickImage: new Image(),
    rulesImage: new Image(),
    rulesClickImage: new Image(),
    muteOnButton: new Image(),  
    muteOffButton: new Image(),

    isClickPlay: false,
    isClickRules: false,
    
    // положение кнопок по (X,Y) [Play,Rules,Mute,Authors]
    buttonX: [180,180,637,637],
    buttonY: [220,315,410,62],
    
    // размер кнопок [Play,Rules,Mute,Authors]
    buttonWidth: [321,321,321,75],
    buttonHeight: [81,81,81,68], 
    
    timerId: 0,
    fadeId: 0,
    time: 0.0,
    
    /**
    * Отрисовывает элементы экрана Главного Меню.
    *
    * @param {CanvasRenderingContext2D} context место для рисования.
    */
    render: function(context) {
        context.clearRect(0, 0, game.width, game.height);
        context.drawImage(this.bgImage, 0, 0);
        context.drawImage(this.logoImage, 170,10);
        context.drawImage(this.playImage, this.buttonX[0], this.buttonY[0]);

        if (this.isClickPlay) {
            context.drawImage(this.playClickImage, this.buttonX[0], this.buttonY[0]);
            this.isClickPlay = false;
        }

        context.drawImage(this.rulesImage, this.buttonX[1], this.buttonY[1]);
        if (this.isClickRules) {
            context.drawImage(this.rulesClickImage, this.buttonX[1], this.buttonY[1]);
            this.isClickRules = false;
        }

        context.drawImage(this.muteOnButton, this.buttonX[2], this.buttonY[2]);
        if (!this.muteOn) {
            context.drawImage(this.muteOffButton, this.buttonX[2], this.buttonY[2]);
        }
    },
    
    /**
    * Обрабатывает события мыши.
    *
    * @param {Event} mouseEvent событие мыши.
    */
    checkClick: function(mouseEvent){
        // кнопка Играть (Play)
        // console.log(mouseEvent.offsetX + " " + mouseEvent.offsetY);
        if(mouseEvent.offsetX > menu.buttonX[0] && mouseEvent.offsetX < menu.buttonX[0] + menu.buttonWidth[0]) {
            if(mouseEvent.offsetY > menu.buttonY[0] && mouseEvent.offsetY < menu.buttonY[0] + menu.buttonHeight[0]) {
                menu.isClickPlay = true;
                canvas.removeEventListener("mouseup", menu.checkClick);
                game.currentState = state.GAME;
            }
        }
        
        // кнопка Правила (Rules)
        if(mouseEvent.offsetX > menu.buttonX[1] && mouseEvent.offsetX < menu.buttonX[1] + menu.buttonWidth[1]) {
            if(mouseEvent.offsetY > menu.buttonY[1] && mouseEvent.offsetY < menu.buttonY[1] + menu.buttonHeight[1]) {
                menu.isClickRules = true;
                canvas.removeEventListener('mouseup', menu.checkClick);
                canvas.addEventListener('mouseup', rules.checkClick);
                game.currentState = state.RULES;
            }
        }
        
        // кнопка Вкл/Откл звука (Mute On/off)
        if(mouseEvent.offsetX > menu.buttonX[2] && mouseEvent.offsetX < menu.buttonX[2] + menu.buttonWidth[2]) {
            if(mouseEvent.offsetY > menu.buttonY[2] && mouseEvent.offsetY < menu.buttonY[2] + menu.buttonHeight[2]) {
                if (menu.muteOn) {
                    context.clearRect(menu.buttonX[2], menu.buttonY[2], menu.buttonWidth[3], menu.buttonHeight[3]);
                    context.drawImage(menu.muteOffButton, menu.buttonX[2], menu.buttonY[2]);
                    menu.muteOn = false;
                    
                } else {
                    context.clearRect(menu.buttonX[2], menu.buttonY[2], menu.buttonWidth[3], menu.buttonHeight[3]);
                    context.drawImage(menu.muteOnButton, menu.buttonX[2], menu.buttonY[2]);
                    menu.muteOn = true;
                }
            }
        }  
    }
};