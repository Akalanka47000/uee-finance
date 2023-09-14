import { useCallback } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Button, Divider } from '@/components';
import ExpenseDialog from '@/components/expenses/dialog';
import { colors } from '@/config/theme';
import { MoveRight } from '@/icons';
import store from '@/store';
import { currentMonthExpenses, setSelectedExpense } from '@/store/reducers/data/expenses';
import { toggleExpenseDialog } from '@/store/reducers/ui/home';
import styles from './styles';

const categories = ['Shopping', 'Food', 'Travel', 'Entertainment', 'Health', 'Education', 'Other'];

const onExpenseClick = (expense) => {
  if (moment(expense.full_date).isAfter(moment(), 'day'))
    return global.alert.warn('You cannot set expenses for future dates');
  store.dispatch(setSelectedExpense(expense));
  store.dispatch(toggleExpenseDialog(true));
};

const Home = () => {
  const expenses = useSelector(currentMonthExpenses);

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
        <Text style={styles.month}>------- {moment().format('MMM')} -------</Text>
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
          <View style={[styles.summaryStartLabel]}>
            <Text style={[styles.summaryText, { color: colors.white }]}>Starting</Text>
            <Text style={[styles.summaryTextValue, { color: colors.white }]}>$0.00</Text>
          </View>
          <MoveRight />
          <View style={styles.summaryLabel}>
            <Text style={styles.summaryText}>Savings</Text>
            <Text style={styles.summaryTextValue}>$0.00</Text>
          </View>
        </View>
      </View>
      <ExpenseDialog />
    </>
  );
};

export default Home;
