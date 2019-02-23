import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme'
import App from './App';
import Button from '@material-ui/core/Button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('Character Generation',()=>{
//   it('should render Character Generation page',()=>{
//     const wrapper = mount(<App/>)
//     find('#activateCreateChar').simulate('click')
//     expect(wrapper.text()).toContain('Place Holder')
//   })
// })