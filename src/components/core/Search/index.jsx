import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Skeleton } from '@/components';
import { colors } from '@/config/theme';
import { Search as SearchIcon } from '@/icons';
import defaultStyles from './styles';

const Search = ({
  placeholder,
  placeholderTextColor,
  iconColor,
  underlayColor,
  onChangeText,
  styles = {},
  skeleton = false,
  ...props
}) => {
  return (
    <View style={[defaultStyles.root, styles.root]}>
      {skeleton ? (
        <Skeleton style={defaultStyles.inputSkeleton} />
      ) : (
        <Searchbar
          placeholder={placeholder ?? 'Search'}
          onChangeText={onChangeText}
          icon={SearchIcon}
          iconColor={iconColor ?? colors.fog}
          placeholderTextColor={placeholderTextColor ?? colors.fog}
          style={[defaultStyles.input, styles.input]}
          inputStyle={[defaultStyles.inputText, styles.inputText]}
          {...props}
        />
      )}
    </View>
  );
};

export default Search;
