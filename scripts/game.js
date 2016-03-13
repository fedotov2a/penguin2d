var
    canvas,
    context,
    image = new Image(),
    sprites = './scripts/resource/sprites.png',

    KEY_SPACE = 32
;

var state = {
    START: 0, 
    GAME: 1,
    GAME_OVER: 2
};

var game = {
    width: 720,
    height: 480,
    speed: 3.8,
//    bestScore: localStorage.getItem('bestScore') || 0,
    frames: 0,
    gravity: 0.35,
    groundLayer: 0,
    differenceHeight: 120,
    
    currentState: state.START,

    init: function() {
        this.groundLayer = this.height - this.differenceHeight;
        canvas = document.createElement('canvas');
        canvas.style.border = '1px solid #000';

        // if (window.innerWidth < 720 || window.innerHeight < 480) {
        //     this.width = 500;
        //     this.height = 400;
        // }

        // document.getElementById('my-canvas').addEventListener('click', onPress, false);
        window.addEventListener('keydown', onPress, false);
        canvas.width = this.width;
        canvas.height = this.height;

        context = canvas.getContext('2d');
        // context.scale(game.width / 500, game.height / 400);
        document.getElementById('my-canvas').appendChild(canvas);


        menu.bgImage.src = "./scripts/resource/bg.png";
        menu.bgImage.onload = function(){ context.drawImage(menu.bgImage, 0, 0) };

        menu.logoImage.src = "./scripts/resource/logo.png";
        menu.logoImage.onload = function(){ context.drawImage(menu.logoImage, 170, 10) };

        menu.playImage.src = "./scripts/resource/play.png";
        menu.playClickImage.src = "./scripts/resource/play_click.png";
        menu.playImage.onload = function(){ context.drawImage(menu.playImage, menu.buttonX[0], menu.buttonY[0]) };

        menu.rulesImage.src = "./scripts/resource/rules.png";
        menu.rulesClickImage.src = "./scripts/resource/rules_click.png";
        menu.rulesImage.onload = function(){ context.drawImage(menu.rulesImage, menu.buttonX[1], menu.buttonY[1]) };

        menu.muteOffButton.src = "./scripts/resource/muteOff.png";
        menu.muteOnButton.src = "./scripts/resource/muteOn.png";
        menu.muteOnButton.onload = function(){ context.drawImage(menu.muteOnButton, menu.buttonX[2], menu.buttonY[2]) };

        menu.timerId = setInterval("update()", 1000/menu.framesMenu);
        canvas.addEventListener("mousemove", menu.checkPos);
        canvas.addEventListener("mouseup", menu.checkClick);

        menu.framesMenu = this.speed;

        image.src = sprites;
        image.onload = function() {
            run();
        }
    }
};

function onPress(event) {
    // switch(GameState)
    if (event.keyCode == KEY_SPACE) {
        if (!penguin.isJump()) {
            penguin.jump();
        }
    }
}

function main() {
    game.init();
}

function run() {
    var loop = function() {
        update();
        render();
        window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);
}

function update() {
    if (game.currentState === state.START) {

    } else if (game.currentState === state.GAME) {
        game.frames = (game.frames === 10000) ? 0 : game.frames + 1;
        background.update();
        rock.update();
        snowdrift.update();
        iceHole.update();
        icecream.update();
        snowflake.update();
        pieceOfIce.update();
        penguin.update();
        healthBar.update();
    } else if (game.currentState === state.GAME_OVER) {

    }
}

function render() {
    if (game.currentState === state.START) {
        menu.render(context);
    } else if (game.currentState === state.GAME) {
        background.render(context);
        rock.render(context);
        snowdrift.render(context);
        iceHole.render(context);
        icecream.render(context);
        snowflake.render(context);
        pieceOfIce.render(context);
        penguin.render(context);
        healthBar.render(context);
        scoreBar.render(context);
    } else if (game.currentState === state.GAME_OVER) {
        gameOver.render(context);
    }
}

main();