import * as React from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {MainTabView} from '../main';
import {styles} from './style';
import {IconClose} from '../icons';
import {RootStackNavigationProp} from '../root';

type ListItem<Id, Extra> = {
  index: number;
  id: Id;
  title?: string;
  subtitle?: string;
  extra?: Extra;
};

const drawerList: ListItem<string, undefined>[] = [
  {
    index: 0,
    id: 'feedback',
    title: 'Feedback',
  },
  {
    index: 1,
    id: 'about',
    title: 'About',
  },
];

const FlatListItemSeparator = () => {
  return <View style={styles.horizontalSeparator} />;
};

const DrawerContent = (props: DrawerContentComponentProps) => {
  const rootNavigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.baseView}>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            props.navigation.dispatch(DrawerActions.closeDrawer);
          }}>
          <IconClose />
        </TouchableOpacity>
      </View>

      <FlatList
        data={drawerList}
        ListHeaderComponent={FlatListItemSeparator}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.id === 'about') {
                  props.navigation.dispatch(DrawerActions.closeDrawer());
                  rootNavigation.navigate('RootStackModalScreen', {
                    content: 'about',
                  });
                }
              }}>
              <Text style={styles.flatListItem}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={FlatListItemSeparator}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export type DrawerParamList = {
  MainTabScreen?: {};
};
const Drawer = createDrawerNavigator<DrawerParamList>();
export const DrawerView = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="MainTabScreen" component={MainTabView} />
    </Drawer.Navigator>
  );
};
