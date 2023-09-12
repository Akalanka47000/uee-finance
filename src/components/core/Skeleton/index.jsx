import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import styles from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const Skeleton = ({ children, ...props }) => {
  return (
    <ShimmerPlaceHolder shimmerColors={styles.shimmerColors} {...props}>
      {children}
    </ShimmerPlaceHolder>
  );
};

export default Skeleton;
