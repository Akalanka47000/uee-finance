import { colors, padding, typography } from '@/config/theme';
import { withOpacity } from '@/utils';

const styles = {
  drawer: {
    drawerItemStyle: {
      ...padding.symmetric(16, 18),
      backgroundColor: colors.transparent,
      borderBottomWidth: 1,
      borderBottomColor: withOpacity(colors.white, 0.1),
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10
    },
    drawerLabelStyle: {
      color: colors.white,
      ...typography.body0
    },
    drawerContentStyle: {
      backgroundColor: colors.black
    },
    drawerType: 'slide'
  }
};

export default styles;
