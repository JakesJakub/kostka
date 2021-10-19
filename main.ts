input.onButtonPressed(Button.A, function on_button_pressed_a() {
    tlacitko()
})
function tlacitko() {
    input.onGesture(Gesture.Shake, function on_gesture_shake() {
        shake()
    })
    function shake() {
        let x = randint(1, 6)
        if (x == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            `)
        }
        
        if (x == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
            `)
        }
        
        if (x == 3) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
            `)
        }
        
        if (x == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
            `)
        }
        
        if (x == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
            `)
        }
        
        if (x == 6) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
            `)
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
function lock() {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    }
    
}

