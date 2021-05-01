import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {MobileStackParamList} from '..';
import {QuickTestButton} from '../../widgets';

export type MobileAlphaScreenParamList = {
  isRoot?: boolean;
};
type MobileAlphaScreenProps = StackScreenProps<
  MobileStackParamList,
  'MobileAlphaScreen'
>;
export const MobileAlphaScreen = (props: MobileAlphaScreenProps) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: `Alpha ${props.route.params.isRoot ? ' \u2055' : ''}`,
    });
  }, [props.navigation, props.route.params.isRoot]);

  const onBetaButtonPressed = React.useCallback(() => {
    props.navigation.push('MobileBetaScreen', {isRoot: false});
  }, [props.navigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Beta'} onPress={onBetaButtonPressed} />
    </View>
  );
};
