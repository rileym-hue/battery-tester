# How to make a battery tester
## First grab the show string block to the on start block.
```blocks
basic.forever(function () {
    basic.showString("Batter Tester")
})
```
## Next drag the when A pressed block from the input over. 
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
```
### 2nd, drag a show number block over and a pause block.
### Change the pause block to 2 seconds.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    basic.pause(2000)
})
```
### lastly, drag an analog pin 0 over and place into the bubble of the show number block.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(2000)
})
```
## Next drag the when B pressed block from the input over. 
### 2nd, open variables and make a variable
### Then, drag the set reading to block from variable over and add the reading variable.
```blocks
input.onButtonPressed(Button.B, function () {
    reading = 0
})
```
### Add the analog pin 0 over from pins to the bubble. 
```blocks
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
})
```
### 3rd, open variables and make a variable called voltage.
### Drag get reading block over and change variable to voltage.
```blocks
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = 0
})
```
### drag a multiplication and division block over and nest them. 
### add the reading variable to the first bubble in the multiplication block.
```blocks
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * (0 / 0)
})
``` 
### Add a voltage variable x 1000 / 340
```blocks
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * (1000 / 340)
})
``` 
### Lastly, drag a show number block over and add the voltage variable
```blocks
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * (1000 / 340)
    basic.showNumber(voltage)
})
```