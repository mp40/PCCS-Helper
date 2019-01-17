import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('the weight warning lights',()=>{
//   it('should display weight warning if base speed = 0',()=>{
//     expect(true).toEqual(true)
//   })
// })

describe('addToStat',()=>{
  it('should increment stat by one when called',()=>{

  })
  it('should not increment over 18',()=>{
    
  })
})