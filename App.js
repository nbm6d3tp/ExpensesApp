import Navigator from './src/navigation/Navigator';

import store from './src/redux/store';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
