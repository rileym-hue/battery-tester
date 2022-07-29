let reading = 0
let voltage = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * (1000 / 340)
    basic.showNumber(voltage)
})
basic.forever(function () {
    basic.showString("Battery Tester")
})
