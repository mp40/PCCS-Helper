import React from 'react';
import { shallow } from 'enzyme';

import SituationSelectModal from './index';

describe('Situation Select Modal', () => {
  const setModal = jest.fn();
  const setWeaponBasedALM = jest.fn();
  const weaponBasedALMDouble = {
    braced: false,
    slingSupport: false,
    hipFire: false,
    rifleOneHand: false,
    smgOneHand: false,
    pistolOneHand: false,
    foldingStockNotUsed: false,
    pistolDoubleAction: false,
    bipodNotBraced: false,
    bipodBraced: false,
    tripodMount: false,
    pintleMount: false,
    turretMount: false,
  };

  const getWrapper = (
    list, bipod, foldingStock, weaponBasedALM = weaponBasedALMDouble,
  ) => shallow(
    <SituationSelectModal
      list={list}
      bipod={bipod}
      foldingStock={foldingStock}
      setModal={setModal}
      setWeaponBasedALM={setWeaponBasedALM}
      weaponBasedALM={{ ...weaponBasedALM }}
    />);

  describe('Rendering Situation Options', () => {
    it('should show pistol related situations for pistols', () => {
      const wrapper = getWrapper('pistols', false, false);

      expect(wrapper.text()).toContain('Pistol One Handed');
      expect(wrapper.text()).toContain('Firing Pistol Double Action');
    });

    it('should not show non-pistol related situations for pistols', () => {
      const wrapper = getWrapper('pistols', false, false);

      expect(wrapper.text()).not.toContain('SMG One Handed');
      expect(wrapper.text()).not.toContain('Rifle One Handed');
      expect(wrapper.text()).not.toContain('Sling for Support');
      expect(wrapper.text()).not.toContain('Bipod Braced');
      expect(wrapper.text()).not.toContain('Bipod Not Braced');
    });

    it('should show Hip Fire for pistols', () => {
      const wrapper = getWrapper('pistols', false, false);

      expect(wrapper.text()).toContain('Hip Fire');
    });

    it('should show smg related situations for smgs', () => {
      const wrapper = getWrapper('smgs', false, false);

      expect(wrapper.text()).toContain('SMG One Handed');
      expect(wrapper.text()).not.toContain('Rifle One Handed');
      expect(wrapper.text()).toContain('Hip Fire');
      expect(wrapper.text()).toContain('Sling for Support');
    });

    it('should not show pistol related situations for smgs', () => {
      const wrapper = getWrapper('smgs', false, false);

      expect(wrapper.text()).not.toContain('Pistol One Handed');
      expect(wrapper.text()).not.toContain('Firing Pistol Double Action');
    });

    it('should show rifle related situations for rifles', () => {
      const wrapper = getWrapper('rifles', false, false);

      expect(wrapper.text()).not.toContain('SMG One Handed');
      expect(wrapper.text()).toContain('Rifle One Handed');
      expect(wrapper.text()).toContain('Hip Fire');
      expect(wrapper.text()).toContain('Sling for Support');
    });

    it('should not show pistol related situations for rifles', () => {
      const wrapper = getWrapper('rifles', false, false);

      expect(wrapper.text()).not.toContain('Pistol One Handed');
      expect(wrapper.text()).not.toContain('Firing Pistol Double Action');
    });

    it('should show bipod related situations for firearms with bipods', () => {
      const wrapper = getWrapper('rifles', true, false);

      expect(wrapper.text()).toContain('Bipod Braced');
      expect(wrapper.text()).toContain('Bipod Not Braced');
    });

    it('should show folding stock option for firearms with folding stocks', () => {
      const wrapper = getWrapper('rifles', false, true);

      expect(wrapper.text()).toContain('Folding Stock Not Used');
    });

    it('should not show folding stock option for firearms without folding stocks', () => {
      const wrapper = getWrapper('rifles', false, false);

      expect(wrapper.text()).not.toContain('Folding Stock Not Used');
    });
  });

  describe('Selecting Situations', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = getWrapper('rifles', false, false);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be possible to select option', () => {
      const updatedObj = { ...weaponBasedALMDouble };
      updatedObj.hipFire = true;

      wrapper.find('span[children="Hip Fire"]').closest('div').find('CheckBox').simulate('click');

      expect(setWeaponBasedALM).toHaveBeenCalledWith(updatedObj);
    });

    it('should mark checkbox as selected if option already marked true', () => {
      const mockState = { ...weaponBasedALMDouble };
      mockState.hipFire = true;

      wrapper = getWrapper('rifles', false, false, mockState);

      const checkBox = wrapper.find('span[children="Hip Fire"]').closest('div').find('CheckBox');

      expect(checkBox.props().isActive).toBe(true);
    });

    it('should be possible to close modal when done button clicked', () => {
      wrapper.find('button[children="Done"]').simulate('click');

      expect(setModal).toHaveBeenCalledWith(false);
    });
  });
});
