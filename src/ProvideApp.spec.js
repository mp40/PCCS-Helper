import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import ProvideApp from './ProvideApp';
import reducers from './reducers';
import { initialStore } from './helpers/initialStore';

const store = createStore(reducers, initialStore);

describe('Provide App', () => {
  it('should render App with a Provider', () => {
    const div = document.createElement('div');
    ReactDOM.render(ProvideApp(store), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
