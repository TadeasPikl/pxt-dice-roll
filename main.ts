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

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let i = 0; i < 10; i++) {
        displayNum(randint(0, 6))
        basic.pause(25)
    }
    music.playTone(Note.C, music.beat())
})
basic.forever(function on_forever() {
    
})
