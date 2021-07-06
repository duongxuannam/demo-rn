import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from 'navigation/routes';
// import Splash from 'screens/Splash/index';
import Splash from 'screens/Splash/SplashAnimation';
// import Splash from 'screens/Splash/SplashStyled';

import Login from 'screens/Login';

const MainStack = createStackNavigator();

export default function _MainStack() {
  return (
    <MainStack.Navigator initialRouteName={Routes.SPLASH} headerMode={null}>
      <MainStack.Screen name={Routes.SPLASH} component={Splash} />
      <MainStack.Screen name={Routes.LOGIN} component={Login} />
    </MainStack.Navigator>
  );
}
