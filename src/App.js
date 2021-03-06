import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
}

export default App;
