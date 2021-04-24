import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../root';
import {QuickTestButton} from '../widgets';

// There are two methods to get access to navigation.
// One is as used here
//   const stackNavigation = useNavigation<RootStackNavigationProp>();
// The other is by props.navigation, as displayed in HomeDetails

export type HomeScreenProps = {
  headerTitle?: string;
};
export const HomeScreen = (props: HomeScreenProps) => {
  const stackNavigation = useNavigation<RootStackNavigationProp>();

  const onDetailsButtonPressed = React.useCallback(() => {
    stackNavigation.push('HomeDetails', {generation: 1});
  }, [stackNavigation]);

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: props.headerTitle ?? 'HomeScreen',
    });
  }, [props.headerTitle, stackNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsButtonPressed} />
    </View>
  );
};
