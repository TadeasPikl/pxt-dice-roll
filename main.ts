function num1() {
    basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
}

function num2() {
    basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
}

function num3() {
    basic.showLeds(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `)
}

function num4() {
    basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
}

function num5() {
    basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
}

function num6() {
    basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    `)
}

function displayNum(num: number) {
    if (num == 1) {
        num1()
    } else if (num == 2) {
        num2()
    } else if (num == 3) {
        num3()
    } else if (num == 4) {
        num4()
    } else if (num == 5) {
        num5()
    } else if (num == 6) {
        num6()
    }
    
}

input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let i: number;
    let rollNum: number;
    for (i = 0; i < 10; i++) {
        rollNum = randint(0, 6)
        displayNum(rollNum)
        basic.pause(20)
    }
    for (i = 0; i < rollNum; i++) {
        music.playTone(Note.C, 250)
        music.rest(250)
    }
})
basic.forever(function on_forever() {
    
})
