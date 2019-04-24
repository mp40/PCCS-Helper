import {mountAppWithStore} from './helpers/testHelpers'
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {App} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(mountAppWithStore(),div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App methods',()=>{
  const wrapper = shallow(<App/>)
  it('should add qty key to equipment objects',()=>{
    wrapper.instance().addEquipment({weight: 2.2})
    expect(wrapper.state().gear.equipment).toEqual([{weight:2.2, qty:1}])
  })
})
