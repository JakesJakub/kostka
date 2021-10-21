let lock = 1
let kostka = 6
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    button()
})
function button() {
    basic.showIcon(IconNames.Yes)
    input.onGesture(Gesture.Shake, function on_gesture_shake() {
        shake()
    })
}

if (lock == 1) {
    function shake() {
        let cislo = randint(1, kostka)
        if (cislo == 1) {
            basic.showLeds(`
                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
            `)
        }
        
        if (cislo == 2) {
            basic.showLeds(`
                . . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . .
            `)
        }
        
        if (cislo == 3) {
            basic.showLeds(`
                # . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . #
            `)
        }
        
        if (cislo == 4) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (cislo == 5) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
            `)
        }
        
        if (cislo == 6) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (cislo == 7) {
            basic.showLeds(`
                # . . . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . . . #
            `)
        }
        
        if (cislo == 8) {
            basic.showLeds(`
                # . # . #
                                . . . . .
                                # . . . #
                                . . . . .
                                # . # . #
            `)
        }
        
        if (cislo == 9) {
            basic.showLeds(`
                # . # . #
                                . . . . .
                                # . # . #
                                . . . . .
                                # . # . #
            `)
        }
        
        if (cislo == 10) {
            basic.showLeds(`
                # . . . #
                                . # . # .
                                # . . . #
                                . # . # .
                                # . . . #
            `)
        }
        
        for (let i = 0; i < cislo; i++) {
            music.playTone(Note.A, music.beat(4))
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
