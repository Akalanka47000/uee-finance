import { configureFonts } from 'react-native-paper';

export const typography = {
  regular: {
    fontWeight: 400
  },
  title0: {
    fontWeight: 600,
    fontSize: 34.467
  },
  title1: {
    fontWeight: 600,
    fontSize: 28
  },
  title2: {
    fontWeight: 500,
    fontSize: 22
  },
  bodyValue: {
    fontWeight: 600,
    fontSize: 20
  },
  body0: {
    fontWeight: 600,
    fontSize: 18
  },
  body1: {
    fontWeight: 600,
    fontSize: 16
  },
  body2: {
    fontWeight: 500,
    fontSize: 16
  },
  body3: {
    fontWeight: 500,
    fontSize: 14
  },
  body4: {
    fontWeight: 500,
    fontSize: 12
  },
  body5: {
    fontWeight: 600,
    fontSize: 14
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: 18
  }
};

const fontBody = {
  regular: typography.regular
};

const fontConfig = {
  web: fontBody,
  ios: fontBody,
  android: fontBody
};

const fonts = configureFonts({ config: fontConfig, isV3: false });

export default fonts;
