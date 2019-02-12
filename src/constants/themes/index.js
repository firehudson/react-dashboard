import primaryTheme from './primary';

export const THEME_TYPES = {
  primary: primaryTheme,
};

const getTheme = (type = 'primary') => {
  if (THEME_TYPES[type]) {
    return THEME_TYPES[type];
  }

  throw new Error(`SPECIFIED UNSUPPORTED THEME: '${type}'`);
};

export default getTheme;
