input.onButtonPressed(Button.A, function () {
    serial.writeLine("" + (input.temperature()))
    serial.writeLine("celsius")
    basic.showString("" + (input.temperature()))
    basic.showString("celsius")
})
input.onButtonPressed(Button.AB, function () {
    if (input.temperature() < 25) {
        serial.writeLine("Agafar jaqueta")
        basic.showIcon(IconNames.Umbrella)
    }
    if (input.temperature() > 25) {
        serial.writeLine("No agafar jaqueta")
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() > 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() < 25) {
        serial.writeLine("" + (input.temperature()))
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
	
})
