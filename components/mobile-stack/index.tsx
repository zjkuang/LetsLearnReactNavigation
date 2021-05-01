import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import {RootStackParamList} from '../root';
import {MobileAlphaScreen, MobileAlphaScreenParamList} from './mobile-alpha';
import {MobileBetaScreen, MobileBetaScreenParamList} from './mobile-beta';

// Don't get confused between MobileStackScreenParamList and MobileStackParamList
//  - MobileStackScreenParamList is used by MobileStackScreen's host navigator for
//    MobileStackScreen to receive parameters
//  - MobileStackParamList defines the screens hosted by MobileStack

export type MobileStackScreenParamList = {
  initialScreen?: 'alpha' | 'beta';
};

export type MobileStackParamList = {
  MobileAlphaScreen: MobileAlphaScreenParamList;
  MobileBetaScreen: MobileBetaScreenParamList;
};

export type MobileStackNavigationProp = StackNavigationProp<MobileStackParamList>;
type MobileStackScreenProps = StackScreenProps<
  RootStackParamList,
  'MobileStackScreen'
>;
const MobileStack = createStackNavigator<MobileStackParamList>();
export const MobileStackScreen = (props: MobileStackScreenProps) => {
  let initialScreen: 'MobileAlphaScreen' | 'MobileBetaScreen';
  initialScreen =
    props.route.params.initialScreen === 'beta'
      ? 'MobileBetaScreen'
      : 'MobileAlphaScreen';

  React.useEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [props.navigation]);

  return (
    <MobileStack.Navigator initialRouteName={initialScreen}>
      <MobileStack.Screen
        name="MobileAlphaScreen"
        component={MobileAlphaScreen}
        initialParams={{isRoot: true}}
      />
      <MobileStack.Screen
        name="MobileBetaScreen"
        component={MobileBetaScreen}
        initialParams={{isRoot: true}}
      />
    </MobileStack.Navigator>
  );
};
