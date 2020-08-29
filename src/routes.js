import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import Welcome from './pages/Welcome';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Welcome',
      backBehavior: 'history',
    },
  ),
);

export default Routes;
