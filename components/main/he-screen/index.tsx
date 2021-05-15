import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {QuickTestButton} from '../../widgets';
import {HeDetails, HeDetailsParamList} from '../he-details';
import {MainTabNavigationProp} from '../index';
import {IconTableOfContents} from '../../../components/icons';

export type HeStackParamList = {
  HeScreen: {}; // navigation root
  HeDetails: HeDetailsParamList;
  // more navigation children can be added here
};
export type HeStackNavitationProp = StackNavigationProp<HeStackParamList>;
const HeStack = createStackNavigator<HeStackParamList>();
export const HeNavigationView = () => {
  return (
    <HeStack.Navigator>
      <HeStack.Screen name="HeScreen" component={HeRootView} />
      <HeStack.Screen name="HeDetails" component={HeDetails} />
    </HeStack.Navigator>
  );
};

export const HeRootView = () => {
  const stackNavigation = useNavigation<HeStackNavitationProp>();
  const mainTabNavigation = useNavigation<MainTabNavigationProp>();

  const onOpenDrawer = React.useCallback(() => {
    stackNavigation.dispatch(DrawerActions.toggleDrawer());
  }, [stackNavigation]);

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={styles.navigationHeaderLeft}
          onPress={() => {
            onOpenDrawer();
          }}>
          <IconTableOfContents />
        </TouchableOpacity>
      ),
      headerTitle: 'He',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [onOpenDrawer, stackNavigation]);

  const onDetailsPressed = React.useCallback(() => {
    stackNavigation.push('HeDetails', {
      number: 2,
      name: 'Helium',
      abbreviation: 'He',
      weight: 4.003,
    });
  }, [stackNavigation]);

  const onNextPressed = React.useCallback(() => {
    mainTabNavigation.navigate('Ne', {});
  }, [mainTabNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsPressed} />
      <QuickTestButton title={'Next'} onPress={onNextPressed} />
    </View>
  );
};
