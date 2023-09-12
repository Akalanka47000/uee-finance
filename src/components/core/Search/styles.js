import { StyleSheet } from 'react-native';
import { colors, layout } from '@/config/theme';

const styles = StyleSheet.create({
  root: {
    ...layout.rowBetween,
    gap: 8,
    backgroundColor: colors.white,
    padding: 18
  },
  input: {
    flex: 2,
    height: 48,
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    elevation: 0
  },
  inputText: {
    fontSize: 16,
    fontWeight: '500'
  },
  filters: {
    ...layout.rowCenter,
    ...layout.square(48),
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8
  },
  inputSkeleton: {
    height: 48,
    borderRadius: 8,
    flex: 1
  }
});

export default styles;
