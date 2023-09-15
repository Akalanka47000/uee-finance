import { StyleSheet } from 'react-native';
import { colors, layout, padding, typography } from '@/config/theme';

const styles = StyleSheet.create({
  root: {
    ...padding.symmetric(6, 20),
    height: 60,
    backgroundColor: colors.primary
  },
  container: {
    ...layout.expand,
    position: 'relative',
    zIndex: 1
  },
  icon: {
    ...layout.rowCenter,
    ...layout.square(36),
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 100
  },
  title: {
    ...layout.expand,
    ...layout.rowCenter,
    color: colors.white,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: -1
  },
  titleText: {
    ...typography.body0,
    color: colors.white
  },
  actions: {
    ...layout.rowCenter,
    gap: 8
  }
});

export default styles;
