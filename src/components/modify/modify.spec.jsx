import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import { getStore } from '../../helpers/testHelpers';

import ConnectedModifyCard from '.';
import ModifyCard from './component';

import { initialStore } from '../../helpers/initialStore';

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

initialStore.currentCharacter.firearms.push(m16);

// const firearm = firearms[firearmIndex];

// let headerText;
// if (firearm) {
//   headerText = firearm.name;
// } else {
//   headerText = 'Error: Firearm Not Found';
// }
describe('Modify Card', () => {
  it('should render firearm name', () => {
    const wrapper = shallow(<ModifyCard firearms={[{ ...m16 }]} firearmIndex={0} />);

    expect(wrapper.text()).toContain('M16');
  });

  it('should render mesage if firearm not found', () => {
    const wrapper = shallow(<ModifyCard firearms={[]} firearmIndex={0} />);

    expect(wrapper.text()).toContain('Error: Firearm Not Found');
  });
});

describe('Modify Firearm Intergration', () => {
  const store = getStore(initialStore);

  const wrapper = mount(
    <Provider store={store}>
      <ConnectedModifyCard firearmIndex={0} />
    </Provider>,
  );

  it('should be able to add custom magazine', () => {
    const form = wrapper.find('.customMagazineForm');

    const capacity = form.find('TextInput').find('[heading="Capacity"]');
    const weight = form.find('TextInput').find('[heading="Weight"]');
    const type = form.find('TextInput').find('[heading="Type"]');

    capacity.find('input').simulate('change', { target: { value: '18' } });
    weight.find('input').simulate('change', { target: { value: '.65' } });
    type.find('input').simulate('change', { target: { value: 'test' } });

    form.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('test180.65');
  });

  it('should be able to set primary magazine', () => {
    wrapper.find('.selectPrimaryButton').at(1).simulate('click');

    expect(wrapper.find('.primaryMagazine').text()).toContain('Mag301');
  });

  it('should be able to remove magazine', () => {
    wrapper.find('CheckBox').at(1).simulate('click');

    expect(wrapper.find('.removedMagazine').exists()).toBe(true);
  });

  it('should be able to replace magazine', () => {
    wrapper.find('CheckBox').at(1).simulate('click');

    expect(wrapper.find('.removedMagazine').exists()).toBe(false);
  });

  it('should be able to add modification to firearm', () => {
    const form = wrapper.find('.modifyWeightForm');

    const mod = form.find('TextInput').find('[heading="Modification"]');
    const weight = form.find('TextInput').find('[heading="Weight"]');

    mod.find('input').simulate('change', { target: { value: 'torch' } });
    weight.find('input').simulate('change', { target: { value: '.5' } });

    form.find('button[children="Submit"]').simulate('click');

    expect(wrapper.text()).toContain('torch0.5 lbs');
  });

  it('should be able to remove firearm modification', () => {
    wrapper.find('.entry').find('button').simulate('click');

    expect(wrapper.text()).not.toContain('torch0.5 lbs');
  });

  it('should be able to remove all modifications and custom mags', () => {
    const form = wrapper.find('.modifyWeightForm');

    const mod = form.find('TextInput').find('[heading="Modification"]');
    const weight = form.find('TextInput').find('[heading="Weight"]');

    mod.find('input').simulate('change', { target: { value: 'torch' } });
    weight.find('input').simulate('change', { target: { value: '.5' } });

    form.find('button[children="Submit"]').simulate('click');

    wrapper.find('button[children="Remove All"]').simulate('click');

    expect(wrapper.text()).not.toContain('torch0.5 lbs');
    expect(wrapper.text()).not.toContain('test180.65');
  });

  it('should be possible to add underslung grenade launcher', () => {
    wrapper.find('button[children="Update Launcher"]').simulate('click');

    wrapper.find('button[children="M203"]').simulate('click');

    expect(wrapper.text()).toContain('LauncherM203');
  });

  it('should be possible to remove underslung grenade launcher', () => {
    wrapper.find('button[children="Remove Launcher"]').simulate('click');

    expect(wrapper.text()).toContain('LauncherNone');
  });

  it('should be possible to add optics', () => {
    wrapper.find('button[children="Update Optic"]').simulate('click');

    wrapper.find('button[children="AAS"]').simulate('click');

    expect(wrapper.text()).toContain('FOV: 10');
  });

  it('should be possible to remove optics', () => {
    wrapper.find('button[children="Remove Optic"]').simulate('click');

    expect(wrapper.text()).not.toContain('FOV: 10');
  });
});
