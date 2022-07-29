# How to make a battery tester
## First grab the show string block to the on start block.
```blocks
basic.forever(function () {
    basic.showString("Batter Tester")
})
```
## Next drag the when A pressed block from the input over. 
### 2nd, drag a show number block over and a pause block.
### Change the pause block to 2 seconds.
### lastly, drag an analog pin 0 over and place into the bubble of the show number block.
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(2000)
})
```
## Next drag the when B pressed block from the input over. 
### 2nd, drag the set reading to block from variable over.
### Change the variable to "reading" and drag analog pin 0 over from pins. 
### 3rd, drag ser reading to block from variable over.
### Change the variable to "voltage" and add to math blocks over, 
### multiplication and division blocks and place them into each other.
### Add a voltage variable x 1000 / 340
### Lastly, drag a show number block over and add the voltage variable
```blocks
input.onButtonPressed(Button.B, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    voltage = reading * (1000 / 340)
    basic.showNumber(voltage)
})
```