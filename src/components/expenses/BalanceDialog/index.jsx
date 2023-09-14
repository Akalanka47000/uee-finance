import { useEffect, useState } from 'react';
import { Modal, Text, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Button } from '@/components';
import { colors } from '@/config/theme';
import { store } from '@/store';
import { setStartingBalance } from '@/store/reducers/data/expenses';
import { toggleBalanceDialog } from '@/store/reducers/ui/home';
import styles from './styles';

const regex = /[^0-9]/g;

const close = () => store.dispatch(toggleBalanceDialog(false));

const BalanceDialog = () => {
  const showBalanceDialog = useSelector((state) => state.ui.home.showBalanceDialog);
  const startingBalance = useSelector((state) => state.data.expenses.startingBalance);

  const [value, setValue] = useState('');

  const handleOnChange = (data) => {
    const num = data.replace(regex, '');
    if (num.length === 0) {
      setValue('');
    }
    setValue(Number(Number(num) / 100).toFixed(2));
  };

  const onConfirm = () => {
    store.dispatch(setStartingBalance(Number(value)));
    close();
  };

  useEffect(() => {
    if (startingBalance !== null) {
      setValue(startingBalance?.toFixed(2));
    }
  }, [startingBalance]);

  return (
    <Modal visible={showBalanceDialog} onDismiss={close} contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.text}>Set Balance</Text>
      <TextInput
        mode="outlined"
        keyboardType="phone-pad"
        style={styles.input}
        outlineColor={colors.gray}
        activeOutlineColor={colors.white}
        textColor="white"
        contentStyle={styles.inputContent}
        outlineStyle={styles.inputOutline}
        value={value}
        placeholder="0.00"
        onChangeText={handleOnChange}
      />
      <Button onPress={onConfirm} styles={styles.confirmBtn}>
        Confirm
      </Button>
    </Modal>
  );
};

export default BalanceDialog;
