import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {StackScreenProps} from '@react-navigation/stack';
import {ArStackParamList} from '../ar-screen';
import {QuickTestButton} from '../../widgets';
import {RootStackNavigationProp} from '../../root';
import {useNavigation} from '@react-navigation/native';

export type ArDetailsParamList = {
  headerTitle?: string;
  number?: number;
  name?: string;
  abbreviation?: string;
  weight?: number;
};
type ArDetailsProps = StackScreenProps<ArStackParamList, 'ArDetails'>;
export const ArDetails = (props: ArDetailsProps) => {
  const rootNavigation = useNavigation<RootStackNavigationProp>();

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: `${props.route.params.headerTitle ?? 'Ar-Details'}`,
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [props.navigation, props.route.params.headerTitle]);

  const onDidYouKnowPressed = React.useCallback(() => {
    rootNavigation.navigate('RootStackModalScreen', {
      headerTitle: 'Did you know',
      content: 'ar-details-did-you-know',
    });
  }, [rootNavigation]);

  return (
    <View style={styles.baseView}>
      <Text>{`number: ${props.route.params.number ?? ''}`}</Text>
      <Text>{`name: ${props.route.params.name ?? ''}`}</Text>
      <Text>{`abbreviation: ${props.route.params.abbreviation ?? ''}`}</Text>
      <Text>{`weight: ${props.route.params.weight ?? ''}`}</Text>
      <QuickTestButton
        title={'Did you know...'}
        onPress={onDidYouKnowPressed}
      />
    </View>
  );
};
