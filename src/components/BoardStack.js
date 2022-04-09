import React, { useState } from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import PlayButton from '../components/PlayButton';
import SeqButton from './SeqButton';
import { BUTTON_THEME } from '../constants/theme';
import { BOARS_SOUNDS } from '../constants/sounds';

const BoardStack = ({ navigation }) => {
    const [active, setActive] = useState(false);

    const isRtl = I18nManager.isRTL;

    const playButtonPressed = () => {
        console.log('active :>> ', active);
        animatPlay();
        setTimeout(() => setActive(true), 2000);
    };

    const animatPlay = () => {
        seqAnimation(0);
        setTimeout(() => { seqAnimation(1) }, 100);
        setTimeout(() => { seqAnimation(2) }, 200);
        setTimeout(() => { seqAnimation(3) }, 300);
    }

    const seqAnimation = (s) => {
        BOARS_SOUNDS[s].play();
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
                    />
                    <SeqButton
                        btnColor={BUTTON_THEME.red}
                        direction={isRtl ? '270deg' : '90deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[1]}
                    />
                </View>
                <View style={styles.row}>
                    <SeqButton
                        btnColor={BUTTON_THEME.blue}
                        direction={isRtl ? '90deg' : '270deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[2]}
                    />
                    <SeqButton
                        btnColor={BUTTON_THEME.yellow}
                        direction={'180deg'}
                        active={!active}
                        sound={BOARS_SOUNDS[3]}
                    />
                </View>

            </View>
            <PlayButton
                active={active}
                onPress={() => playButtonPressed()}
                sound={BOARS_SOUNDS}
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