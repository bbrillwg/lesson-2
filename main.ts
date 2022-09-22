input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            `)
    }
})
basic.showLeds(`
    . . . . .
    . . . . .
    # # . # #
    . . . . .
    . . . . .
    `)
