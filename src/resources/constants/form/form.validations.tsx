import { RegisterOptions } from 'react-hook-form';

interface ValidationSchema {
  [key: string]: RegisterOptions;
}

type GetValuesFunction = () => Record<string, any>;

export const AUTH_RULES = (getValues: GetValuesFunction): ValidationSchema => ({
  username: {
    required: 'auth.validations.username_required',
    minLength: {
      value: 1,
      message: 'auth.validations.username_minLength',
    },
    maxLength: {
      value: 50,
      message: 'auth.validations.username_maxLength',
    },
  },
  email: {
    required: 'auth.validations.email_required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'auth.validations.email_pattern',
    },
    maxLength: {
      value: 80,
      message: 'auth.validations.email_maxLength',
    },
  },
  password: {
    required: 'auth.validations.password_required',
    minLength: {
      value: 8,
      message: 'auth.validations.password_minLength',
    },
    maxLength: {
      value: 60,
      message: 'auth.validations.password_maxLength',
    },
  },
  confirm_password: {
    required: 'auth.validations.confirm_password_required',
    validate: value =>
      value === getValues().password ||
      'auth.validations.confirm_password_validate',
  },
  city: {
    minLength: {
      value: 3,
      message: 'auth.validations.city_minLength',
    },
    maxLength: {
      value: 80,
      message: 'auth.validations.city_maxLength',
    },
  },
  postal_code: {
    minLength: {
      value: 1,
      message: 'auth.validations.postal_code_minLength',
    },
    maxLength: {
      value: 6,
      message: 'auth.validations.postal_code_maxLength',
    },
  },
  country: {
    minLength: {
      value: 3,
      message: 'auth.validations.country_minLength',
    },
    maxLength: {
      value: 26,
      message: 'auth.validations.country_maxLength',
    },
  },
});
