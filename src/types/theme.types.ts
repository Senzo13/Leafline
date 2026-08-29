import { TextStyle } from 'react-native';

interface FontType {
  primary: string;
}

interface TextVariantsType {
  title: TextStyle;
  titleLight: TextStyle;
  subTitle: TextStyle;
  subTitleRegular: TextStyle;
  text: TextStyle;
  textBold: TextStyle;
  textUpper: TextStyle;
  textMedium: TextStyle;
  textMediumUpper: TextStyle;
  textMediumUpperMedium: TextStyle;
  textMediumUpperBig: TextStyle;
  textSmall: TextStyle;
  textSmallUpper: TextStyle;
  textSmallBold: TextStyle;
  textSmallItalic: TextStyle;
}

interface ColorsType {
  primary: string;
  primary50: string;
  secondary: string;
  secondary50: string;
  tertiary: string;
  tertiary50: string;
  text: string;
  text50: string;
  gray: string;
  google: string;
  yellow: string;
  error: string;
  success: string;
  errorBorder: string;
  successBorder: string;
}

interface ThemeType {
  colors: ColorsType;
  texts: TextVariantsType;
  font: FontType;
}

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

export { ColorsType, FontType, TextVariantsType, ThemeContextType, ThemeType };
