import { StyleSheet } from 'react-native';
import { colors, layout, padding, typography } from '@/config/theme';

const styles = StyleSheet.create({
  root: {
    ...layout.columnCenter,
    ...layout.expand,
    gap: 24
  },
  title: {
    ...typography.body0,
    color: colors.white,
    fontSize: 30
  },
  plan: (plan) => ({
    ...typography.body0,
    color: plan === 'FREE' ? colors.green : colors.success,
    fontSize: 40
  }),
  upgradeBtn: {
    root: {
      borderRadius: 100
    },
    labelStyle: {
      fontSize: 20
    },
    contentStyle: {
      maxHeight: 120,
      borderRadius: 100,
      ...padding.symmetric(12, 42)
    }
  }
});

export default styles;
