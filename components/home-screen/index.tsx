import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../root';
import {QuickTestButton} from '../widgets';

// In this example,
//   const HomeScreen = (props: HomeScreenProps) => { ... }
// is not the best way to handle props since HomeScreen is a component screen
// of a stack navigator.
// Please refer to HomeDetails for a standard practice accessing navigation and route.params
// But here we do it this way just to show an alternative way for a navigator to pass props
// as well as an altertive way to get access to the stack's navigation by
//   const stackNavigation = useNavigation<RootStackNavigationProp>()

export type HomeScreenProps = {
  headerTitle?: string;
};
export const HomeScreen = (props: HomeScreenProps) => {
  const stackNavigation = useNavigation<RootStackNavigationProp>();

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: props.headerTitle ?? 'HomeScreen',
    });
  }, [props.headerTitle, stackNavigation]);

  const onDetailsButtonPressed = React.useCallback(() => {
    stackNavigation.push('HomeDetails', {generation: 1});
  }, [stackNavigation]);

  const onMobileStackButtonPressed = React.useCallback(() => {
    // We can switch the initial screen when we navigate to MobileStackScreen
    stackNavigation.navigate('MobileStackScreen', {initialScreen: 'alpha'});
  }, [stackNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsButtonPressed} />
      <QuickTestButton
        title={'Mobile Stack'}
        onPress={onMobileStackButtonPressed}
      />
    </View>
  );
};
