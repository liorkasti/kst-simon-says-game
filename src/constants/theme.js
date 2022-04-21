import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

const BORDER_WIDTH = 50;
const SEQUENCE_BTN_SIZE = 150;

export const START_BTN = {
  justifyContent: 'center',
  alignItems: 'center',
  width: SEQUENCE_BTN_SIZE,
  height: SEQUENCE_BTN_SIZE,
  borderRadius: 100,
  backgroundColor: '#555',
}

export const BUTTON_THEME = {
  green: '#39e600',
  red: '#e63900',
  yellow: '#eded26',
  blue: '#0066ff'
};

export const SEQUENCE_BTN = {
  backgroundColor: '#00000000',
  borderColor: '#333',
  width: SEQUENCE_BTN_SIZE,
  height: SEQUENCE_BTN_SIZE,
  borderLeftWidth: BORDER_WIDTH,
  borderTopWidth: BORDER_WIDTH,
  borderTopLeftRadius: SEQUENCE_BTN_SIZE,
};

export const BOARD_THEME = {
  width: SEQUENCE_BTN_SIZE,
  height: SEQUENCE_BTN_SIZE,
};