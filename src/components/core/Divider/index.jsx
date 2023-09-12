import { Divider as D, Text } from 'react-native-paper';
import defaultStyles from './styles';

const Divider = ({ dashed = false, my = 0, mx = 0, color, style = {} }) => {
  const utilities = { color, marginVertical: my, marginHorizontal: mx };
  if (!dashed) return <D style={[defaultStyles.root, style, utilities]} />;
  return (
    <Text ellipsizeMode="clip" numberOfLines={1} style={[defaultStyles.root, style, utilities]}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - -
    </Text>
  );
};

export default Divider;
