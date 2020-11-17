import React from 'react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
// import { Provider } from 'react-redux';
import WeaponsCard, { getSelectedWeapons } from './component';
import { getStore } from '../../helpers/testHelpers';

import ConnectedWeaponsCard from '.';

const waitOneSec = (simulate) => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 1001);
}));

describe('The Weapons Card', () => {
  describe('weapons intergration tests', () => {
    describe('selecting firearms', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should be able to select a weapon', () => {
        wrapper.find('button[children="Add Firearm"]').simulate('click');
        wrapper.find('span[children="M1911A1"]').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M1911A1313');
        expect(wrapper.find('thead').text()).toContain('lbs3');
      });

      it('should be possible to increase qty of a gun', () => {
        wrapper.find('#qtyUpFirearm').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M1911A1326');
        expect(wrapper.find('thead').text()).toContain('lbs6');
      });

      it('should be possible to decrease qty of a gun', () => {
        wrapper.find('#qtyDownFirearm').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M1911A1313');
        expect(wrapper.find('thead').text()).toContain('lbs3');
      });

      it('should be possible to increase spare ammo', () => {
        wrapper.find('#qtyUpMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').text()).toContain('1 x 7 round Mag');
        expect(wrapper.find('thead').text()).toContain('lbs3.7');
      });

      it('should be possible to decrease spare ammo', () => {
        wrapper.find('#qtyDownMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').text()).toContain('0 x 7 round Mag');
        expect(wrapper.find('thead').text()).toContain('lbs3');
      });

      it('should be possible to delete a gun', () => {
        wrapper.find('.removeM1911A1').simulate('click');

        expect(wrapper.find('tbody').text()).not.toContain('M1911A1313');
        expect(wrapper.find('thead').text()).toContain('lbs0');
      });
    });

    describe('modifying firearms', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      wrapper.find('button[children="Add Firearm"]').simulate('click');
      wrapper.find('span[children="M16"]').simulate('click');
      wrapper.find('.close').simulate('click');
      wrapper.find('span[children="M16"]').simulate('click');

      it('should be able to add custom magazine', () => {
        wrapper.find('button[children="add magazine"]').simulate('click');

        const capacity = wrapper.find('TextInput').find('[heading="Capacity"]');
        const weight = wrapper.find('TextInput').find('[heading="Weight"]');
        const type = wrapper.find('TextInput').find('[heading="Type"]');

        capacity.find('input').simulate('change', { target: { value: '18' } });
        weight.find('input').simulate('change', { target: { value: '.65' } });
        type.find('input').simulate('change', { target: { value: 'test' } });

        wrapper.find('button[children="Submit"]').simulate('click');

        expect(wrapper.text()).toContain('test180.65');
      });

      it('should be able to set primary magazine', () => {
        wrapper.find('.selectPrimaryButton').at(1).simulate('click');

        expect(wrapper.find('.primaryMagazine').text()).toContain('Mag301');
      });

      it('should be able to remove magazine', () => {
        wrapper.find('CheckBox').at(1).simulate('click');

        expect(wrapper.find('WeaponsCard').text()).not.toContain('0 x 20 round Mag');
      });

      it('should be able to replace magazine', () => {
        wrapper.find('CheckBox').at(1).simulate('click');

        expect(wrapper.find('WeaponsCard').text()).toContain('0 x 20 round Mag');
      });

      it('should be able to add modification to firearm', () => {
        wrapper.find('button[children="add modification"]').simulate('click');

        const note = wrapper.find('TextInput').find('[heading="Note"]');
        const weight = wrapper.find('TextInput').find('[heading="Weight"]');

        note.find('input').simulate('change', { target: { value: 'torch' } });
        weight.find('input').simulate('change', { target: { value: '.5' } });

        wrapper.find('button[children="Submit"]').simulate('click');

        expect(wrapper.text()).toContain('torch0.5 lbs');
      });

      it('should be able to remove firearm modification', () => {
        wrapper.find('.entry').find('button').simulate('click');

        expect(wrapper.text()).not.toContain('torch0.5 lbs');
      });

      it('should be able to remove all modifications and custom mags', () => {
        wrapper.find('button[children="add modification"]').simulate('click');

        const note = wrapper.find('TextInput').find('[heading="Note"]');
        const weight = wrapper.find('TextInput').find('[heading="Weight"]');

        note.find('input').simulate('change', { target: { value: 'torch' } });
        weight.find('input').simulate('change', { target: { value: '.5' } });

        wrapper.find('button[children="Submit"]').simulate('click');

        wrapper.find('button[children="remove all mods"]').simulate('click');

        expect(wrapper.text()).not.toContain('torch0.5 lbs');
        expect(wrapper.text()).not.toContain('test180.65');
      });

      it('should be possible to close modification modal', () => {
        wrapper.find('.close').simulate('click');

        expect(wrapper.find('FirearmModifyModal').exists()).toBe(false);
      });
    });

    describe('selecting grenades', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should be possible to select a grenade', () => {
        wrapper.find('button[children="Add Grenade"]').simulate('click');
        wrapper.find('.selectM2').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M21.311.3');
        expect(wrapper.find('thead').text()).toContain('lbs1.3');
      });

      it('should be possible to increment grenade qty up', () => {
        wrapper.find('.M2Row').find('#qtyUpGrenade').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M21.322.6');
        expect(wrapper.find('thead').text()).toContain('lbs2.6');
      });

      it('should be possible to increment grenade qty down', () => {
        wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M21.311.3');
        expect(wrapper.find('thead').text()).toContain('lbs1.3');
      });

      it('should be possible to remove grenade', () => {
        wrapper.find('.removeM2').simulate('click');

        expect(wrapper.find('tbody').text()).not.toContain('M2');
        expect(wrapper.find('thead').text()).toContain('lbs0');
      });
    });

    describe('selecting launchers', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should be possible to select a launcher', () => {
        wrapper.find('button[children="Add Launcher"]').simulate('click');
        wrapper.find('span[children="M79"]').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M796.516.5');
        expect(wrapper.find('thead').text()).toContain('lbs6.5');
      });

      it('should be possible to increment launcher qty', () => {
        wrapper.find('#qtyUpLauncher').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M796.5213');
        expect(wrapper.find('thead').text()).toContain('lbs13');
      });

      it('should be possible to decrement launcher qty', () => {
        wrapper.find('#qtyDownLauncher').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M796.516.5');
        expect(wrapper.find('thead').text()).toContain('lbs6.5');
      });

      it('should be possible to increment launcher ammo', () => {
        wrapper.find('#qtyUpMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').at(0).text()).toContain('1 x HEAT');
        expect(wrapper.find('thead').text()).toContain('lbs7.01');
      });

      it('should be possible to decrement launcher ammo', () => {
        wrapper.find('#qtyDownMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').at(0).text()).toContain('0 x HEAT');
        expect(wrapper.find('thead').text()).toContain('lbs6.5');
      });

      it('should be possible to remove launcher', () => {
        wrapper.find('.removeM79').simulate('click');

        expect(wrapper.find('tbody').text()).not.toContain('M79');
        expect(wrapper.find('thead').text()).toContain('lbs0');
      });
    });

    describe('clearing all weapons', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should remove all weapons', () => {
        wrapper.find('button[children="Add Firearm"]').simulate('click');
        wrapper.find('span[children="M1911A1"]').simulate('click');

        wrapper.find('button[children="Add Grenade"]').simulate('click');
        wrapper.find('.selectM2').simulate('click');

        wrapper.find('button[children="Add Launcher"]').simulate('click');
        wrapper.find('span[children="M79"]').simulate('click');

        expect(wrapper.find('thead').text()).toContain('lbs10.8');

        wrapper.find('button[children="Clear All"]').simulate('click');

        expect(wrapper.find('thead').text()).toContain('lbs0');
      });
    });
  });
});

// mptodo - check if I need this shit
// describe('getSelectedWeapons function', () => {
//   it('should return the firearms list', () => {
//     const firearms = [{ name: 'M16' }, { name: 'M1911A1' }];
//     expect(getSelectedWeapons(firearms)).toStrictEqual(firearms);
//   });
//   it('should return an empty array if firearms is undefined', () => {
//     expect(getSelectedWeapons(undefined)).toStrictEqual([]);
//   });
// });
