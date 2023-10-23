import { StyleSheet } from 'react-native';
import { colors, layout, padding, typography } from '@/config/theme';

const styles = StyleSheet.create({
  labels: {
    flexGrow: 1,
    width: '100%'
  },
  labelContent: {
    gap: 20,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  label: {
    ...padding.symmetric(12, 12),
    ...layout.column,
    gap: 3,
    backgroundColor: colors.black,
    width: '100%',
    borderRadius: 8,
    borderWidth: 3
  },
  labelText: {
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
