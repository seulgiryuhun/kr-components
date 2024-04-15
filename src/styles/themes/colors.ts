export type KeyType<T extends object> = keyof T;

export const colors = {
  white: '#FFFFFF',
  black: '#000000',

  // gray
  gray10: '#F7F7F7',
  gray50: '#F2F2F2',
  gray100: '#F0F0F0',
  gray200: '#E6E6E6',
  gray300: '#D6D6D6',
  gray400: '#C2C2C2',
  gray500: '#A3A3A3',
  gray600: '#858585',
  gray700: '#5C5C5C',
  gray800: '#333333',
  gray900: '#141414',

  // bluishGray
  bluishGray10: '#F5F7F9',
  bluishGray50: '#F2F4F7',
  bluishGray100: '#ECEFF4',
  bluishGray200: '#DFE3EC',
  bluishGray300: '#CCD3E0',
  bluishGray400: '#B2BDD1',
  bluishGray500: '#8C9CBA',
  bluishGray600: '#667BA3',
  bluishGray700: '#455573',
  bluishGray800: '#262F40',
  bluishGray900: '#0F1319',

  // green
  green10: '#F2FdF5',
  green50: '#E9FbEf',
  green100: '#D3F8DE',
  green200: '#B0F2C4',
  green300: '#84EBAA',
  green400: '#56DC90',
  green500: '#10C677',
  green600: '#00A86B',
  green700: '#008059',
  peach10: '#FFF1F0',
  peach50: '#FFECEB',
  peach100: '#FFE2E0',
  peach200: '#FFCFCC',
  peach300: '#FFB3AD',
  peach400: '#FF8D85',
  peach500: '#FF5447',
  peach600: '#FD1808',

  // blue
  blue10: '#F2F5FD',
  blue50: '#EDF1FC',
  blue100: '#E4EBFB',
  blue200: '#D2DDF9',
  blue400: '#94ADF0',
  blue500: '#5E85E8',
  blue600: '#295CE0',
};
export type Colors = typeof colors;
export type ColorType = KeyType<Colors>;
export type ColorValueType = Colors[ColorType];
