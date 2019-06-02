import ReactDOM from 'react-dom';
import { mountAppWithStore } from './helpers/testHelpers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(mountAppWithStore(), div);
  ReactDOM.unmountComponentAtNode(div);
});
