import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export type SettingsStackParamList = {
  SettingsScreen: {}; // navigation root
  // more navigation children can be added here
};
export type SettingsStackNavitationProp = StackNavigationProp<SettingsStackParamList>;
const SettingsStack = createStackNavigator<SettingsStackParamList>();
export const SettingsNavigationView = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsRootView}
      />
    </SettingsStack.Navigator>
  );
};

export const SettingsRootView = () => {
  const stackNavigation = useNavigation<SettingsStackNavitationProp>();

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: 'Settings',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [stackNavigation]);

  return (
    <View style={styles.baseView}>
      <Text>Yet to do...</Text>
    </View>
  );
};
