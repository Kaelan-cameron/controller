input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    speed_left = 0
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    speed_right = 0
})
let speed_left = 0
let speed_right = 0
radio.setGroup(1)
speed_right = 0
speed_left = 0
basic.forever(function on_forever() {
    
    speed_left = Math.map(input.rotation(Rotation.Roll), -90, 90, -1, 1)
    speed_right = Math.map(input.rotation(Rotation.Roll), 90, -90, -1, 1)
    radio.sendValue("speed_left", speed_left)
    radio.sendValue("speed_right", speed_right)
    basic.pause(100)
})
