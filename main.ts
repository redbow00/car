input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    wuKong.mecanumRun(wuKong.RunList.Front, 100)
    basic.pause(1000)
    wuKong.mecanumRun(wuKong.RunList.left, 100)
    basic.pause(1000)
    wuKong.mecanumRun(wuKong.RunList.rear, 100)
    basic.pause(1000)
    wuKong.mecanumRun(wuKong.RunList.right, 100)
    wuKong.mecanumRun(wuKong.RunList.stop, 100)
})
let culoare = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
wuKong.mecanumWheel(
wuKong.ServoList.S0,
wuKong.ServoList.S1,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
basic.forever(function () {
    culoare += 1
    strip.showRainbow(culoare, 360)
})
