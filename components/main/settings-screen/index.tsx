import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {QuickTestButton} from '../../widgets';
import {ReactNativeModalView} from './settings-react-native-modal';
import {TranslucentOverlay} from './overlay';

export type SettingsStackParamList = {
  SettingsScreen: {}; // navigation root
  // more navigation children can be added here
};
export type SettingsStackNavitationProp = StackNavigationProp<SettingsStackParamList>;
const SettingsStack = createStackNavigator<SettingsStackParamList>();
export const SettingsNavigationView = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsRootView}
      />
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

  const onShowFullScreenOverlayPressed = React.useCallback(() => {
    //
  }, []);

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
      <QuickTestButton
        title={'Show Full-screen Overlay'}
        onPress={onShowFullScreenOverlayPressed}
      />
      {showInScreenOverlay && (
        <TranslucentOverlay onClose={onCloseInScreenOverlay} />
      )}
    </View>
  );
};
