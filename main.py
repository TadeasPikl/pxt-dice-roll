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
def num7():
    basic.show_leds("""
    # . . . #
    . . . . .
    # . # . #
    . . . . .
    # . . . #
    """)
def num8():
    basic.show_leds("""
    # . # . #
    . . . . .
    # . . . #
    . . . . .
    # . # . #
    """)
def num9():
    basic.show_leds("""
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #
    """)
def num10():
    basic.show_leds("""
    # . . . #
    . # . # .
    # . . . #
    . # . # .
    # . . . #
    """)
def clearScreen():
    basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
    music.play_tone(Note.C, 750)
    basic.pause(100)
    basic.clear_screen()

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
    elif num == 7:
        num7()
    elif num == 8:
        num8()
    elif num == 9:
        num9()
    elif num == 10:
        num10()

def on_logo_event_pressed():
    global sides
    if sides == 10:
        sides = 6
        num6()
    else:
        sides = 10
        num10()

def on_gesture_shake():
    for i in range(10):
        rollNum = randint(1, sides)
        displayNum(rollNum)
        basic.pause(10)
    
    for i in range(rollNum):
        music.play_tone(Note.C, 250)
        music.rest(250)
    while True:
        if input.button_is_pressed(Button.A):
            clearScreen()
            break

sides = 6
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
basic.forever(on_forever)