import ReactDOM from 'react-dom';
import ProvideApp from './ProvideApp';

import { getStore } from './helpers/testStore';

describe('Provide App', () => {
  const store = getStore();

  it('should render App with a Provider', () => {
    const div = document.createElement('div');
    ReactDOM.render(ProvideApp(store), div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
