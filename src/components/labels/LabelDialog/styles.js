import { StyleSheet } from 'react-native';
import { colors, layout, margin, typography } from '@/config/theme';
import { withOpacity } from '@/utils';

const styles = StyleSheet.create({
  contentContainerStyle: {
    ...layout.columnCenter,
    ...margin.horizontal('auto'),
    width: '80%',
    backgroundColor: withOpacity(colors.black, 0.9),
    gap: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 12
  },
  text: {
    ...typography.body2,
    fontSize: 25,
    color: colors.white
  },
  inputWrapper: {
    width: '100%'
  },
  label: {
    color: colors.gray,
    marginBottom: 5
  },
  input: {
    width: '100%',
    color: colors.white
  },
  confirmBtn: {
    root: {
      width: '100%'
    }
  }
});

export default styles;
