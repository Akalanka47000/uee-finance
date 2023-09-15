import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Button } from '@/components';
import styles from './styles';

const Subscription = () => {
  const plan = useSelector((state) => state.data.subscription.plan);

  const onUpgrade = () => global.alert.info('This feature is not available yet');

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Current Plan</Text>
      <Text style={styles.plan(plan)}>{plan}</Text>
      <Button onPress={onUpgrade} styles={styles.upgradeBtn}>
        Upgrade
      </Button>
    </View>
  );
};

export default Subscription;
