import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {QuickTestButton} from '../../../widgets';
import {IconClose} from '../../../icons';

type HeDetailsModalViewProps = {
  text?: string;
  onClose: (reason: string) => void;
};
export const HeDetailsModalView = (props: HeDetailsModalViewProps) => {
  const onCancelPressed = React.useCallback(() => {
    props.onClose('cancel');
  }, [props]);

  const onClosePressed = React.useCallback(() => {
    props.onClose('close');
  }, [props]);

  return (
    <View style={styles.baseView}>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancelPressed}>
        <IconClose size={30} />
      </TouchableOpacity>
      <Text>{`${
        props.text ?? 'Helium is a member of Noble Gas family.'
      }`}</Text>
      <QuickTestButton title={'Close'} onPress={onClosePressed} />
    </View>
  );
};
