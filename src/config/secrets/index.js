import Config from 'react-native-config';

export default {
  test_mode: Config.APP_ENV === 'test',
  app_env: Config.APP_ENV ?? 'dev',
  backend_url: Config.BACKEND_URL ?? 'http://localhost:3002',
  stripe_payment_link: Config.STRIPE_PAYMENT_LINK
};
