import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {RootStackParamList} from '../root';
import {QuickTestButton} from '../widgets';
import {StackScreenProps} from '@react-navigation/stack';

export type HomeDetailsParamList = {
  generation?: number;
};
type HomeDetailsProps = StackScreenProps<RootStackParamList, 'HomeDetails'>;
export const HomeDetails = ({navigation, route}: HomeDetailsProps) => {
  React.useLayoutEffect(() => {
    let title = 'Details';
    let generation = route.params.generation ?? 0;
    if (generation > 0) {
      title = `${title}[${generation}]`;
    }
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, route.params.generation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton
        title={'Clone Myself'}
        onPress={() => {
          navigation.push('HomeDetails', {
            generation: (route.params.generation ?? 0) + 1,
          });
        }}
      />
      <QuickTestButton
        title={'Home'}
        onPress={() => {
          navigation.navigate('HomeScreen', {});
        }}
      />
    </View>
  );
};
