import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {MainTabView} from '../main';

export type RootStackParamList = {
  MainTabScreen: {};
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const RootStack = createStackNavigator<RootStackParamList>();
export const RootView = () => {
  // (1) Don't forget "style={{flex: 1}}" for SafeAreaView otherwise the
  //     contents will not be seen
  // (2) Don't forget the outermost wrapper NavigationContainer for navigators
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="MainTabScreen" component={MainTabView} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
