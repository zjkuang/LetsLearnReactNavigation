import React from 'react';
import {SafeAreaView, View, Text, Modal} from 'react-native';
import {styles} from './style';
import {QuickTestButton} from '../../../widgets';

export type SettingsReactNativeModalProps = {
  visible: boolean;
  onClose: (reason?: string) => void;
  text?: string;
};
export const ReactNativeModalView = (props: SettingsReactNativeModalProps) => {
  const onClosePressed = React.useCallback(() => {
    props.onClose();
  }, [props]);

  return (
    <Modal
      visible={props.visible}
      animationType={'slide'}
      presentationStyle={'pageSheet'}>
      <SafeAreaView>
        <View style={styles.baseView}>
          <Text>{`${props.text ?? 'A React Native Modal'}`}</Text>
          <QuickTestButton title={'Close'} onPress={onClosePressed} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
