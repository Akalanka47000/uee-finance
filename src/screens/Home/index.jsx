import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '@/components';
import { colors } from '@/config/theme';
import { MoveRight } from '@/icons';
import styles from './styles';

const categories = ['Shopping', 'Food', 'Travel', 'Entertainment', 'Health', 'Education', 'Other'];

const Home = () => {
  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.categorySlider}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignSelf: 'flex-start' }}>
        {categories.map((category, index) => (
          <Button key={index} style={styles.categoryButton}>
            {category}
          </Button>
        ))}
      </ScrollView>
      <View style={styles.expenseCards} />
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
  );
};

export default Home;
