function benHangUp () {
    music.play(music.stringPlayable("E F E - - - - - ", 300), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Silly)
    BenSound = input.soundLevel() == 0
}
input.onButtonPressed(Button.A, function () {
    BenPickUp()
})
input.onSound(DetectedSound.Loud, function () {
    benface = randint(1, 4)
    BenTalk()
})
function BenTalk () {
    basic.pause(1000)
    if (benface == 1) {
        music.play(music.stringPlayable("E F E - - - - - ", 1000), music.PlaybackMode.InBackground)
        basic.showString("Yes")
    } else if (benface == 2) {
        music.play(music.stringPlayable("C D C - - - - - ", 1000), music.PlaybackMode.InBackground)
        basic.showString("No")
    } else if (benface == 3) {
        music.play(music.stringPlayable("C D C D D - - - ", 800), music.PlaybackMode.InBackground)
        basic.showString("Eughh")
    } else {
        music.play(music.stringPlayable("D C D C D C D - ", 300), music.PlaybackMode.InBackground)
        basic.showString("HoHoHo")
    }
    basic.pause(5000)
    if (input.soundLevel() < 139) {
        benHangUp()
    }
}
function BenPickUp () {
    for (let index = 0; index < 3; index++) {
        music.setVolume(255)
        basic.pause(1000)
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 2500), music.PlaybackMode.UntilDone)
        basic.pause(200)
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 2500), music.PlaybackMode.UntilDone)
    }
    basic.pause(1000)
    music.play(music.stringPlayable("D E D - - - - - ", 1300), music.PlaybackMode.UntilDone)
    basic.pause(200)
    basic.showString("Ben?")
}
let benface = 0
let BenSound = false
input.setSoundThreshold(SoundThreshold.Loud, 140)
