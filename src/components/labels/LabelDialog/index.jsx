import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Modal, Text, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Button } from '@/components';
import { colors } from '@/config/theme';
import { store } from '@/store';
import { addLabel } from '@/store/reducers/data/labels';
import { toggleLabelDialog } from '@/store/reducers/ui/labels';
import styles from './styles';

const close = () => store.dispatch(toggleLabelDialog(false));

const LabelDialog = () => {
  const showLabelDialog = useSelector((state) => state.ui.labels.showLabelDialog);
  const labels = useSelector((state) => state.data.labels.all);

  const [label, setLabel] = useState('');

  const onConfirm = () => {
    if (labels?.includes(label)) return global.alert.warn('Error already exists');
    store.dispatch(addLabel(label));
    close();
  };

  useEffect(() => {
    setLabel('');
  }, [showLabelDialog]);

  return (
    <Modal visible={showLabelDialog} onDismiss={close} contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.text}>Create Label</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Label Name</Text>
        <TextInput
          mode="outlined"
          style={styles.input}
          outlineColor={colors.gray}
          activeOutlineColor={colors.white}
          textColor="white"
          contentStyle={styles.inputContent}
          outlineStyle={styles.inputOutline}
          value={label}
          placeholder=""
          onChangeText={setLabel}
        />
      </View>
      <Button onPress={onConfirm} styles={styles.confirmBtn}>
        Confirm
      </Button>
    </Modal>
  );
};

export default LabelDialog;
