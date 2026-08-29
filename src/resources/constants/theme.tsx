// @ts-nocheck
import {
  ColorsType,
  FontType,
  TextVariantsType,
  ThemeType,
} from '@types/theme.types';

const font: FontType = {
  primary: 'Poppins',
};

const texts: TextVariantsType = {
  title: {
    fontSize: 26,
    fontFamily: `${font.primary}-ExtraBold`,
  },
  titleLight: {
    fontSize: 26,
    fontFamily: `${font.primary}-Light`,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: `${font.primary}-Bold`,
    margin: 0,
    padding: 0,
  },
  subTitleRegular: {
    fontSize: 20,
    fontFamily: `${font.primary}-Regular`,
  },
  text: {
    fontSize: 18,
    fontFamily: `${font.primary}-Regular`,
  },
  textBold: {
    fontSize: 18,
    fontFamily: `${font.primary}-Bold`,
  },
  textUpper: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: `${font.primary}-Medium`,
  },
  textSmallBold: {
    fontSize: 14,
    fontFamily: `${font.primary}-ExtraBold`,
  },
  textMedium: {
    fontSize: 14,
    fontFamily: `${font.primary}-Medium`,
  },
  textMediumUpper: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontFamily: `${font.primary}-Medium`,
  },
  textMediumUpperBig: {
    fontSize: 23,
    textTransform: 'uppercase',
    fontFamily: `${font.primary}-Medium`,
  },
  textMediumUpperMedium: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: `${font.primary}-Medium`,
  },
  textSmall: {
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: `${font.primary}-Regular`,
  },
  textSmallUpper: {
    fontSize: 12,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    fontFamily: `${font.primary}-Regular`,
  },
  textSmallItalic: {
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: `${font.primary}-Regular`,
  },
};

const darkColors: ColorsType = {
  primary: '#1A2826',
  primary50: 'rgba(26, 40, 38, 0.5);',
  secondary: '#50B26C',
  secondary50: 'rgba(80, 78, 108, 0.5);',
  tertiary: '#2E4945',
  tertiary50: 'rgba(46, 73, 69, 0.50);',
  text: '#FFEED8',
  text50: 'rgba(255, 238, 216, 0.2)',
  gray: '#D1D1C1',
  google: '#4285F4',
  yellow: '#EDB65D',
  errorBorder: '#ff8600',
  successBorder: '#50B26C',
  error: '#713500',
  success: '#50B26C',
};

const lightColors: ColorsType = {
  primary: '#E6F2F1',
  secondary: '#A7D8AF',
  tertiary: '#AFC1BF',
  tertiary50: 'rgba(175, 193, 191, 0.5)',
  text: 'black',
  gray: 'black',
  google: '#A0C3FF',
  yellow: '#FFE9B5',
  errorBorder: '#FFA775',
  successBorder: '#A7D8AF',
  error: '#FF6D00',
  success: '#A7D8AF',
};

export const DarkTheme: ThemeType = {
  colors: darkColors,
  texts: texts,
  font: font,
};

export const LightTheme: ThemeType = {
  colors: lightColors,
  texts: texts,
  font: font,
};
