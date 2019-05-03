import {mountAppWithStore} from './helpers/testHelpers'
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(mountAppWithStore(),div);
  ReactDOM.unmountComponentAtNode(div);
});
