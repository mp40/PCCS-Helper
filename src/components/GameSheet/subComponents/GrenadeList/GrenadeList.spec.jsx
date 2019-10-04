import React from 'react';
import { shallow } from 'enzyme';

import GrenadeList from './GrenadeList';

const grenadeDouble = [{ name: 'The Holy Hand Grenade Of Antioch', qty: 1 }];
const createGrenade = (name, qty) => ({ name, qty });

describe('The Grenade List', () => {
  const wrapper = shallow(<GrenadeList grenades={[]} />);
  it('should render "none" if there are no grenades', () => {
    expect(wrapper.text()).toContain('none');
  });
  it('should render a grenade list with one grenade', () => {
    wrapper.setProps({ grenades: grenadeDouble });
    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
    expect(wrapper.text()).not.toContain('none');
  });
  it('should render a grenade list of multiple grenades', () => {
    wrapper.setProps({ grenades: [...grenadeDouble, createGrenade('other grenade', 2)] });
    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
    expect(wrapper.text()).toContain('other grenade');
  });
  it('should render a grenade qty', () => {
    wrapper.setProps({ grenades: [...grenadeDouble, createGrenade('other grenade', 2)] });
    expect(wrapper.text()).toContain('The Holy Hand Grenade Of Antioch');
    expect(wrapper.text()).toContain('1');
    expect(wrapper.text()).toContain('2');
  });
});
