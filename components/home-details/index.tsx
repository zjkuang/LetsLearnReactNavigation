import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './style';
import {QuickTestButton} from '../widgets';
import {IconLock, IconUnlock} from '../icons';
import {RootStackParamList} from '../root';

// There are two methods to get access to navigation.
// One is as used here by props.navigation, where
//   props: HomeDetailsProps
//   HomeDetailsProps = StackScreenProps<RootStackParamList, 'HomeDetails'>
// The other is by useNavigation, as displayed in HomeScreen

export type HomeDetailsParamList = {
  generation?: number;
};
type HomeDetailsProps = StackScreenProps<RootStackParamList, 'HomeDetails'>;
export const HomeDetails = (props: HomeDetailsProps) => {
  React.useLayoutEffect(() => {
    let title = 'Details';
    let generation = props.route.params.generation ?? 0;
    if (generation > 0) {
      title = `${title}[${generation}]`;
    }
    props.navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <TouchableOpacity
          style={styles.navigationHeaderRight}
          onPress={() => {
            //
          }}>
          <IconLock color={'red'} />
        </TouchableOpacity>
      ),
    });
  }, [props.navigation, props.route.params.generation]);

  const onCloneMyselfPressed = React.useCallback(() => {
    props.navigation.push('HomeDetails', {
      generation: (props.route.params.generation ?? 0) + 1,
    });
  }, [props.navigation, props.route.params.generation]);

  const onHomePressed = React.useCallback(() => {
    props.navigation.navigate('HomeScreen', {});
  }, [props.navigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Clone Myself'} onPress={onCloneMyselfPressed} />
      <QuickTestButton title={'Home'} onPress={onHomePressed} />
    </View>
  );
};
