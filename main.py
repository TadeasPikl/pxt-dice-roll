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

def on_button_pressed_a():
    for i in range(10):
        displayNum(randint(0, 6))
        basic.pause(25)
    music.play_tone(Note.C, music.beat())
input.on_button_pressed(Button.A, on_button_pressed_a)
basic.forever(on_forever)