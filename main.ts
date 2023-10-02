input.onSound(DetectedSound.Loud, function () {
    benface = randint(1, 4)
    BenTalk()
})
function BenTalk () {
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
        music.play(music.stringPlayable("D C D C D C D - ", 350), music.PlaybackMode.InBackground)
        basic.showString("HoHoHo")
    }
}
let benface = 0
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
