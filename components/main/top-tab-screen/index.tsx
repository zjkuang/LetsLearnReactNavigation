import React from 'react';
import {styles} from './style';
import {SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabOneView} from './tab-one';
import {TopTabTwoView} from './tab-tow';
import {TopTabThreeView} from './tab-three';
import {SettingsStackParamList} from '../settings-screen';
import {StackScreenProps} from '@react-navigation/stack';

const TopTab = createMaterialTopTabNavigator();

export type TopTabTitle = 'One' | 'Two' | 'Three';
export type TopTabScreenParamList = {
  headerTitle?: string;
  initialTab?: TopTabTitle;
};
type TopTabScreenProps = StackScreenProps<
  SettingsStackParamList,
  'TopTabScreen'
>;
export const TopTabScreen = (props: TopTabScreenProps) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.headerTitle ?? 'Top-Tab',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [props.navigation, props.route.params.headerTitle]);

  // Make style={{flex: 1}} for SafeAreaView otherwise the TopTabView will not show
  //   <SafeAreaView style={{flex: 1}}><TopTab.Navigator>...</TopTab.Navigator></SafeAreaView>
  return (
    <SafeAreaView style={styles.flexContainer}>
      <TopTab.Navigator
        initialRouteName={props.route.params.initialTab ?? 'One'}>
        <TopTab.Screen
          name="One"
          component={TopTabOneView}
          options={{tabBarLabel: 'One'}}
        />
        <TopTab.Screen
          name="Two"
          component={TopTabTwoView}
          options={{tabBarLabel: 'Two'}}
        />
        <TopTab.Screen
          name="Three"
          component={TopTabThreeView}
          options={{tabBarLabel: 'Three'}}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};
