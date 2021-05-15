import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {DrawerView} from '../drawer';
import {RootStackModalScreen, RootStackModalParamList} from '../modal-screen';

export type RootStackParamList = {
  Drawer?: {};
  RootStackModalScreen?: RootStackModalParamList;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();
export const RootView = () => {
  const headerMode: 'float' | 'screen' | 'none' = 'none'; // otherwise Drawer will be showing as navigation bar
  // (1) Don't forget "style={{flex: 1}}" for SafeAreaView otherwise the
  //     contents will not be seen
  // (2) Don't forget the outermost wrapper NavigationContainer for navigators
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <RootStack.Navigator headerMode={headerMode}>
          <RootStack.Screen name="Drawer" component={DrawerView} />
          <RootStack.Screen
            name="RootStackModalScreen"
            component={RootStackModalScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
