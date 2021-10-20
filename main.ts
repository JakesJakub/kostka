let x = 1
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    button()
})
function button() {
    input.onGesture(Gesture.Shake, function on_gesture_shake() {
        shake()
    })
}

if (x == 1) {
    function shake() {
        let y = randint(1, 6)
        if (y == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            `)
        }
        
        if (y == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
            `)
        }
        
        if (y == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
            `)
        }
        
        if (y == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
            `)
        }
        
        if (y == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
            `)
        }
        
        if (y == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
            `)
        }
        
        if (y == 7) {
            basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `)
        }
        
        if (y == 8) {
            basic.showLeds(`
            # . # . #
            . . . . .
            # . . . #
            . . . . .
            # . # . #
            `)
        }
        
        if (y == 9) {
            basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
        }
        
        if (y == 10) {
            basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            `)
        }
        
        for (let i = 0; i < y; i++) {
            music.playTone(Note.A, music.beat(2))
            music.rest(music.beat(2))
        }
    }
    
}

basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
`)
