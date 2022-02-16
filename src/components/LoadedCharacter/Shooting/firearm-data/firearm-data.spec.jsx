import React from 'react';
import { mount } from 'enzyme';
import { AlmStateProvider, FirearmProvider } from '../context';

import FirearmData from './index';

import { firearms } from '../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });

describe('Weapon Data', () => {
  const getWrapper = (range, rof) => mount(
    <AlmStateProvider state={{ range, target: 'Standing Exposed' }}>
      <FirearmProvider firearm={{ ...hydrateFirearmByObject(testFAMAS()) }}>
        <FirearmData level={0} alm={10} rof={rof} />
      </FirearmProvider>
    </AlmStateProvider>,
  );

  describe('Minimum Arc by range', () => {
    it('should not show the MA if Single rof selected', () => {
      const wrapper = getWrapper(85, 'Single');

      expect(wrapper.text()).not.toContain('MA:');
    });

    it('should show the MA if in Auto based on selected range of 85', () => {
      const wrapper = getWrapper(85, 'Auto');

      expect(wrapper.text()).toContain('MA: 4');
    });

    it('should show the MA if in 3RB based on selected range of 85', () => {
      const wrapper = getWrapper(85, '3RB');

      expect(wrapper.text()).toContain('MA: 4');
    });

    it('should show the MA if in Auto based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Auto');

      expect(wrapper.text()).toContain('MA: 0.4');
    });
  });

  describe('Selecting available ammo types', () => {
    it('should show ammo type as FMJ if it is the default', () => {
      const wrapper = getWrapper(85, 'Single');

      expect(wrapper.find('.ammoMarker').at(0).props().className).toContain('selected');
      expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
    });

    it('should be possible to select JHP if available', () => {
      const wrapper = getWrapper(85, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.find('.ammoMarker').at(0).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(1).props().className).toContain('selected');
      expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
    });

    it('should be possible to select AP if available', () => {
      const wrapper = getWrapper(85, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.find('.ammoMarker').at(0).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
      expect(wrapper.find('.ammoMarker').at(2).props().className).toContain('selected');
    });
  });

  describe('Default FMJ ammo stats', () => {
    it('should show the PEN based on range of 100', () => {
      const wrapper = getWrapper(100, 'Single');

      expect(wrapper.text()).toContain('PEN: 10');
    });

    it('should show the DC based on range of 100', () => {
      const wrapper = getWrapper(100, 'Single');

      expect(wrapper.text()).toContain('DC: 5');
    });

    it('should show the PEN based on selected range of 85', () => {
      const wrapper = getWrapper(85, 'Single');

      expect(wrapper.text()).toContain('PEN: 10');
    });

    it('should show the DC based on selected range of 85', () => {
      const wrapper = getWrapper(85, 'Single');

      expect(wrapper.text()).toContain('DC: 5');
    });

    it('should show the PEN based on selected range of 75', () => {
      const wrapper = getWrapper(75, 'Single');

      expect(wrapper.text()).toContain('PEN: 10');
    });

    it('should show the DC based on selected range of 75', () => {
      const wrapper = getWrapper(75, 'Single');

      expect(wrapper.text()).toContain('DC: 5');
    });

    it('should show the PEN based on selected range of 65', () => {
      const wrapper = getWrapper(65, 'Single');

      expect(wrapper.text()).toContain('PEN: 12');
    });

    it('should show the DC based on selected range of 65', () => {
      const wrapper = getWrapper(65, 'Single');

      expect(wrapper.text()).toContain('DC: 6');
    });

    it('should show the PEN based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Single');

      expect(wrapper.text()).toContain('PEN: 15');
    });

    it('should show the DC based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Single');

      expect(wrapper.text()).toContain('DC: 6');
    });

    it('should show the PEN based on selected range of 350', () => {
      const wrapper = getWrapper(350, 'Single');

      expect(wrapper.text()).toContain('PEN: 2.6');
    });

    it('should show the DC based on selected range of 350', () => {
      const wrapper = getWrapper(350, 'Single');

      expect(wrapper.text()).toContain('DC: 2');
    });
  });

  describe('JHP ammo stats', () => {
    it('should show the PEN based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 15');
    });

    it('should show the DC based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 8');
    });

    it('should show the PEN based on selected range of 350', () => {
      const wrapper = getWrapper(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 2.5');
    });

    it('should show the DC based on selected range of 350', () => {
      const wrapper = getWrapper(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 3');
    });
  });

  describe('AP ammo stats', () => {
    it('should show the PEN based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 22');
    });

    it('should show the DC based on selected range of 1', () => {
      const wrapper = getWrapper(1, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 6');
    });

    it('should show the PEN based on selected range of 350', () => {
      const wrapper = getWrapper(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('PEN: 3.7');
    });

    it('should show the DC based on selected range of 350', () => {
      const wrapper = getWrapper(350, 'Single');
      wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

      expect(wrapper.text()).toContain('DC: 2');
    });
  });
});
