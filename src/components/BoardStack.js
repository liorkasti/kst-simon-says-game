import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import store from '../redux/store';
import {
    riseLevel
    , initLife
    , initScore
    , decrementLife
    , updateScore
    , boardPrompt
    , userMaxScore
} from '../redux/actions';
import PlayButton from '../components/PlayButton';
import SeqButton from './SeqButton';
import { BUTTON_THEME } from '../constants/theme';
import { BOARS_SOUNDS } from '../constants/sounds';

const BoardStack = ({ navigation }) => {
    const [active, setActive] = useState(false);
    const [simonSequence, setSimonSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [level, setLevel] = useState(0);

    const isRtl = I18nManager.isRTL;

    const state = useSelector((state) => state);
    const { boardPrompt, score } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        setSimonSequence([randomPick()]);
        console.log('simonSequence: ', simonSequence);
        return () => {
            setSimonSequence([]);
            console.log('simonSequence: ', simonSequence);
        }
    }, []);

    useEffect(() => {
        if (userSequence.length !== 0) {
            verifySequence();
        }
        console.log('simonSequence: ', simonSequence)
        console.log('userSequence: ', userSequence)
    }, [userSequence]);

    const verifySequence = () => {
        if (simonSequence.length !== userSequence.length) {
            if (simonSequence[level] === userSequence[level]) {
                setLevel(level + 1);
            } else {
                gameOver();
            }
        } else {
            if (simonSequence.length !== 0) {
                if (simonSequence[simonSequence.length - 1] === userSequence[userSequence.length - 1]) {
                    levelUp();
                } else {
                    gameOver();
                }
            }
        }
    };

    const levelUp = () => {
        dispatch(updateScore(score + 1));
        setUserSequence([]);
        setLevel(0);
        generateNewSequenced();
    }

    const gameOver = () => {
        setUserSequence([]);
        setLevel(0);
        setSimonSequence([randomPick()]);
        setActive(false)
    };

    const playButtonPressed = () => {
        console.log('active :>> ', active);
        // animatPlay();
        console.log('simonSays: ', simonSequence)
        setTimeout(() => setActive(true), 2000);
    };

    const animatPlay = () => {
        soundEffect(0);
        setTimeout(() => { soundEffect(1) }, 100);
        setTimeout(() => { soundEffect(2) }, 200);
        setTimeout(() => { soundEffect(3) }, 300);
    }

    const soundEffect = (s) => {
        BOARS_SOUNDS[s].play();
    }

    const randomPick = () => {
        return Math.floor(Math.random() * 4);
    };

    const generateNewSequenced = () => {
        setSimonSequence([...simonSequence, randomPick()]);
    }

    const onUserSequence = val => {
        setUserSequence([...userSequence, val]);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonsContainer}>

                <View style={styles.row}>
                    <SeqButton
                        btnColor={BUTTON_THEME.green}
                        direction={'0deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[0]}
                        onPress={() => onUserSequence(0)}
                    />
                    <SeqButton
                        btnColor={BUTTON_THEME.red}
                        direction={isRtl ? '270deg' : '90deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[1]}
                        onPress={() => onUserSequence(1)}
                    />
                </View>
                <View style={styles.row}>
                    <SeqButton
                        btnColor={BUTTON_THEME.blue}
                        direction={isRtl ? '90deg' : '270deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[2]}
                        onPress={() => onUserSequence(2)}
                    />
                    <SeqButton
                        btnColor={BUTTON_THEME.yellow}
                        direction={'180deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[3]}
                        onPress={() => onUserSequence(3)}
                    />
                </View>

            </View>
            <PlayButton
                active={active}
                onPress={() => playButtonPressed()}
                sound={BOARS_SOUNDS}
                boardPrompt={boardPrompt}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        height: 325,
        marginTop: 25,
        justifyContent: 'space-around',
        position: 'absolute',
    },
    row: {
        flex: 1,
        width: 325,
        marginTop: 25 / 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default BoardStack