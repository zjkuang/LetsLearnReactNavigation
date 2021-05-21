import React from 'react';
import {LogBox} from 'react-native';
import {RootView} from './components/root';

LogBox.ignoreLogs(['If you want to use Reanimated 2 then']);

const App = () => {
  return (
    <>
      <RootView />
    </>
  );
};

export default App;
