import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { default as App } from './src/App';

AppRegistry.registerComponent(appName, () => App);
