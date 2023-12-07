input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        sprite1.set(LedSpriteProperty.X, value)
    } else if (name == "y") {
        sprite1.set(LedSpriteProperty.Y, value)
    }
})
let sprite1: game.LedSprite = null
let sprite: game.LedSprite = null
radio.setGroup(124)
sprite = game.createSprite(2, 2)
sprite1 = game.createSprite(2, 1)
loops.everyInterval(1000, function () {
    radio.sendValue("x", sprite.get(LedSpriteProperty.X))
    radio.sendValue("y", sprite.get(LedSpriteProperty.Y))
})
