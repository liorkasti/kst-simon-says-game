import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, setScore, setPrompt, userMaxScore } from '../redux/actions';
import PlayButton from './PlayButton';
import SeqButton from './SeqButton';
import { BUTTON_THEME } from '../constants/theme';
import { BOARS_SOUNDS } from '../constants/sounds';
import GameOver from './GameOver';

const GameDashoard = ({ navigation }) => {
    const [activePlay, setActivePlay] = useState(true);
    const [activeSeq, setActiveSeq] = useState(false);
    const [level, setLevel] = useState(0);
    const [simonSequence, setSimonSequence] = useState([]);
    const [userSequence, setUserSequence] = useState([]);

    const greenRef = useRef();
    const redRef = useRef();
    const blueRef = useRef();
    const yellowRef = useRef();
    const modalRef = useRef();

    const { score, boardPrompt } = useSelector(state => state.reducers);
    const dispatch = useDispatch();

    const isRtl = I18nManager.isRTL;

    //Initate game on first load
    useEffect(() => {
        setSimonSequence([]);
        dispatch(setScore(0));

        return () => {
            setSimonSequence([]);
            dispatch(setScore(0));
        }
    }, []);

    //Initate game on 'Simon Says'
    useEffect(() => {
        animateSequence();
    }, [simonSequence]);

    //Initate game on sequence button press
    useEffect(() => {
        if (userSequence?.length !== 0) {
            verifySequence();
        }
        console.log('simonSays: ', simonSequence)
        console.log('userSequence: ', userSequence)
        console.log('score: ', score)
    }, [userSequence]);

    const playButtonHandler = () => {
        //TODO: Add useCountdown hook
        setActivePlay(false);
        setLevel(0);
        dispatch(setScore(0));
        dispatch(userMaxScore(score));
        dispatch(setPrompt(`score: 0`));
        setSimonSequence([randomPick()]);
        setUserSequence([]);
        setActiveSeq(true);
    };


    /*     //TODO: useTimerID ref
        const timerId = useRef();
        const [seconds, setSeconds] = useState(0);
    
            setActiveSeq(false)
            timerId.current = setInterval(() => {
                setSeconds(prev => prev + 1); 
                ...
                */

    const animateSequence = () => {
        setActiveSeq(false)
        let seq = 0;
        let interval = setInterval(() => {
            switch (simonSequence[seq]) {
                case 0:
                    greenRef?.current.pressEffect();
                    break;
                case 1:
                    redRef?.current.pressEffect();
                    break;
                case 2:
                    blueRef?.current.pressEffect();
                    break;
                case 3:
                    yellowRef?.current.pressEffect();
                    break;
            }

            if (++seq === simonSequence.length) {
                clearInterval(interval);
            }
            if (seq === simonSequence.length) {
                setActiveSeq(true);
            }
        }, 1000);
    }

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
        dispatch(setScore(score + 1));
        dispatch(setPrompt(`score: ${score + 1}`));
        setUserSequence([]);
        setLevel(0);
        generateNewSequenced();
    };

    const gameOver = () => {
        console.log('game over! ');
        dispatch(userMaxScore(score));
        setUserSequence([]);
        setLevel(0);
        dispatch(setPrompt(`Play`));
        setSimonSequence([]);
        setActiveSeq(false)
        setActivePlay(true)
        handleOpenModal();
    };

    const randomPick = () => {
        return Math.floor(Math.random() * 4);
    };

    const generateNewSequenced = () => {
        setSimonSequence([...simonSequence, randomPick()]);
    }

    const onUserSequence = seq => {
        setUserSequence([...userSequence, seq]);
    }
    const handleOpenModal = () => {
        modalRef.current.openModal();
    }

    return (
        <View style={styles.mainContainer}>
            <GameOver ref={modalRef} level={level} navigation={navigation} />
            <PlayButton
                active={activePlay}
                onPress={() => playButtonHandler()}
                sound={BOARS_SOUNDS}
                prompt={boardPrompt}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.row}>
                    <SeqButton
                        btnColor={BUTTON_THEME.green}
                        direction={'0deg'}
                        active={activeSeq}
                        sound={BOARS_SOUNDS[0]}
                        onPress={() => onUserSequence(0)}
                        ref={greenRef}
                    />
                    <SeqButton
                        btnColor={BUTTON_THEME.red}
                        direction={isRtl ? '270deg' : '90deg'}
                        active={activeSeq}
                        sound={BOARS_SOUNDS[1]}
                        onPress={() => onUserSequence(1)}
                        ref={redRef}
                    />
                </View>
                <View style={styles.row}>
                    <SeqButton
                        btnColor={BUTTON_THEME.blue}
                        direction={isRtl ? '90deg' : '270deg'}
                        active={activeSeq}
                        sound={BOARS_SOUNDS[2]}
                        onPress={() => onUserSequence(2)}
                        ref={blueRef}
                    />
                    <SeqButton
                        btnColor={BUTTON_THEME.yellow}
                        direction={'180deg'}
                        active={activeSeq}
                        sound={BOARS_SOUNDS[3]}
                        onPress={() => onUserSequence(3)}
                        ref={yellowRef}
                    />
                </View>
            </View>
        </View>
    )
};

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

export default GameDashoard