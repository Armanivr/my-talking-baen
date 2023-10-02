import speech

speech.say("Hello")

for index in range(5):
    music.set_volume(255)
    basic.pause(1000)
    music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 2500),
        music.PlaybackMode.UNTIL_DONE)
    basic.pause(200)
    music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 2500),
        music.PlaybackMode.UNTIL_DONE)

def on_forever():
    pass
basic.forever(on_forever)
