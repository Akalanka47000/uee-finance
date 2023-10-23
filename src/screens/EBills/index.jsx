import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SmsAndroid from 'react-native-get-sms-android';
import { Text } from 'react-native-paper';
import { store } from '@/store';
import { default as styles } from './styles';

const filter = {
  box: 'inbox',
  minDate: 1554636310165,
  maxDate: 1556277910456,
  read: 0,
  indexFrom: 0,
  maxCount: 10
};

const getAmount = (body) => {
  const amount = body.match(/Rs. (\d+\.\d+)/);
  if (amount) return parseFloat(amount[1]);
  return 0;
};

const EBills = () => {
  const [smsList, setSmsList] = useState([]);

  useEffect(() => {
    // SmsAndroid.list(
    //   JSON.stringify(filter),
    //   (fail) => {
    //     console.log('Failed with this error: ' + fail);
    //   },
    //   (count, smsList) => {
    //     console.log('Count: ', count);
    //     console.log('List: ', smsList);
    //     var arr = JSON.parse(smsList);
    //     arr.forEach(function(object) {
    //       console.log('Object: ' + object);
    //       console.log('-->' + object.date);
    //       console.log('-->' + object.body);
    //     });
    //     setSmsList(arr);
    //   },
    // );
  }, []);

  const totalEBillValue = smsList.reduce((acc, sms) => acc + getAmount(sms), 0);

  const renderItem = useCallback(({ item: sms }) => (
    <View key={sms.id} style={styles.sms}>
      <Text style={styles.smsText}>
        {new Date(sms.date).toLocaleString()} - LKR {getAmount(sms).toFixed(2)}
      </Text>
    </View>
  ));

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.total}>Total Bill Value</Text>
        <Text style={styles.totalValue}>LKR {totalEBillValue.toFixed(2)}</Text>
      </View>
      <FlatList
        data={smsList}
        style={styles.smsList}
        contentContainerStyle={styles.smsListContent}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default EBills;
