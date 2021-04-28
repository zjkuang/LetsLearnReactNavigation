import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './style';
import {RootStackParamList} from '../root';
import {QuickTestButton} from '../widgets';
import {IconLock, IconUnlock} from '../icons';

export type HomeDetailsParamList = {
  generation?: number;
};
type HomeDetailsProps = StackScreenProps<RootStackParamList, 'HomeDetails'>;
export const HomeDetails = (props: HomeDetailsProps) => {
  const navigation = useNavigation();
  const [locked, setLocked] = React.useState(false);

  React.useLayoutEffect(() => {
    let title = 'Details';
    let generation = props.route.params.generation ?? 0;
    if (generation > 0) {
      title = `${title}[${generation}]`;
    }
    navigation.setOptions({
      headerTitle: title,
      headerRight: () => (
        <TouchableOpacity
          style={styles.navigationHeaderRight}
          onPress={() => {
            setLocked(!locked);
          }}>
          {locked ? <IconLock color={'red'} /> : <IconUnlock color={'green'} />}
        </TouchableOpacity>
      ),
    });
  }, [locked, navigation, props.route.params.generation]);

  React.useEffect(() => {
    let removeListener = navigation.addListener('beforeRemove', e => {
      if (!locked) {
        return;
      }

      e.preventDefault();

      Alert.alert(
        'STOP!',
        'Click on the lock icon to unlock it before leaving this screen.',
        [{text: 'OK', style: 'cancel', onPress: () => {}}],
      );
    });

    return removeListener;
  }, [locked, navigation]);

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
