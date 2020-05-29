import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/Navigator';

AppRegistry.registerComponent(appName, () => Router);
