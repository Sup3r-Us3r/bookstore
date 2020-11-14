/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

import {COLORS, icons} from '../../constants';

const BottomTab = createBottomTabNavigator();

const TabsRoutes = () => {
  const tabBarOptions = {
    showLabel: false,
    style: {
      height: '8%',
      backgroundColor: COLORS.black,
    },
  } as BottomTabBarOptions;

  return (
    <BottomTab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor,
                    height: 25,
                    width: 25,
                  }}
                />
              );
            default:
          }
        },
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Search" component={Home} />
      <BottomTab.Screen name="Notification" component={Home} />
      <BottomTab.Screen name="Setting" component={Home} />
    </BottomTab.Navigator>
  );
};

export default TabsRoutes;
