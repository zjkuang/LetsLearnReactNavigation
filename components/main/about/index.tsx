import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {QuickTestButton} from '../../widgets';

type AboutModalViewProps = {
  onClose: (reason: string) => void;
};
export const AboutModalView = (props: AboutModalViewProps) => {
  const onClosePressed = React.useCallback(() => {
    props.onClose('close');
  }, [props]);

  return (
    <View style={styles.baseView}>
      <Text>About</Text>
      <QuickTestButton title={'Close'} onPress={onClosePressed} />
    </View>
  );
};
