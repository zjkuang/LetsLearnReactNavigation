import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {QuickTestButton} from '../../widgets';
import {NeDetails, NeDetailsParamList} from '../ne-details';
import {MainTabNavigationProp} from '../index';

export type NeStackParamList = {
  NeScreen: {}; // navigation root
  NeDetails: NeDetailsParamList;
  // more navigation children can be added here
};
export type NeStackNavitationProp = StackNavigationProp<NeStackParamList>;
const NeStack = createStackNavigator<NeStackParamList>();
export const NeNavigationView = () => {
  return (
    <NeStack.Navigator>
      <NeStack.Screen name="NeScreen" component={NeRootView} />
      <NeStack.Screen name="NeDetails" component={NeDetails} />
    </NeStack.Navigator>
  );
};

export const NeRootView = () => {
  const stackNavigation = useNavigation<NeStackNavitationProp>();
  const mainTabNavigation = useNavigation<MainTabNavigationProp>();

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: 'Ne',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [stackNavigation]);

  const onDetailsPressed = React.useCallback(() => {
    stackNavigation.push('NeDetails', {
      number: 10,
      name: 'Neon',
      abbreviation: 'Ne',
      weight: 20.18,
    });
  }, [stackNavigation]);

  const onNextPressed = React.useCallback(() => {
    mainTabNavigation.navigate('Ar', {});
  }, [mainTabNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsPressed} />
      <QuickTestButton title={'Next'} onPress={onNextPressed} />
    </View>
  );
};
