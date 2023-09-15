import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Modal, Text } from 'react-native-paper';
import { colors } from '@/config/theme';
import defaultStyles from './styles';

const Loader = ({ styles = {} }) => {
  const [options, setOptions] = useState({
    visible: false,
    text: 'Loading'
  });

  const show = (text) => {
    setOptions({
      visible: true,
      text: text ?? 'Loading'
    });
  };

  const hide = () => setOptions({ ...options, visible: false });

  if (!global.loader?.show) {
    global.loader = {
      show,
      hide
    };
  }

  return (
    <Modal
      visible={options.visible}
      onDismiss={hide}
      contentContainerStyle={[defaultStyles.contentContainerStyle, styles.contentContainerStyle]}>
      <ActivityIndicator animating={true} color={colors.success} size={48} />
      {options.text && <Text style={[defaultStyles.text, styles.text]}>{options.text}</Text>}
    </Modal>
  );
};

export default Loader;
