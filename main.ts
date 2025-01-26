basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
input.setSoundThreshold(SoundThreshold.Loud, input.temperature())
led.plotBarGraph(
25,
1
)
let Data = 25
radio.setGroup(1)
radio.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_EVT_ANY
)
control.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_EVT_ANY
)
radio.sendString("25")
serial.writeNumbers([
100,
100,
100,
100,
100,
100,
100
])
serial.writeNumbers([
100,
100,
100,
100,
100,
100,
100
])
serial.writeNumbers([
100,
100,
100,
100,
100,
100,
100
])
input.setSoundThreshold(SoundThreshold.Loud, input.temperature())
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
basic.showArrow(ArrowNames.North)
basic.forever(function () {
	
})
