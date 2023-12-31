import { StyleSheet } from 'react-native';
import { colors, layout, margin, typography } from '@/config/theme';
import { withOpacity } from '@/utils';

const styles = StyleSheet.create({
  contentContainerStyle: {
    ...layout.columnCenter,
    ...margin.horizontal('auto'),
    width: '85%',
    backgroundColor: withOpacity(colors.black, 0.9),
    gap: 24,
    padding: 24,
    borderRadius: 16
  },
  title: {
    ...typography.body0,
    color: colors.white,
    fontSize: 25
  },
  content: {
    ...typography.body2,
    color: colors.gray,
    textAlign: 'center'
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
