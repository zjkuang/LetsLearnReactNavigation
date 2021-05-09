import React from 'react';
import {View, LogBox} from 'react-native';
import {styles} from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, RootStackNavigationProp} from '../root';
import {HeDetailsModalView} from '../main/he-details/he-details-modal-view';
import {NeDetailsModalView} from '../main/ne-details/ne-details-modal-view';
import {ArDetailsModalView} from '../main/ar-details/ar-details-modal-view';
import {KrDetailsModalView} from '../main/kr-details/kr-details-modal-view';
import {useNavigation} from '@react-navigation/native';

export type RootStackModalContent =
  | 'he-details-did-you-know'
  | 'ne-details-did-you-know'
  | 'ar-details-did-you-know'
  | 'kr-details-did-you-know';
export type RootStackModalParamList = {
  headerTitle?: string;
  content: RootStackModalContent;
  onClose?: (reason?: string) => void;
};
type RootStackModalScreenProps = StackScreenProps<
  RootStackParamList,
  'RootStackModalScreen'
>;
export const RootStackModalScreen = (props: RootStackModalScreenProps) => {
  const rootNavigation = useNavigation<RootStackNavigationProp>();

  // https://stackoverflow.com/a/64078233
  React.useEffect(() => {
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }, []);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
      headerTitle: `${props.route.params.headerTitle ?? 'Modal'}`,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [props.navigation, props.route.params.headerTitle]);

  const onClose = React.useCallback(
    (reason?: string) => {
      rootNavigation.goBack();
      if (props.route.params.onClose) {
        props.route.params.onClose(reason);
      }
    },
    [props.route.params, rootNavigation],
  );

  return (
    <View style={styles.baseView}>
      {props.route.params.content === 'he-details-did-you-know' && (
        <HeDetailsModalView onClose={onClose} />
      )}
      {props.route.params.content === 'ne-details-did-you-know' && (
        <NeDetailsModalView onClose={onClose} />
      )}
      {props.route.params.content === 'ar-details-did-you-know' && (
        <ArDetailsModalView onClose={onClose} />
      )}
      {props.route.params.content === 'kr-details-did-you-know' && (
        <KrDetailsModalView onClose={onClose} />
      )}
    </View>
  );
};
