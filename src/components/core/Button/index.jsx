import { memo, useMemo } from 'react';
import { Button } from 'react-native-paper';
import { Skeleton } from '@/components';
import { colors } from '@/config/theme';
import { withOpacity } from '@/utils';
import { default as isEqual } from 'lodash/isEqual';
import defaultStyles from './styles';

const Btn = ({
  variant = 'primary',
  children,
  buttonColor,
  textColor,
  styles = {},
  disabled = false,
  skeleton = false,
  ...props
}) => {
  const mode = useMemo(() => {
    switch (variant) {
      case 'primary':
        return;
      case 'secondary':
        return 'outlined';
      default:
        return 'text';
    }
  }, [variant]);

  buttonColor ??= variant === 'primary' ? colors.white : colors.transparent;
  textColor ??= variant === 'primary' ? (disabled ? withOpacity(colors.black, 0.5) : colors.black) : colors.white;

  return skeleton ? (
    <Skeleton style={defaultStyles.skeleton} />
  ) : (
    <Button
      mode={mode}
      buttonColor={buttonColor}
      textColor={textColor}
      uppercase={false}
      style={[defaultStyles[variant].root, styles.root]}
      contentStyle={[defaultStyles[variant].contentStyle, defaultStyles.disabled(disabled), styles.contentStyle]}
      labelStyle={[defaultStyles[variant].labelStyle, styles.labelStyle]}
      pointerEvents={disabled ? 'none' : 'auto'}
      disabled={false}
      {...props}>
      {children}
    </Button>
  );
};

export default memo(Btn, (prevProps, currentProps) => isEqual(prevProps, currentProps));
