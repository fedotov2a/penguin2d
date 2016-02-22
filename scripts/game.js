var /* Game vars */
    canvas,
    context,
    gameWidth,
    gameHeight,
    currentState,
    frames = 0,
    backgroundPosition = 0,
    score = 0,
    best = localStorage.getItem('best') || 0;
;

function updateBackground() {
    if (Penguin.y < gameHeight - 70) {
        backgroundPosition = (backgroundPosition - 3) % spriteBackground.width;
    } else {
        backgroundPosition = (backgroundPosition - 3) % spriteBackground.width;
    }
}

function renderBackground() {
    spriteBackground.draw(context, backgroundPosition, 0);
    spriteBackground.draw(context, backgroundPosition + spriteBackground.width, 0);
}

function onPress(event) {
    // switch(GameState)
    if (event.keyCode == 38 || event.keyCode == 32) {
        if (Penguin.y >= gameHeight - 70) {
            Penguin.jump();
        }
    }
}

function main() {
    initializeCanvas();
    initializeGraphics();
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
    frames = (frames === 5000) ? 0 : frames + 1;
    updateBackground();
    Penguin.update();
    Enemies.update();
}

function render() {
    renderBackground();
    Penguin.render(context);
    Enemies.render(context);
}

main();