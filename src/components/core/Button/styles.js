import { StyleSheet } from 'react-native';
import { colors, layout, margin, padding, typography } from '@/config/theme';

const contentStyle = {
  gap: 12,
  maxHeight: 56,
  borderWidth: 2,
  borderRadius: 4,
  ...layout.rowCenter,
  ...padding.symmetric(14, 28),
  borderColor: colors.white
};

const labelStyle = {
  ...typography.body1,
  ...margin.symmetric(0, 0)
};

const styles = StyleSheet.create({
  primary: {
    contentStyle,
    labelStyle
  },
  secondary: {
    contentStyle,
    labelStyle
  },
  skeleton: {
    borderRadius: 4,
    height: 54,
    width: '100%'
  },
  disabled: (disabled) => ({
    backgroundColor: disabled ? colors.gray : undefined,
    borderColor: disabled ? colors.gray : colors.white
  })
});

export default styles;
