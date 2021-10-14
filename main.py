def on_forever():
    pass

def num1():
    basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)
def num2():
    basic.show_leds("""
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    """)
def num3():
    basic.show_leds("""
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    """)
def num4():
    basic.show_leds("""
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    """)
def num5():
    basic.show_leds("""
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    """)
def num6():
    basic.show_leds("""
    # . . . #
    . . . . .
    # . . . #
    . . . . .
    # . . . #
    """)
def displayNum(num):
    if num == 1:
        num1()
    elif num == 2:
        num2()
    elif num == 3:
        num3()
    elif num == 4:
        num4()
    elif num == 5:
        num5()
    elif num == 6:
        num6()

def on_gesture_shake():
    for i in range(10):
        rollNum = randint(0, 6)
        displayNum(rollNum)
        basic.pause(20)
    for i in range(rollNum):
        music.play_tone(Note.C, 250)
        music.rest(250)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
basic.forever(on_forever)