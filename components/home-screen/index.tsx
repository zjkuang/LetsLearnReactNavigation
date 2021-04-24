import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../root';
import {QuickTestButton} from '../widgets';

export const HomeScreen = () => {
  const rootNavigation = useNavigation<RootStackNavigationProp>();

  React.useLayoutEffect(() => {
    rootNavigation.setOptions({
      headerTitle: 'Home',
    });
  }, [rootNavigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton
        title={'Details'}
        onPress={() => {
          rootNavigation.push('HomeDetails', {});
        }}
      />
    </View>
  );
};
