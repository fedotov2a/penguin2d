/**
* Объект Экран Главное Меню.
*
* Содержит описание элементов начального экрана игры.
*
* @constructor
*/
var menu = {
    muteOn: true,    
    
    bgImage: new Image(),
    logoImage: new Image(),
    playImage: new Image(),
    playClickImage: new Image(),
    rulesImage: new Image(),
    rulesClickImage: new Image(),
    muteOnButton: new Image(),  
    muteOffButton: new Image(),

    isCLickPlay: false,
    isClickRules: false,
    
    // положение кнопок по (X,Y)
    buttonX: [180,180,655],
    buttonY: [220,315,418],
    
    // размер кнопок
    buttonWidth: [321,321,321,65],
    buttonHeight: [81,81,81,62], 
    
    framesMenu: 1,  // вызывает баги, не менять!
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
        if (this.isCLickPlay) {
            context.drawImage(this.playClickImage, this.buttonX[0], this.buttonY[0]);
            this.isCLickPlay = false;
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
            if(mouseEvent.offsetX > menu.buttonX[0] && mouseEvent.offsetX < menu.buttonX[0] + menu.buttonWidth[0]){
                if(mouseEvent.offsetY > menu.buttonY[0] && mouseEvent.offsetY < menu.buttonY[0] + menu.buttonHeight[0]){
                    menu.isCLickPlay = true;
                    
                    // menu.fadeId = setInterval("menu.fadeOut()", 1000/menu.framesMenu);
                    // clearInterval(menu.timerId);
                    // canvas.removeEventListener("mousemove", menu.checkPos);
                    // canvas.removeEventListener("mouseup", menu.checkClick);

                   game.currentState = state.GAME; // переключить состояние
                }
            }
            
            // кнопка Правила (Rules)
            if(mouseEvent.offsetX > menu.buttonX[1] && mouseEvent.offsetX < menu.buttonX[1] + menu.buttonWidth[1]){
                if(mouseEvent.offsetY > menu.buttonY[1] && mouseEvent.offsetY < menu.buttonY[1] + menu.buttonHeight[1]){
                    menu.isClickRules = true;
                    // context.drawImage(menu.rulesClickImage, menu.buttonX[1], menu.buttonY[1]);
                    //menu.fadeId = setInterval("menu.fadeOut()", 1000/menu.framesMenu);
                    //clearInterval(menu.timerId);
                    // canvas.removeEventListener("mousemove", menu.checkPos);
                    // canvas.removeEventListener("mouseup", menu.checkClick);
                }
            }
            
            // кнопка Вкл/Откл звука (Mute On/off)
            if(mouseEvent.offsetX > menu.buttonX[2] && mouseEvent.offsetX < menu.buttonX[2] + menu.buttonWidth[2]){
                if(mouseEvent.offsetY > menu.buttonY[2] && mouseEvent.offsetY < menu.buttonY[2] + menu.buttonHeight[2]){
                        if (menu.muteOn) {
                            context.clearRect(menu.buttonX[2], menu.buttonY[2], menu.buttonWidth[3], menu.buttonHeight[3]);
                            context.drawImage(menu.muteOffButton, menu.buttonX[2], menu.buttonY[2]);
                            menu.muteOn = false;
                            //clearInterval(menu.timerId);
                            
                        } else {
                            context.clearRect(menu.buttonX[2], menu.buttonY[2], menu.buttonWidth[3], menu.buttonHeight[3]);
                            context.drawImage(menu.muteOnButton, menu.buttonX[2], menu.buttonY[2]);
                            menu.muteOn = true;
                           //clearInterval(menu.timerId);
                        }
                }
            }
            
            
    },
        
    // // Затемнение экрана
    // fadeOut: function(){
    //     context.fillStyle = "rgba(0,0,0, 0.2)";
    //     context.fillRect (0, 0, game.width, game.height);
    //     menu.time += 0.1;
    //     if(menu.time >= 2){
    //         clearInterval(this.fadeId);
    //         menu.time = 0.0;
    //         menu.timerId = setInterval("menu.render(context)", 1000/menu.framesMenu);
    //         canvas.addEventListener("mousemove", menu.checkPos);
    //         canvas.addEventListener("mouseup", menu.checkClick);
    //     }
    // }

};