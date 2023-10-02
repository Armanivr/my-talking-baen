def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

for index in range(4):
    music.set_volume(255)
    basic.pause(1000)
    music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 2500),
        music.PlaybackMode.UNTIL_DONE)
    basic.pause(200)
    music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 2500),
        music.PlaybackMode.UNTIL_DONE)
basic.pause(1000)
music.play(music.string_playable("D E D - - - - - ", 1300),
    music.PlaybackMode.UNTIL_DONE)
basic.pause(200)
basic.show_string("Ben?")