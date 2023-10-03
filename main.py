def benHangUp():
    global BenSound
    music.play(music.string_playable("E F E - - - - - ", 300),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.SILLY)
    BenSound = input.sound_level() == 0

def on_button_pressed_a():
    BenPickUp()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    global benface
    benface = randint(1, 4)
    BenTalk()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def BenTalk():
    basic.pause(1000)
    if benface == 1:
        music.play(music.string_playable("E F E - - - - - ", 1000),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_string("Yes")
    elif benface == 2:
        music.play(music.string_playable("C D C - - - - - ", 1000),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_string("No")
    elif benface == 3:
        music.play(music.string_playable("C D C D D - - - ", 800),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_string("Eughh")
    else:
        music.play(music.string_playable("D C D C D C D - ", 300),
            music.PlaybackMode.IN_BACKGROUND)
        basic.show_string("HoHoHo")
    basic.pause(2000)
    if input.sound_level() < 139:
        benHangUp()
def BenPickUp():
    for index in range(3):
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
benface = 0
BenSound = False
input.set_sound_threshold(SoundThreshold.LOUD, 140)