import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './tabs.routes';
import BookDetail from '../screens/BookDetail';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
