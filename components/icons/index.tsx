import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type IconComponentProps = {
  size?: number;
  color?: string;
};

export const IconClose = (props: IconComponentProps) => {
  const name = 'close';
  const size = props.size || 24;
  return <AntDesign name={name} color={props.color} size={size} />;
};

export const IconLock = (props: IconComponentProps) => {
  const name = 'lock';
  const size = props.size || 24;
  return <FontAwesome name={name} color={props.color} size={size} />;
};

export const IconUnlock = (props: IconComponentProps) => {
  const name = 'unlock';
  const size = props.size || 24;
  return <FontAwesome name={name} color={props.color} size={size} />;
};
