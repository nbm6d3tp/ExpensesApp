import Navigator from './src/navigation/Navigator';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar} from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import {useEffect} from 'react';
import {colors} from './src/constants/colors';

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(colors.primary500);
  });
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}
