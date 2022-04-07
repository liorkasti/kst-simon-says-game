import React, {useState, } from 'react'
import { BackHandler, I18nManager, StyleSheet, View } from 'react-native';
import SeqButton from './SeqButton';
import { BUTTON_THEME } from '../constants/theme';

const BoardStack = ({ navigation }) => {
    const [active, setActive] = useState(false); // state var to disable buttons when not playing or computer sequence is playing

    const isRtl = I18nManager.isRTL;

    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.row}>
                <SeqButton
                    btnColor={BUTTON_THEME.green}
                    direction={'0deg'}
                    active={!active}
                />
                <SeqButton
                    btnColor={BUTTON_THEME.red}
                    direction={isRtl ? '270deg' : '90deg'}
                    active={!active}
                />
            </View>
            <View style={styles.row}>
                <SeqButton
                    btnColor={BUTTON_THEME.blue}
                    direction={isRtl ? '90deg' : '270deg'}
                    active={!active}

                />
                <SeqButton
                    btnColor={BUTTON_THEME.yellow}
                    direction={'180deg'}
                    active={!active}
                />
            </View>
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