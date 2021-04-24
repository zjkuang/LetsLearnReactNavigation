import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {RootStackNavigationProp} from '../root';
import {QuickTestButton} from '../widgets';

export const HomeDetails = () => {
  const stackNavigation = useNavigation<RootStackNavigationProp>();

  React.useLayoutEffect(() => {
    let title = 'Details';
    stackNavigation.setOptions({
      headerTitle: title,
    });
  }, [stackNavigation]);

  const onHomeButtonPressed = React.useCallback(() => {
    stackNavigation.push('HomeScreen', {});
  }, [stackNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Home'} onPress={onHomeButtonPressed} />
    </View>
  );
};
