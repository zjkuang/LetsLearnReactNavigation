import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './style';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {HomeScreen} from '../home-screen';
import {HomeDetails, HomeDetailsParamList} from '../home-details';

export type RootStackParamList = {
  HomeScreen: {};
  HomeDetails: HomeDetailsParamList;
};
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
const RootStack = createStackNavigator<RootStackParamList>();
export const RootView = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="HomeDetails" component={HomeDetails} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
