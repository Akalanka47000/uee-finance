import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight, View } from 'react-native';
import { Text } from 'react-native-paper';
import { layout, typography } from '@/config/theme';
import { ArrowLeft, Menu } from '@/icons';
import { default as isEqual } from 'lodash/isEqual';
import defaultStyles from './styles';

const AppBar = ({ title, back = true, onBackPress, leading, menu = true, actions = [], styles = {} }) => {
  const navigation = useNavigation();

  const backPressHandler = () => {
    if (typeof onBackPress === 'function') {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[defaultStyles.root, styles.root]}>
      <View style={[defaultStyles.container, leading || back ? layout.rowBetween : layout.rowEnd, styles.container]}>
        {
          (leading ??= back && (
            <TouchableHighlight style={[defaultStyles.icon, styles.icon]} onPress={backPressHandler}>
              <ArrowLeft />
            </TouchableHighlight>
          ))
        }
        <View style={[defaultStyles.title, !leading && layout.rowStart, styles.title]}>
          <Text style={[defaultStyles.titleText, leading && typography.body2, styles.titleText]}>{title}</Text>
        </View>
        {menu || actions.length ? (
          <View style={[defaultStyles.actions, styles.actions]}>
            {actions.map((a, key) => (
              <TouchableHighlight key={key} onPress={a.onPress} style={[defaultStyles.icon, a.style]}>
                {a.children()}
              </TouchableHighlight>
            ))}
            {menu && (
              <TouchableHighlight onPress={() => {}} style={[defaultStyles.icon, styles.icon]}>
                <Menu />
              </TouchableHighlight>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default memo(AppBar, (prevProps, currentProps) => isEqual(prevProps, currentProps));
