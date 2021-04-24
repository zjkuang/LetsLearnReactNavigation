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
  // (1) Don't forget "style={{flex: 1}}" for SafeAreaView otherwise the
  //     contents will not be seen
  // (2) Don't forget the outermost wrapper NavigationContainer for navigators
  // (3) Notice how to pass props to HomeScreen
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="HomeScreen"
            children={() => [<HomeScreen key={0} headerTitle={'Home'} />]}
          />
          <RootStack.Screen name="HomeDetails" component={HomeDetails} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
