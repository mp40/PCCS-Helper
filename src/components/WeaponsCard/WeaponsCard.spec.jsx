import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { getStore } from '../../helpers/testHelpers';

import ConnectedWeaponsCard from '.';

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

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs3');
        expect(wrapper.text()).toContain('M1911A1313');
      });

      it('should be possible to increase qty of a gun', () => {
        wrapper.find('.gear-table-row--container').at(0).find('.button--up').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs6');
        expect(wrapper.find('.gear-table-row--container').at(0).text()).toContain('M1911A1326');
      });

      it('should be possible to decrease qty of a gun', () => {
        wrapper.find('.gear-table-row--container').at(0).find('.button--down').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs3');
        expect(wrapper.find('.gear-table-row--container').at(0).text()).toContain('M1911A1313');
      });

      it('should be possible to increase spare ammo', () => {
        wrapper.find('.magazineRow').find('.button--up').simulate('click');

        expect(wrapper.find('.magazineRow').text()).toContain('7 round Mag0.710.7');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs3.7');
      });

      it('should be possible to decrease spare ammo', () => {
        wrapper.find('.magazineRow').find('.button--down').simulate('click');

        expect(wrapper.find('.magazineRow').text()).toContain('7 round Mag0.700');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs3');
      });

      it('should be possible to delete a gun', () => {
        wrapper.find('.gear-table-row--container').at(0).find('.button--close').simulate('click');

        expect(wrapper.text()).not.toContain('M1911A1');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs0');
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
      wrapper.find('button[children="M16"]').simulate('click');

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

        expect(wrapper.find('WeaponsCard').text()).not.toContain('20 round Mag');
      });

      it('should be able to replace magazine', () => {
        wrapper.find('CheckBox').at(1).simulate('click');

        expect(wrapper.find('WeaponsCard').text()).toContain('20 round Mag');
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

      it('should be possible to add underslung grenade launcher', () => {
        wrapper.find('button[children="Update Launcher"]').simulate('click');

        wrapper.find('button[children="M203"]').simulate('click');

        expect(wrapper.text()).toContain('HE Rnd');
      });

      it('should be possible to increase underslung grenade ammo', () => {
        wrapper.find('span[children="HEAT Rnd"]').closest('.magazineRow').find('.button--up').simulate('click');

        expect(wrapper.text()).toContain('HEAT Rnd0.5110.51');
      });

      it('should be possible to decrease underslung grenade ammo', () => {
        wrapper.find('span[children="HEAT Rnd"]').closest('.magazineRow').find('.button--down').simulate('click');

        expect(wrapper.text()).toContain('HEAT Rnd0.5100');
      });

      it('should be possible to remove underslung grenade launcher', () => {
        wrapper.find('button[children="Remove Launcher"]').simulate('click');

        expect(wrapper.text()).not.toContain('HE Rnd');
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
        wrapper.find('span[children="M2"]').closest('div').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs1.3');
        expect(wrapper.text()).toContain('M2');
      });

      it('should be possible to increment grenade qty up', () => {
        wrapper.find('.gear-table-row--container').find('.button--up').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs2.6');
        expect(wrapper.find('.gear-table-row--container').text()).toContain('M222.6');
      });

      it('should be possible to increment grenade qty down', () => {
        wrapper.find('.gear-table-row--container').find('.button--down').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs1.3');
        expect(wrapper.find('.gear-table-row--container').text()).toContain('M211.3');
      });

      it('should be possible to remove grenade', () => {
        wrapper.find('.gear-table-row--container').find('.button--close').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs0');
        expect(wrapper.find('.gear-table-row--container').exists()).toBe(false);
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

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs6.5');
        expect(wrapper.text()).toContain('M79');
      });

      it('should be possible to increment launcher qty', () => {
        wrapper.find('.gear-table-row--container').at(0).find('.button--up').simulate('click');

        expect(wrapper.find('.gear-table-row--container').at(0).text()).toContain('M796.5213');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs13');
      });

      it('should be possible to decrement launcher qty', () => {
        wrapper.find('.gear-table-row--container').at(0).find('.button--down').simulate('click');

        expect(wrapper.find('.gear-table-row--container').at(0).text()).toContain('M796.516.5');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs6.5');
      });

      it('should be possible to increment launcher ammo', () => {
        wrapper.find('.magazineRow').at(0).find('.button--up').simulate('click');

        expect(wrapper.find('.magazineRow').at(0).text()).toContain('HEAT Rnd0.5110.51');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs7.01');
      });

      it('should be possible to decrement launcher ammo', () => {
        wrapper.find('.magazineRow').at(0).find('.button--down').simulate('click');

        expect(wrapper.find('.magazineRow').at(0).text()).toContain('HEAT Rnd0.5100');
        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs6.5');
      });

      it('should be possible to remove launcher', () => {
        wrapper.find('.gear-table-row--container').find('.button--close').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs0');
        expect(wrapper.find('.gear-table-row--container').exists()).toBe(false);
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
        wrapper.find('span[children="M2"]').closest('div').simulate('click');

        wrapper.find('button[children="Add Launcher"]').simulate('click');
        wrapper.find('span[children="M79"]').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs10.8');

        wrapper.find('button[children="Clear All"]').simulate('click');

        expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs0');
      });
    });
  });
});
