import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {QuickTestButton} from '../../widgets';
import {ReactNativeModalView} from './settings-react-native-modal';
import {TranslucentOverlay} from './overlay';
import {
  TopTabScreenParamList,
  TopTabScreen,
  TopTabTitle,
} from '../top-tab-screen';

export type SettingsStackParamList = {
  SettingsScreen: {}; // navigation root
  TopTabScreen: TopTabScreenParamList;
  // more navigation children can be added here
};
export type SettingsStackNavitationProp =
  StackNavigationProp<SettingsStackParamList>;
const SettingsStack = createStackNavigator<SettingsStackParamList>();
export const SettingsNavigationView = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsRootView}
      />
      <SettingsStack.Screen name="TopTabScreen" component={TopTabScreen} />
    </SettingsStack.Navigator>
  );
};

export const SettingsRootView = () => {
  const stackNavigation = useNavigation<SettingsStackNavitationProp>();
  const [showReactNativeModal, setShowReactNativeModal] = React.useState(false);
  const [showInScreenOverlay, setShowInScreenOverlay] = React.useState(false);

  React.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerTitle: 'Settings',
      headerTitleStyle: {
        alignSelf: 'center',
      },
    });
  }, [stackNavigation]);

  const onShowReactNativeModalPressed = React.useCallback(() => {
    setShowReactNativeModal(true);
  }, []);

  const onReactNativeModalClosed = React.useCallback(() => {
    setShowReactNativeModal(false);
  }, []);

  const onShowInScreenOverlayPressed = React.useCallback(() => {
    setShowInScreenOverlay(true);
  }, []);

  const onCloseInScreenOverlay = React.useCallback(() => {
    setShowInScreenOverlay(false);
  }, []);

  const onTopTabButtonPressed = React.useCallback(
    (context: TopTabTitle) => {
      stackNavigation.push('TopTabScreen', {initialTab: context});
    },
    [stackNavigation],
  );

  return (
    <View style={styles.baseView}>
      <QuickTestButton
        title={'Show React Native Modal'}
        onPress={onShowReactNativeModalPressed}
      />
      {showReactNativeModal && (
        <ReactNativeModalView
          visible={showReactNativeModal}
          text={"Setting's React Native Modal"}
          onClose={onReactNativeModalClosed}
        />
      )}
      <QuickTestButton
        title={'Show In-screen Overlay'}
        onPress={onShowInScreenOverlayPressed}
      />
      <View style={styles.topTabPanel}>
        <Text style={styles.topTabLabel}>Top-Tab</Text>
        <View style={styles.topTabButtonsContainer}>
          <QuickTestButton
            title={'One'}
            onPress={() => {
              onTopTabButtonPressed('One');
            }}
          />
          <QuickTestButton
            title={'Two'}
            onPress={() => {
              onTopTabButtonPressed('Two');
            }}
          />
          <QuickTestButton
            title={'Three'}
            onPress={() => {
              onTopTabButtonPressed('Three');
            }}
          />
        </View>
      </View>
      {/* // To make the in-view overlay work properly, besides the translucentOverlay style definition, it must be the last one of the immediate child components of the base view in JSX */}
      {showInScreenOverlay && (
        <TranslucentOverlay onClose={onCloseInScreenOverlay} />
      )}
    </View>
  );
};
