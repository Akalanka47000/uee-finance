import { StyleSheet } from 'react-native';
import { colors, layout, margin, typography } from '@/config/theme';

const styles = StyleSheet.create({
  contentContainerStyle: {
    ...layout.columnCenter,
    ...margin.horizontal('auto'),
    width: 180,
    height: 180,
    backgroundColor: colors.black,
    gap: 24,
    padding: 24,
    borderRadius: 20
  },
  text: {
    ...typography.body2,
    color: colors.white
  }
});

export default styles;
