import { Linking, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { Button } from '@/components';
import secrets from '@/config/secrets';
import styles from './styles';

const Subscription = () => {
  const plan = useSelector((state) => state.data.subscription.plan);

  const onUpgrade = () => Linking.openURL(secrets.stripe_payment_link);

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
