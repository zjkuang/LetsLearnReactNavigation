import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './style';

export const RootView = () => {
  return (
    <SafeAreaView>
      <View style={styles.baseView}>
        <Text>Root View</Text>
      </View>
    </SafeAreaView>
  );
};
