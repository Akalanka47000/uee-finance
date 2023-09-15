import { StyleSheet } from 'react-native';
import { colors, layout, padding, typography } from '@/config/theme';

const styles = StyleSheet.create({
  root: {
    ...layout.columnStart,
    ...layout.expand,
    position: 'relative'
  },
  header: {
    ...layout.columnCenter,
    gap: 12,
    marginTop: 25
  },
  expenses: {
    ...typography.body0,
    color: colors.white,
    fontSize: 20
  },
  expenseTotal: {
    ...typography.body0,
    color: colors.success,
    fontSize: 30
  },
  budgets: {
    flexGrow: 1,
    width: '100%'
  },
  budgetContent: {
    gap: 20,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  budget: {
    ...padding.symmetric(12, 12),
    ...layout.column,
    gap: 3,
    backgroundColor: colors.black,
    width: '100%',
    borderRadius: 8,
    borderWidth: 3
  },
  budgetText: {
    ...typography.body0,
    color: colors.white,
    fontSize: 20
  },
  addBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 12,
    backgroundColor: colors.white,
    borderRadius: 200
  }
});

export default styles;
