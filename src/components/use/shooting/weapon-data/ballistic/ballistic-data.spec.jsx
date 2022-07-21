import React from 'react';
import { mount } from 'enzyme';
import { AlmStateProvider, WeaponProvider } from '../../context';

import FirearmData from './index';

import { firearms } from '../../../../../data/firearms';
import { launcherList } from '../../../../../data/launchers';
import { hydrateFirearmByObject } from '../../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM1911A1 = () => ({ ...firearms.M1911A1 });
const testM79 = () => ({ ...launcherList.M79 });

describe('Weapon Data', () => {
  const getWrapper = (range, rof, alm, firearm) => mount(
    <AlmStateProvider state={{ range, target: 'Standing Exposed' }}>
      <WeaponProvider weapon={firearm}>
        <FirearmData level={0} alm={alm} rof={rof} />
      </WeaponProvider>
    </AlmStateProvider>,
  );

  const getWrapperWithFamas = (range, rof) => getWrapper(range, rof, 10, { ...hydrateFirearmByObject(testFAMAS()) });
  const getWrapperWithM1911 = (range, alm) => getWrapper(range, 'Single', alm, { ...hydrateFirearmByObject(testM1911A1()) });
  const getWrapperWithM79 = () => getWrapper(50, 'Single', 0, { ...testM79() });

  describe('Ballastic Accuracy', () => {
    it('should use firearm ballistic accuracy instead of ALM if it is less', () => {
      const wrapper = getWrapperWithM1911(100, 16);

      expect(wrapper.text()).toContain('ALM: 15');
    });

    it('should not use firearm ballistic accuracy if it is greater than ALM', () => {
      const wrapper = getWrapperWithM1911(100, 14);

      expect(wrapper.find('.data').text()).toContain('ALM: 14');
    });

    it('should provide visual feed back if BA used', () => {
      const wrapper = getWrapperWithM1911(100, 15);

      expect(wrapper.find('.baReached').exists()).toBe(true);
    });

    it('should not show the visual feed back if BA not used', () => {
      const wrapper = getWrapperWithM1911(100, 14);

      expect(wrapper.find('.baReached').exists()).toBe(false);
    });
  });

  describe('Minimum Arc by range', () => {
    it('should not show the MA if Single rof selected', () => {
      const wrapper = getWrapperWithFamas(85, 'Single');

      expect(wrapper.text()).not.toContain('MA:');
    });

    it('should show the MA if in Auto based on selected range of 85', () => {
      const wrapper = getWrapperWithFamas(85, 'Auto');

      expect(wrapper.text()).toContain('MA: 4');
    });

    it('should show the MA if in 3RB based on selected range of 85', () => {
      const wrapper = getWrapperWithFamas(85, '3RB');

      expect(wrapper.text()).toContain('MA: 4');
    });

    it('should show the MA if in Auto based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Auto');

      expect(wrapper.text()).toContain('MA: 0.4');
    });
  });

  describe('Selecting available ammo types', () => {
    it('should show ammo type as FMJ if it is the default', () => {
      const wrapper = getWrapperWithFamas(85, 'Single');

      expect(wrapper.find('.ammoMarker').at(0).props().className).toContain('selected');
      expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
    });

    it('should be possible to select JHP if available', () => {
      const wrapper = getWrapperWithFamas(85, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.find('.ammoMarker').at(0).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(1).props().className).toContain('selected');
      expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
    });

    it('should be possible to select AP if available', () => {
      const wrapper = getWrapperWithFamas(85, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.find('.ammoMarker').at(0).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(2).props().className).toContain('selected');
    });
  });

  describe('Default FMJ ammo stats', () => {
    it('should show the PEN based on range of 100', () => {
      const wrapper = getWrapperWithFamas(100, 'Single');

      expect(wrapper.text()).toContain('PEN: 10');
    });

    it('should show the DC based on range of 100', () => {
      const wrapper = getWrapperWithFamas(100, 'Single');

      expect(wrapper.text()).toContain('DC: 5');
    });

    it('should show the PEN based on selected range of 85', () => {
      const wrapper = getWrapperWithFamas(85, 'Single');

      expect(wrapper.text()).toContain('PEN: 10');
    });

    it('should show the DC based on selected range of 85', () => {
      const wrapper = getWrapperWithFamas(85, 'Single');

      expect(wrapper.text()).toContain('DC: 5');
    });

    it('should show the PEN based on selected range of 75', () => {
      const wrapper = getWrapperWithFamas(75, 'Single');

      expect(wrapper.text()).toContain('PEN: 10');
    });

    it('should show the DC based on selected range of 75', () => {
      const wrapper = getWrapperWithFamas(75, 'Single');

      expect(wrapper.text()).toContain('DC: 5');
    });

    it('should show the PEN based on selected range of 65', () => {
      const wrapper = getWrapperWithFamas(65, 'Single');

      expect(wrapper.text()).toContain('PEN: 12');
    });

    it('should show the DC based on selected range of 65', () => {
      const wrapper = getWrapperWithFamas(65, 'Single');

      expect(wrapper.text()).toContain('DC: 6');
    });

    it('should show the PEN based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Single');

      expect(wrapper.text()).toContain('PEN: 15');
    });

    it('should show the DC based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Single');

      expect(wrapper.text()).toContain('DC: 6');
    });

    it('should show the PEN based on selected range of 350', () => {
      const wrapper = getWrapperWithFamas(350, 'Single');

      expect(wrapper.text()).toContain('PEN: 2.6');
    });

    it('should show the DC based on selected range of 350', () => {
      const wrapper = getWrapperWithFamas(350, 'Single');

      expect(wrapper.text()).toContain('DC: 2');
    });
  });

  describe('JHP ammo stats', () => {
    it('should show the PEN based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 15');
    });

    it('should show the DC based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 8');
    });

    it('should show the PEN based on selected range of 350', () => {
      const wrapper = getWrapperWithFamas(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 2.5');
    });

    it('should show the DC based on selected range of 350', () => {
      const wrapper = getWrapperWithFamas(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 3');
    });
  });

  describe('AP ammo stats', () => {
    it('should show the PEN based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 22');
    });

    it('should show the DC based on selected range of 1', () => {
      const wrapper = getWrapperWithFamas(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 6');
    });

    it('should show the PEN based on selected range of 350', () => {
      const wrapper = getWrapperWithFamas(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 3.7');
    });

    it('should show the DC based on selected range of 350', () => {
      const wrapper = getWrapperWithFamas(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 2');
    });
  });

  describe('Grenade Launchers', () => {
    it('should show TOF converted to master phase impluses', () => {
      const wrapper = getWrapperWithM79();

      expect(wrapper.text()).toContain('TOF: 6.4');
    });
  });
});
