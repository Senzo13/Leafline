import { FormData } from '@types/forms.types';

export const AUTH_INPUTS: {
    key: keyof FormData;
    label: string;
    secureTextEntry?: boolean;
    authType: 'login' | 'register';
    isRequired?: boolean;
  }[] = [
    {
      key: 'username',
      label: 'auth.general.username',
      secureTextEntry: false,
      authType: 'login',
      isRequired: true,
    },
    {
      key: 'email',
      label: 'auth.general.email',
      secureTextEntry: false,
      authType: 'login',
      isRequired: true,
    },
    {
      key: 'password',
      label: 'auth.general.password',
      secureTextEntry: true,
      authType: 'login',
      isRequired: true,
    },
    {
      key: 'confirm_password',
      label: 'auth.general.confirm_password',
      secureTextEntry: true,
      authType: 'register',
      isRequired: true,
    },
    {
      key: 'city',
      label: 'auth.general.city',
      secureTextEntry: false,
      authType: 'register',
    },
    {
      key: 'postal_code',
      label: 'auth.general.postal_code',
      secureTextEntry: false,
      authType: 'register',
    },
    {
      key: 'country',
      label: 'auth.general.country',
      secureTextEntry: false,
      authType: 'register',
    },
  ];