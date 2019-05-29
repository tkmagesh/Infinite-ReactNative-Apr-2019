/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TaskManagerApp from './taskManagerApp';
import {name as appName} from './app.json';

console.log(TaskManagerApp);

AppRegistry.registerComponent(appName, () => TaskManagerApp);
