import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './style';
import {RootStackParamList} from '../root';
import {QuickTestButton} from '../widgets';

export type HomeDetailsParamList = {
  generation?: number;
};
type HomeDetailsProps = StackScreenProps<RootStackParamList, 'HomeDetails'>;
export const HomeDetails = (props: HomeDetailsProps) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    let title = 'Details';
    let generation = props.route.params.generation ?? 0;
    if (generation > 0) {
      title = `${title}[${generation}]`;
    }
    props.navigation.setOptions({
      headerTitle: title,
    });
  }, [props.navigation, props.route.params.generation]);

  const onCloneMyselfPressed = React.useCallback(() => {
    props.navigation.push('HomeDetails', {
      generation: (props.route.params.generation ?? 0) + 1,
    });
  }, [props.navigation, props.route.params.generation]);

  const onBackButtonPressed = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onHomeButtonPressed = React.useCallback(() => {
    props.navigation.navigate('HomeScreen', {});
  }, [props.navigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Clone Myself'} onPress={onCloneMyselfPressed} />
      <QuickTestButton title={'Back'} onPress={onBackButtonPressed} />
      <QuickTestButton title={'Home'} onPress={onHomeButtonPressed} />
    </View>
  );
};
