import { Linking, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Button } from '@/components';
import secrets from '@/config/secrets';
import store from '@/store';
import { setPaid, setPlan } from '@/store/reducers/data/subscription';
import styles from './styles';

const Subscription = () => {
  const { plan, paid } = useSelector((state) => state.data.subscription);

  const onUpgrade = () => {
    Linking.openURL(secrets.stripe_payment_link);
    setTimeout(() => {
      store.dispatch(setPaid(true));
      store.dispatch(setPlan('PREMIUM'));
    }, 300);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Current Plan</Text>
      <Text style={styles.plan(plan)}>{plan}</Text>
      {!paid && (
        <Button onPress={onUpgrade} styles={styles.upgradeBtn}>
          Upgrade
        </Button>
      )}
    </View>
  );
};

export default Subscription;
