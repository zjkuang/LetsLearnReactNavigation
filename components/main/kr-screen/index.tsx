import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {QuickTestButton} from '../../widgets';
import {KrDetails, KrDetailsParamList} from '../kr-details';
import {MainTabNavigationProp} from '../index';

export type KrStackParamList = {
  KrScreen: {}; // navigation root
  KrDetails: KrDetailsParamList;
  // more navigation children can be added here
};
export type KrStackNavitationProp = StackNavigationProp<KrStackParamList>;
const KrStack = createStackNavigator<KrStackParamList>();
export const KrNavigationView = () => {
  return (
    <KrStack.Navigator>
      <KrStack.Screen name="KrScreen" component={KrRootView} />
      <KrStack.Screen name="KrDetails" component={KrDetails} />
    </KrStack.Navigator>
  );
};

export const KrRootView = () => {
  const stackNavigation = useNavigation<KrStackNavitationProp>();
  const mainTabNavigation = useNavigation<MainTabNavigationProp>();

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: 'Kr',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [stackNavigation]);

  const onDetailsPressed = React.useCallback(() => {
    stackNavigation.push('KrDetails', {
      number: 36,
      name: 'Krypton',
      abbreviation: 'Kr',
      weight: 84.798,
    });
  }, [stackNavigation]);

  const onNextPressed = React.useCallback(() => {
    mainTabNavigation.navigate('He', {});
  }, [mainTabNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsPressed} />
      <QuickTestButton title={'Next'} onPress={onNextPressed} />
    </View>
  );
};
