import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../root';
import {QuickTestButton} from '../widgets';

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

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Details'} onPress={onDetailsButtonPressed} />
    </View>
  );
};
