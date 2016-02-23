var
    canvas,
    context,
    image = new Image(),
    sprites = './scripts/resource/sprites.png'
;

var state = {
    START: 0, 
    GAME: 1,
    END: 2
};

var game = {
    width: 720,
    height: 480,
    speed: 3,
    score: 0,
//    bestScore: localStorage.getItem('bestScore') || 0,
    frames: 0,
    gravity: 0.35,
    groundLayer: 0,
    differenceHeight: 160,
    
    currentState: state.GAME,

    init: function() {
        this.groundLayer = this.height - this.differenceHeight;
        canvas = document.createElement('canvas');
        canvas.style.border = '1px solid #000';

        // if (window.innerWidth < 720 || window.innerHeight < 480) {
        //     this.width = 500;
        //     this.height = 400;
        // }

        //document.getElementById('my-canvas').addEventListener(eventGame, onPress, false);
        window.addEventListener('keydown', onPress, false);
        canvas.width = this.width;
        canvas.height = this.height;

        context = canvas.getContext('2d');
        context.scale(game.width / 500, game.height / 400);
        document.getElementById('my-canvas').appendChild(canvas);

        image.src = sprites;
        image.onload = function() {
            run();
        }
    }
};

function onPress(event) {
    // switch(GameState)
    if (event.keyCode == 38 || event.keyCode == 32) {
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
    game.frames = (game.frames === 5000) ? 0 : game.frames + 1;
    background.update();
    penguin.update();
    rock.update();
    snowdrift.update();
    iceHole.update();
}

function render() {
    background.render(context);
    penguin.render(context);
    rock.render(context);
    snowdrift.render(context);
    iceHole.render(context);
}

main();