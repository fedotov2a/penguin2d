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
    backgroundPosition = (backgroundPosition - 1) % spriteBackground.width;
}

function renderBackground() {
    spriteBackground.draw(context, backgroundPosition, 0);
    spriteBackground.draw(context, backgroundPosition + spriteBackground.width, 0);
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
    //frames = (frames === 5000) ? 0 : frames + 1;
    updateBackground();
    
}

function render() {
    renderBackground();   
}

main();