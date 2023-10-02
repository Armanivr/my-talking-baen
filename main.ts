input.onGesture(Gesture.Shake, function () {
	
})
for (let index = 0; index < 4; index++) {
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
basic.forever(function () {
	
})
