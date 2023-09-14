import { StyleSheet } from 'react-native';
import { colors, layout, margin, padding, typography } from '@/config/theme';

const summaryLabel = {
  borderRadius: 100,
  ...layout.columnCenter,
  ...padding.symmetric(9, 32),
  color: colors.white,
  backgroundColor: colors.white,
  gap: 0
};

const styles = StyleSheet.create({
  root: {
    ...layout.columnStart,
    ...layout.expand
  },
  categorySlider: {
    ...margin.vertical(24)
  },
  categoryButton: {
    ...margin.symmetric(0, 7)
  },
  expenseCards: {
    flex: 1
  },
  summary: {
    ...margin.vertical(32),
    ...layout.rowAround,
    gap: 24
  },
  summaryLabel,
  summaryStartLabel: {
    ...summaryLabel,
    backgroundColor: colors.success
  },
  summaryText: {
    ...typography.body5,
    fontSize: 11
  },
  summaryTextValue: {
    ...typography.body1,
    fontSize: 16
  }
});

export default styles;
