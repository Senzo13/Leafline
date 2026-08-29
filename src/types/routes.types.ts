import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Account: NativeStackNavigationProp<RootStackParamList, 'Account'>;
  Home: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  Details: NativeStackNavigationProp<RootStackParamList, 'Details'>;
  LandCreation: NativeStackNavigationProp<RootStackParamList, 'LandCreation'>;
  LandMap: NativeStackNavigationProp<RootStackParamList, 'LandMap'>;
  Profile: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
  Fields: NativeStackNavigationProp<RootStackParamList, 'Fields'>;
};
