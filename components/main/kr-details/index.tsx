import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from './style';
import {KrStackParamList} from '../kr-screen';

export type KrDetailsParamList = {
  headerTitle?: string;
  number?: number;
  name?: string;
  abbreviation?: string;
  weight?: number;
};
type KrDetailsProps = StackScreenProps<KrStackParamList, 'KrDetails'>;
export const KrDetails = (props: KrDetailsProps) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: `${props.route.params.headerTitle ?? 'Kr-Details'}`,
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
