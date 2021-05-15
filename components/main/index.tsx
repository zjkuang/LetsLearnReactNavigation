import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {HeNavigationView} from './he-screen';
import {NeNavigationView} from './ne-screen';
import {ArNavigationView} from './ar-screen';
import {KrNavigationView} from './kr-screen';
import {SettingsNavigationView} from './settings-screen';
import {DrawerParamList} from '../drawer';
import {StackScreenProps} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MainTabParamList = {
  He: {};
  Ne: {};
  Ar: {};
  Kr: {};
  Settings: {};
};
export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;
type MainTabProps = StackScreenProps<DrawerParamList, 'MainTabScreen'>;
const BottomTab = createBottomTabNavigator<MainTabParamList>();
export const MainTabView = (props: MainTabProps) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  }, [props.navigation]);

  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          const dynamicSize = focused ? 20 : 16;
          if (route.name === 'He') {
            const iconName = `${
              focused ? 'alpha-h-circle' : 'alpha-h-circle-outline'
            }`;
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={dynamicSize}
              />
            );
          } else if (route.name === 'Ne') {
            const iconName = `${
              focused ? 'alpha-n-circle' : 'alpha-n-circle-outline'
            }`;
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={dynamicSize}
              />
            );
          } else if (route.name === 'Ar') {
            const iconName = `${
              focused ? 'alpha-a-circle' : 'alpha-a-circle-outline'
            }`;
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={dynamicSize}
              />
            );
          } else if (route.name === 'Kr') {
            const iconName = `${
              focused ? 'alpha-k-circle' : 'alpha-k-circle-outline'
            }`;
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={dynamicSize}
              />
            );
          } else if (route.name === 'Settings') {
            const iconName = `${focused ? 'settings' : 'settings-outline'}`;
            return (
              <Ionicons name={iconName} color={color} size={dynamicSize} />
            );
          }
        },
      })}>
      <BottomTab.Screen name="He" component={HeNavigationView} />
      <BottomTab.Screen name="Ne" component={NeNavigationView} />
      <BottomTab.Screen name="Ar" component={ArNavigationView} />
      <BottomTab.Screen name="Kr" component={KrNavigationView} />
      <BottomTab.Screen name="Settings" component={SettingsNavigationView} />
    </BottomTab.Navigator>
  );
};
