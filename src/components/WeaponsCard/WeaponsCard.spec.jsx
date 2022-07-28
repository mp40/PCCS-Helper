import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { getStore } from '../../helpers/testStore';
import { getInitialReduxState } from '../../helpers/initialStore';

import ConnectedWeaponsCard from '.';

describe('weapons card intergration tests', () => {
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

  describe('firearm underslung launcher', () => {
    const m16 = {
      name: 'M16',
      qty: 1,
      mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }],
      launcher: { attached: 'M203', mag: [{ qty: 0 }] },
    };

    const storeWithM203 = getInitialReduxState();
    storeWithM203.currentCharacter.firearms = [m16];
    const store = getStore(storeWithM203);

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedWeaponsCard />
      </Provider>,
    );

    it('should be possible to increase ammo', () => {
      let row = wrapper.find('span[children="HEAT Rnd"]').closest('div');
      row.find('.button--up').simulate('click');

      row = wrapper.find('span[children="HEAT Rnd"]').closest('div');
      expect(row.text()).toContain('HEAT Rnd0.511');
    });

    it('should be possible to decrease ammo', () => {
      let row = wrapper.find('span[children="HEAT Rnd"]').closest('div');
      row.find('.button--down').simulate('click');

      row = wrapper.find('span[children="HEAT Rnd"]').closest('div');
      expect(row.text()).toContain('HEAT Rnd0.510');
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
      wrapper.find('span[children="M2"]').closest('button').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs1.3');
      expect(wrapper.text()).toContain('M2');
    });

    it('should be possible to increment grenade qty up', () => {
      wrapper.find('.gear-table-row--container').find('.button--up').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs2.6');
      expect(wrapper.find('.gear-table-row--container').text()).toContain('M21.322.6');
    });

    it('should be possible to increment grenade qty down', () => {
      wrapper.find('.gear-table-row--container').find('.button--down').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs1.3');
      expect(wrapper.find('.gear-table-row--container').text()).toContain('M21.311.3');
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
      wrapper.find('span[children="M2"]').closest('button').simulate('click');

      wrapper.find('button[children="Add Launcher"]').simulate('click');
      wrapper.find('span[children="M79"]').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs10.8');

      wrapper.find('button[children="Clear All"]').simulate('click');

      expect(wrapper.find('.gear-table-header--container').text()).toContain('Lbs0');
    });
  });
});
