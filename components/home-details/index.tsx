import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {RootStackNavigationProp} from '../root';
import {QuickTestButton} from '../widgets';

export const HomeDetails = () => {
  const navigation = useNavigation();
  const stackNavigation = useNavigation<RootStackNavigationProp>();

  React.useLayoutEffect(() => {
    let title = 'Details';
    stackNavigation.setOptions({
      headerTitle: title,
    });
  }, [stackNavigation]);

  const onBackButtonPressed = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onHomeButtonPressed = React.useCallback(() => {
    stackNavigation.navigate('HomeScreen', {});
  }, [stackNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Back'} onPress={onBackButtonPressed} />
      <QuickTestButton title={'Home'} onPress={onHomeButtonPressed} />
    </View>
  );
};
