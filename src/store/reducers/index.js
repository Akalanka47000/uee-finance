import { default as AsyncStorage } from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import data from './data';
import ui from './ui';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

export default {
  data: persistReducer(persistConfig, data),
  ui
};
