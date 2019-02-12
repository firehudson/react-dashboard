import { compose } from 'redux';

const getEnhancers = (DEV) => {
  let enhancer = compose; // eslint-disable-line prefer-const

  if (DEV) {
    // configure dev enhancer
  }

  return enhancer;
};

const enhancer = getEnhancers(process.env.NODE_ENV === 'development');

export default enhancer;
