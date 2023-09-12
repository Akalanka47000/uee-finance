import { StyleSheet } from 'react-native';
import { colors, layout, margin, typography } from '@/config/theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    ...layout.columnCenter,
    ...margin.horizontal('auto'),
    width: '85%',
    backgroundColor: colors.primary,
    gap: 24,
    padding: 24,
    borderRadius: 16
  },
  title: {
    ...typography.body0
  },
  content: {
    ...typography.body2,
    color: colors.gray
  },
  actionWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12
  },
  action: {
    root: {
      flex: 1
    },
    labelStyle: {
      ...typography.body1
    }
  }
});

export default styles;
