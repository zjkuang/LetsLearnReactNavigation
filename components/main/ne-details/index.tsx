import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './style';
import {NeStackParamList} from '../ne-screen';

export type NeDetailsParamList = {
  headerTitle?: string;
  number?: number;
  name?: string;
  abbreviation?: string;
  weight?: number;
};
type NeDetailsProps = StackScreenProps<NeStackParamList, 'NeDetails'>;
export const NeDetails = (props: NeDetailsProps) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: `${props.route.params.headerTitle ?? 'Ne-Details'}`,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [props.navigation, props.route.params.headerTitle]);

  return (
    <View style={styles.baseView}>
      <Text>{`number: ${props.route.params.number ?? ''}`}</Text>
      <Text>{`name: ${props.route.params.name ?? ''}`}</Text>
      <Text>{`abbreviation: ${props.route.params.abbreviation ?? ''}`}</Text>
      <Text>{`weight: ${props.route.params.weight ?? ''}`}</Text>
    </View>
  );
};
