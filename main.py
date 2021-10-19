def on_button_pressed_a():
    tlacitko()
input.on_button_pressed(Button.A, on_button_pressed_a)

def tlacitko():
    
    def on_gesture_shake():
        shake()
    input.on_gesture(Gesture.SHAKE, on_gesture_shake)
    
    def shake():
        x = randint(1, 6)
        if x == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            """)
        if x == 2:
            basic.show_leds("""
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
            """)
        if x == 3:
            basic.show_leds("""
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
            """)
        if x == 4:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
            """)
        if x == 5:
            basic.show_leds("""
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
            """)
        if x == 6:
            basic.show_leds("""
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
            """)
basic.show_leds("""
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
""")