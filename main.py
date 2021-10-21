lock = 1
kostka = 6

def on_button_pressed_a():
    button()
input.on_button_pressed(Button.A, on_button_pressed_a)

def button():
    basic.show_icon(IconNames.YES)
    
    def on_gesture_shake():
        shake()
    input.on_gesture(Gesture.SHAKE, on_gesture_shake)
    
if lock == 1:
    def shake():
        cislo = randint(1, kostka)
        if cislo == 1:
            basic.show_leds("""
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            """)
        if cislo == 2:
            basic.show_leds("""
                . . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . .
            """)
        if cislo == 3:
            basic.show_leds("""
                # . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . #
            """)
        if cislo == 4:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . #
            """)
        if cislo == 5:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            """)
        if cislo == 6:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            """)
        if cislo == 7:
            basic.show_leds("""
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            """)
        if cislo == 8:
            basic.show_leds("""
                # . # . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . # . #
            """)
        if cislo == 9:
            basic.show_leds("""
                # . # . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . # . #
            """)
        if cislo == 10:
            basic.show_leds("""
                # . . . #
                                . # . # .
                                # . . . #
                                . # . # .
                                # . . . #
            """)
        for i in range(cislo):
            music.play_tone(Note.A, music.beat(4))
            music.rest(music.beat(2))
basic.show_leds("""
    . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
""")
