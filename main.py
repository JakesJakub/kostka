x = 1

def on_button_pressed_a():
    button()
input.on_button_pressed(Button.A, on_button_pressed_a)

def button():

    def on_gesture_shake():
        shake()
    input.on_gesture(Gesture.SHAKE, on_gesture_shake)
    

if x == 1:
    def shake():
        y = randint(1, 6)
        if y == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            """)
        if y == 2:
            basic.show_leds("""
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
            """)
        if y == 3:
            basic.show_leds("""
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
            """)
        if y == 4:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
            """)
        if y == 5:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
            """)
        if y == 6:
            basic.show_leds("""
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
            """)
        if y == 7:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            """)
        if y == 8:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            """)
        if y == 9:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            """)
        if y == 10:
            basic.show_leds("""
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            """)
        for i in range(y):
            music.play_tone(Note.A, music.beat(2))
            music.rest(music.beat(2))
basic.show_leds("""
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
""")