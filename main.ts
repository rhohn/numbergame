function Welcome () {
    basic.showString("ADDING GAME", 80)
for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Yes)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    basic.clearScreen()
    basic.pause(850)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    if (Operand1 + Operand2 == Answer) {
        Score += 1
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    Round += 1
    if (Round > 3) {
        GameOver()
    } else {
        PlayGame()
    }
})
input.onButtonPressed(Button.B, function () {
    if (Operand1 + Operand2 != Answer) {
        Score += 1
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    Round += 1
    if (Round > 3) {
        GameOver()
    } else {
        PlayGame()
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
function PlayGame () {
    basic.clearScreen()
    basic.showString("ROUND" + Round, 100)
Operand1 = randint(0, 5)
    Operand2 = randint(0, 5)
    Answer = randint(0, 10)
    basic.showNumber(Operand1)
    basic.pause(850)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showNumber(Operand2)
    basic.pause(850)
    basic.showString("=")
    basic.showNumber(Answer)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Round = 1
    Score = 0
    PlayGame()
})
function GameOver () {
    basic.clearScreen()
    basic.showString("GAME OVER", 100)
basic.showString("SCORE:" + Score, 100)
}
let Answer = 0
let Operand2 = 0
let Operand1 = 0
let Score = 0
let Round = 0
Welcome()
