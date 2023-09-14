import { PermissionsAndroid } from 'react-native';
import moment from 'moment';
import store from '@/store';
import RNFetchBlob from 'rn-fetch-blob';

export const downloadCurrentMonthExpenseReport = async () => {
  const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
    title: 'External Storage Permission',
    message: 'UEE Finance App needs access to your storage ' + 'so that you can download reports.',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK'
  });
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    const expenses = store.getState().data.expenses.all[moment().format('YYYY-MM')];
    const headerString = 'Day,Expenses(LKR)\n';
    const rowString = expenses.map((e) => `${e.day},${e.amount}\n`).join('');
    const csvString = `${headerString}${rowString}`;
    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/Expenses - ${moment().format('MMM')}.csv`;
    RNFetchBlob.fs
      .writeFile(pathToWrite, csvString, 'utf8')
      .then(() => {
        global.alert.info('Report downloaded successfully');
      })
      .catch((error) => console.error(error));
  }
};
