import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {MobileStackParamList} from '..';
import {QuickTestButton} from '../../widgets';

export type MobileBetaScreenParamList = {
  isRoot?: boolean;
};
type MobileBetaScreenProps = StackScreenProps<
  MobileStackParamList,
  'MobileBetaScreen'
>;
export const MobileBetaScreen = (props: MobileBetaScreenProps) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: `Beta ${props.route.params.isRoot ? '\u2055' : ''}`,
    });
  }, [props.navigation, props.route.params.isRoot]);

  const onAlphaButtonPressed = React.useCallback(() => {
    props.navigation.push('MobileAlphaScreen', {});
  }, [props.navigation]);

  return (
    <View style={styles.baseView}>
      <QuickTestButton title={'Alpha'} onPress={onAlphaButtonPressed} />
    </View>
  );
};
