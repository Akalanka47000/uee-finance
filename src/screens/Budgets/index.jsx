import { useCallback, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { useSelector } from 'react-redux';
import { BudgetDialog } from '@/components';
import { colors } from '@/config/theme';
import { Plus } from '@/icons';
import { store } from '@/store';
import { deleteBudget, setSelectedBudget } from '@/store/reducers/data/budgets';
import { currentMonthExpenses } from '@/store/reducers/data/expenses';
import { toggleBudgetDialog } from '@/store/reducers/ui/budgets';
import { default as styles } from './styles';

const onAdd = () => {
  store.dispatch(setSelectedBudget(null));
  store.dispatch(toggleBudgetDialog(true));
};

const onEdit = (budget) => {
  store.dispatch(setSelectedBudget(budget));
  store.dispatch(toggleBudgetDialog(true));
};

const Budgets = () => {
  const expenses = useSelector(currentMonthExpenses);
  const budgets = useSelector((state) => state.data.budgets.all);

  const expensesTotal = useMemo(() => expenses.reduce((acc, expense) => acc + expense.amount, 0), [expenses]);

  const renderItem = useCallback(({ item: budget }) => (
    <Swipeout
      right={[
        {
          text: 'Delete',
          backgroundColor: colors.error,
          underlayColor: 'rgba(0, 255, 0, 1, 0.6)',
          onPress: () => store.dispatch(deleteBudget(budget))
        }
      ]}
      autoClose="true"
      backgroundColor="transparent">
      <Pressable key={budget.id} style={styles.budget} onPress={() => onEdit(budget)}>
        <Text style={styles.budgetText}>
          {' '}
          {'>  '} {budget.amount}
        </Text>
      </Pressable>
    </Swipeout>
  ));

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.expenses}>Current Expenses</Text>
        <Text style={styles.expenseTotal}>LKR {expensesTotal.toFixed(2)}</Text>
      </View>
      <FlatList
        data={budgets}
        style={styles.budgets}
        contentContainerStyle={styles.budgetContent}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={[styles.addBtn]} onPress={onAdd}>
        <Plus size={50} />
      </Pressable>
      <BudgetDialog />
    </>
  );
};

export default Budgets;
