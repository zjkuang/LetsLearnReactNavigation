import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {QuickTestButton} from '../../widgets';
import {ArDetails, ArDetailsParamList} from '../ar-details';
import {MainTabNavigationProp} from '../index';

export type ArStackParamList = {
  ArScreen: {}; // navigation root
  ArDetails: ArDetailsParamList;
  // more navigation children can be added here
};
export type ArStackNavitationProp = StackNavigationProp<ArStackParamList>;
const ArStack = createStackNavigator<ArStackParamList>();
export const ArNavigationView = () => {
  return (
    <ArStack.Navigator>
      <ArStack.Screen name="ArScreen" component={ArRootView} />
      <ArStack.Screen name="ArDetails" component={ArDetails} />
    </ArStack.Navigator>
  );
};

export const ArRootView = () => {
  const stackNavigation = useNavigation<ArStackNavitationProp>();
  const mainTabNavigation = useNavigation<MainTabNavigationProp>();

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: 'Ar',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [stackNavigation]);

  const onDetailsPressed = React.useCallback(() => {
    stackNavigation.push('ArDetails', {
      number: 18,
      name: 'Argon',
      abbreviation: 'Ar',
      weight: 39.948,
    });
  }, [stackNavigation]);

  const onNextPressed = React.useCallback(() => {
    mainTabNavigation.navigate('Kr', {});
  }, [mainTabNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsPressed} />
      <QuickTestButton title={'Next'} onPress={onNextPressed} />
    </View>
  );
};
