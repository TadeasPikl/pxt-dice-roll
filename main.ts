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

function num7() {
    basic.showLeds(`
    # . . . #
    . . . . .
    # . # . #
    . . . . .
    # . . . #
    `)
}

function num8() {
    basic.showLeds(`
    # . # . #
    . . . . .
    # . . . #
    . . . . .
    # . # . #
    `)
}

function num9() {
    basic.showLeds(`
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #
    `)
}

function num10() {
    basic.showLeds(`
    # . . . #
    . # . # .
    # . . . #
    . # . # .
    # . . . #
    `)
}

function numHigh(higherNum: number) {
    basic.showNumber(higherNum)
}

function clearScreen() {
    basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
    music.playTone(Note.C, 750)
    basic.pause(100)
    basic.clearScreen()
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
    } else if (num == 7) {
        num7()
    } else if (num == 8) {
        num8()
    } else if (num == 9) {
        num9()
    } else if (num == 10) {
        num10()
    } else if (num > 10) {
        numHigh(num)
    }
    
}

let sides = 6
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (sides > 1) {
        sides = sides - 1
    }
    
    displayNum(sides)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (sides < 32) {
        sides = sides + 1
    }
    
    displayNum(sides)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let rollNum: number;
    let i: number;
    if (sides > 10) {
        rollNum = randint(1, sides)
        displayNum(rollNum)
    } else {
        for (i = 0; i < 10; i++) {
            rollNum = randint(1, sides)
            displayNum(rollNum)
            basic.pause(10)
        }
    }
    
    for (i = 0; i < rollNum; i++) {
        music.playTone(Note.C, 250)
        music.rest(250)
    }
    while (true) {
        if (input.logoIsPressed()) {
            clearScreen()
            break
        }
        
    }
})
basic.forever(function on_forever() {
    
})
