var Sound = require('react-native-sound');

Sound.setCategory('Playback');

const sound1 = new Sound("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", Sound.MAIN_BUNDLE);
const sound2 = new Sound("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", Sound.MAIN_BUNDLE);
const sound3 = new Sound("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", Sound.MAIN_BUNDLE);
const sound4 = new Sound("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3", Sound.MAIN_BUNDLE);

export const BOARS_SOUNDS = [sound1, sound2, sound3, sound4];