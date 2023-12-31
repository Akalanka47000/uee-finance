import { useCallback, useEffect, useMemo } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { default as moment } from 'moment';
import { BalanceDialog, Button, Divider, ExpenseDialog } from '@/components';
import { colors } from '@/config/theme';
import { MoveRight } from '@/icons';
import { store } from '@/store';
import { updateBudget } from '@/store/reducers/data/budgets';
import { currentMonthExpenses, setSelectedExpense } from '@/store/reducers/data/expenses';
import { toggleBalanceDialog, toggleExpenseDialog } from '@/store/reducers/ui/home';
import styles from './styles';

const onExpenseClick = (expense) => {
  if (moment(expense.full_date).isAfter(moment(), 'day'))
    return global.alert.warn('You cannot set expenses for future dates');
  store.dispatch(setSelectedExpense(expense));
  store.dispatch(toggleExpenseDialog(true));
};

const onBalancePress = () => store.dispatch(toggleBalanceDialog(true));

const Home = () => {
  const expenses = useSelector(currentMonthExpenses);
  const startingBalance = useSelector((state) => state.data.expenses.startingBalance);
  const budgets = useSelector((state) => state.data.budgets.all);
  const categories = useSelector((state) => state.data.labels.all);

  const savings = useMemo(() => {
    if (startingBalance === null) return 0;
    return expenses.reduce((acc, expense) => acc - expense.amount, startingBalance);
  }, [expenses, startingBalance]);

  useEffect(() => {
    const totalExpenses = startingBalance - savings;
    for (const budget of budgets) {
      if (totalExpenses > budget.amount && !budget.warned) {
        store.dispatch(updateBudget({ ...budget, warned: true }));
        global.alert.warn(`You have exceeded a budget of LKR ${budget.amount?.toFixed(2)}!`);
        break;
      }
    }
  }, [startingBalance, savings]);

  const renderItem = useCallback(({ item: expense }) => (
    <Pressable key={expense.day} style={styles.expenseCard(expense.day)} onPress={() => onExpenseClick(expense)}>
      <Text style={styles.expenseCardDate}>{expense.day}</Text>
      <Divider style={styles.expenseCardDivider} />
      <Text style={styles.expenseCardAmount}>{expense.amount?.toFixed(2)}</Text>
    </Pressable>
  ));

  return (
    <>
      <View style={styles.root}>
        <ScrollView
          style={styles.categorySlider}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignSelf: 'center' }}>
          {categories.map((category, index) => (
            <Button key={index} style={styles.categoryButton}>
              {category}
            </Button>
          ))}
        </ScrollView>
        <Text style={styles.month}>------- {moment().format('MMMM')} -------</Text>
        <FlatList
          data={expenses}
          style={styles.expenseCardList}
          contentContainerStyle={styles.expenseCardContent}
          columnWrapperStyle={styles.expenseCardColumns}
          numColumns={3}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.day}-${item.amount}`}
        />
        <View style={styles.summary}>
          <Pressable style={[styles.summaryStartLabel]} onPress={onBalancePress}>
            <Text style={[styles.summaryText, { color: colors.white }]}>Starting</Text>
            <Text style={[styles.summaryTextValue, { color: colors.white }]}>Rs {startingBalance?.toFixed(2)}</Text>
          </Pressable>
          <MoveRight />
          <View style={styles.summaryLabel}>
            <Text style={styles.summaryText}>Savings</Text>
            <Text style={styles.summaryTextValue}>Rs {savings.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      <ExpenseDialog />
      <BalanceDialog />
    </>
  );
};

export default Home;
