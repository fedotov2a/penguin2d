test('penguin.isHit()', function () {
    // penguin: (100, 10, 40)
    ok(isHit(80, 10, 40) === true, 'Окружности пересекаются');
    ok(isHit(200, 10, 40) === false, 'Окружности не пересекаются');
});