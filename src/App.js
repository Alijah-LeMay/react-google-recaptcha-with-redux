import { Provider } from 'react-redux';
import store from './store';

import MyReCaptcha from './components/MyReCaptcha';

function App() {
  return (
    <>
      <Provider store={store}>
        <MyReCaptcha />
      </Provider>
    </>
  );
}

export default App;
