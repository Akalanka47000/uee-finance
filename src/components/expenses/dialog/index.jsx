import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Modal, Text, TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Button } from '@/components';
import { colors } from '@/config/theme';
import { store } from '@/store';
import { updateExpense } from '@/store/reducers/data/expenses';
import { toggleExpenseDialog } from '@/store/reducers/ui/home';
import styles from './styles';

const regex = /[^0-9]/g;

const close = () => store.dispatch(toggleExpenseDialog(false));

const ExpenseDialog = () => {
  const showExpenseDialog = useSelector((state) => state.ui.home.showExpenseDialog);
  const selectedExpense = useSelector((state) => state.data.expenses.selectedExpense);

  const [value, setValue] = useState('');

  const handleOnChange = (data) => {
    const num = data.replace(regex, '');
    if (num.length === 0) {
      setValue('');
    }
    setValue(Number(Number(num) / 100).toFixed(2));
  };

  const onConfirm = () => {
    store.dispatch(
      updateExpense({
        date: selectedExpense.full_date,
        data: {
          ...selectedExpense,
          amount: Number(value)
        }
      })
    );
    close();
  };

  useEffect(() => {
    if (selectedExpense?.amount !== null) {
      setValue(selectedExpense?.amount?.toFixed(2));
    }
  }, [selectedExpense]);

  return (
    <Modal visible={showExpenseDialog} onDismiss={close} contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.header}>
        <Text style={styles.text}>Set Expenses</Text>
        <Text style={styles.date}>
          {selectedExpense?.full_date ? moment(selectedExpense?.full_date).format('MMM Do') : ''}
        </Text>
      </View>
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

export default ExpenseDialog;
