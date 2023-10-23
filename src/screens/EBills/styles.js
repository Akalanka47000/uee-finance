import { StyleSheet } from 'react-native';
import { colors, layout, padding, typography } from '@/config/theme';

const styles = StyleSheet.create({
  header: {
    ...layout.columnCenter,
    gap: 12,
    marginTop: 25
  },
  total: {
    ...typography.body0,
    color: colors.white,
    fontSize: 20
  },
  totalValue: {
    ...typography.body0,
    color: colors.success,
    fontSize: 30
  },
  smsList: {
    flexGrow: 1,
    width: '100%'
  },
  smsListContent: {
    gap: 20,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  sms: {
    ...padding.symmetric(12, 12),
    ...layout.column,
    gap: 3,
    backgroundColor: colors.black,
    width: '100%',
    borderRadius: 8,
    borderWidth: 3
  },
  smsText: {
    ...typography.body0,
    color: colors.white,
    fontSize: 20
  }
});

export default styles;
