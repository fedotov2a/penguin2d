function isHit(envX, envY, envRadius) {
    var x = (100 - envX) * (100 - envX);
    var y = (10 - envY) * (10 - envY);
    var r = (40 + envRadius) * (40 + envRadius);

    if (x + y <= r) {
        return true;
    }
    return false;
}

function isJump(y) {
    if (y < 360) {
        return true;
    }
    return false;
}