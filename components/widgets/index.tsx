import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

type QuickTestButtonProps = {
  title: string;
  onPress?: () => void;
};
export const QuickTestButton = (props: QuickTestButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.textAs_iOS_Button}>{props.title}</Text>
    </TouchableOpacity>
  );
};
