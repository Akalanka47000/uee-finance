import { StyleSheet } from 'react-native';
import { colors, layout, margin, padding, typography } from '@/config/theme';
import { screenWidth, withOpacity } from '@/utils';

const summaryLabel = {
  borderRadius: 100,
  ...layout.columnCenter,
  ...padding.symmetric(9, 28),
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
    height: 125
  },
  categoryButton: {
    ...margin.symmetric(0, 7)
  },
  month: {
    ...typography.body0,
    color: colors.white,
    fontSize: 25,
    marginBottom: 22
  },
  expenseCardList: {
    flexGrow: 1,
    width: '100%'
  },
  expenseCardColumns: {
    columnGap: 20
  },
  expenseCardContent: {
    gap: 20,
    paddingHorizontal: 25,
    paddingVertical: 5
  },
  expenseCard: (day) => ({
    ...padding.symmetric(8, 8),
    ...layout.columnCenter,
    gap: 3,
    backgroundColor: day > new Date().getDate() ? withOpacity(colors.gray, 0.6) : colors.white,
    aspectRatio: 1,
    width: (screenWidth - (50 + 40)) / 3,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: withOpacity(colors.success, 0.5)
  }),
  expenseCardDate: {
    ...typography.body2,
    color: withOpacity(colors.black, 0.5)
  },
  expenseCardDivider: {
    backgroundColor: colors.success,
    width: '100%'
  },
  expenseCardAmount: {
    ...typography.body0,
    color: colors.black,
    fontSize: 20
  },
  summary: {
    ...margin.vertical(20),
    ...layout.rowBetween,
    width: '100%',
    gap: 15,
    paddingHorizontal: 25
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
