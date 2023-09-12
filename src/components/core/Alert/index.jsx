import { useState } from 'react';
import { View } from 'react-native';
import { Modal, Text } from 'react-native-paper';
import { Button } from '..';
import defaultStyles from './styles';

const Alert = ({ styles = {} }) => {
  const [options, setOptions] = useState({
    visible: false,
    title: 'Alert',
    content: '',
    action: {
      enabled: true,
      text: 'Ok',
      onPress: () => {}
    },
    action2: {
      enabled: false,
      text: 'No',
      onPress: () => {}
    }
  });

  const show = (content, opts = {}) => {
    setOptions({
      ...options,
      ...opts,
      action: {
        ...options.action,
        ...opts.action
      },
      action2: {
        ...options.action2,
        ...opts.action2
      },
      visible: true,
      content
    });
  };

  const handleOnDismiss = () => setOptions({ ...options, visible: false });

  const handleAction = () => {
    if (options.action.onPress && typeof options.action.onPress === 'function') {
      options.action.onPress();
    }
    handleOnDismiss();
  };

  const handleAction2 = () => {
    if (options.action2.onPress && typeof options.action2.onPress === 'function') {
      options.action2.onPress();
    }
    handleOnDismiss();
  };

  if (!global.alert.show) {
    global.alert = {
      show,
      close: handleOnDismiss,
      info: (content, options = {}) => show(content, { title: 'Info', ...options }),
      error: (content, options = {}) => show(content, { title: 'Oops', action: { text: 'Retry' }, ...options }),
      warn: (content, options = {}) => show(content, { title: 'Warning', ...options })
    };
  }

  return (
    <Modal
      visible={options.visible}
      onDismiss={handleOnDismiss}
      contentContainerStyle={[defaultStyles.contentContainerStyle, styles.contentContainerStyle]}>
      <Text style={[defaultStyles.title, styles.title]}>{options.title}</Text>
      <Text style={[defaultStyles.content, styles.content]}>{options.content}</Text>
      <View style={defaultStyles.actionWrapper}>
        {options.action2.enabled && (
          <Button variant="secondary" onPress={handleAction2} styles={{ ...defaultStyles.action, ...styles.action }}>
            {options.action2.text}
          </Button>
        )}
        <Button variant="secondary" onPress={handleAction} styles={{ ...defaultStyles.action, ...styles.action }}>
          {options.action.text}
        </Button>
      </View>
    </Modal>
  );
};

export default Alert;
