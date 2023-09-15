import { StyleSheet } from 'react-native';
import { colors, layout } from '@/config/theme';

const styles = StyleSheet.create({
  root: {
    ...layout.columnStart,
    ...layout.expand
  },
  camera: {
    ...layout.expand,
    backgroundColor: colors.black
  }
});

export default styles;
