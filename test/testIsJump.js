test('penguin.isJump()', function () {
    ok(isJump(200) === true, 'Пингвин прыгнул');
    ok(isJump(360) === false, 'Пингвин не прыгнул');
});