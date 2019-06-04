import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ProvideApp from './ProvideApp';
import reducers from './reducers';
import { initialStore } from './helpers/initialStore';

const store = createStore(reducers, initialStore, applyMiddleware(thunk));

describe('Provide App', () => {
  it('should render App with a Provider', () => {
    const div = document.createElement('div');
    ReactDOM.render(ProvideApp(store), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
