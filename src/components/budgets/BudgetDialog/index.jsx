import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Modal, Text, TextInput } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';
import { Button } from '@/components';
import { colors } from '@/config/theme';
import { store } from '@/store';
import { addBudget, updateBudget } from '@/store/reducers/data/budgets';
import { toggleBudgetDialog } from '@/store/reducers/ui/budgets';
import styles from './styles';

const regex = /[^0-9]/g;

const close = () => store.dispatch(toggleBudgetDialog(false));

const Budget = () => {
  const showBudgetDialog = useSelector((state) => state.ui.budgets.showBudgetDialog);
  const selectedBudget = useSelector((state) => state.data.budgets.selectedBudget);

  const [value, setValue] = useState('0.00');
  const [budget, setBudget] = useState(null);

  const handleOnChange = (data) => {
    const num = data.replace(regex, '');
    if (num.length === 0) {
      setValue('');
    }
    setValue(Number(Number(num) / 100).toFixed(2));
  };

  const onConfirm = () => {
    if (budget) {
      store.dispatch(updateBudget({ amount: Number(value), id: budget.id }));
    } else {
      store.dispatch(addBudget({ amount: Number(value), id: uuid.v4() }));
    }
    close();
  };

  useEffect(() => {
    if (selectedBudget !== null) {
      setBudget(selectedBudget);
      setValue(selectedBudget?.amount?.toFixed(2));
    } else {
      setBudget(null);
      setValue('0.00');
    }
  }, [selectedBudget]);

  return (
    <Modal visible={showBudgetDialog} onDismiss={close} contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.text}>{budget ? 'Update' : 'Create'} Budget</Text>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>If expenses exceed (LKR)</Text>
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
      </View>

      <Button onPress={onConfirm} styles={styles.confirmBtn}>
        Confirm
      </Button>
    </Modal>
  );
};

export default Budget;
