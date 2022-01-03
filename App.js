import { Provider } from 'react-redux';
import store from './store';
import { getCategories } from './store/actions/categories.actions';
import { MainNavigator } from './navigation/MainNavigator';

export default function App() {

  store.dispatch(getCategories);

  return (
    <Provider store = {store}>
      <MainNavigator />
    </Provider>
  );
}