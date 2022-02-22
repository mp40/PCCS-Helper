import React from 'react';
import { mount } from 'enzyme';

import SituationSelectModal from './index';

import { AlmStateProvider, FirearmProvider, AlmDispatchProvider } from '../context';
import { initialState } from '../data';

import { firearms } from '../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM1911A1 = () => ({ ...firearms.M1911A1 });
const testMat49 = () => ({ ...firearms['MAT 49'] });

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

describe('Situation Select Modal', () => {
  const setModal = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = (firearm, state = initialState) => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ ...state }}>
        <FirearmProvider firearm={{ ...hydrateFirearmByObject(firearm) }}>
          <SituationSelectModal
            setModal={setModal}
          />
        </FirearmProvider>
      </AlmStateProvider>
    </AlmDispatchProvider>,
  );

  describe('Rendering Situation Options', () => {
    it('should show pistol related situations for pistols', () => {
      const wrapper = getWrapper(testM1911A1());

      expect(wrapper.text()).toContain('Pistol One Handed');
      expect(wrapper.text()).toContain('Firing Pistol Double Action');
    });

    it('should not show non-pistol related situations for pistols', () => {
      const wrapper = getWrapper(testM1911A1());

      expect(wrapper.text()).not.toContain('SMG One Handed');
      expect(wrapper.text()).not.toContain('Rifle One Handed');
      expect(wrapper.text()).not.toContain('Sling for Support');
      expect(wrapper.text()).not.toContain('Bipod Braced');
      expect(wrapper.text()).not.toContain('Bipod Not Braced');
    });

    it('should show Hip Fire for pistols', () => {
      const wrapper = getWrapper(testM1911A1());

      expect(wrapper.text()).toContain('Hip Fire');
    });

    it('should show smg related situations for smgs', () => {
      const wrapper = getWrapper(testMat49());

      expect(wrapper.text()).toContain('SMG One Handed');
      expect(wrapper.text()).not.toContain('Rifle One Handed');
      expect(wrapper.text()).toContain('Hip Fire');
      expect(wrapper.text()).toContain('Sling for Support');
    });

    it('should not show pistol related situations for smgs', () => {
      const wrapper = getWrapper(testMat49());

      expect(wrapper.text()).not.toContain('Pistol One Handed');
      expect(wrapper.text()).not.toContain('Firing Pistol Double Action');
    });

    it('should show rifle related situations for rifles', () => {
      const wrapper = getWrapper(testFAMAS());

      expect(wrapper.text()).not.toContain('SMG One Handed');
      expect(wrapper.text()).toContain('Rifle One Handed');
      expect(wrapper.text()).toContain('Hip Fire');
      expect(wrapper.text()).toContain('Sling for Support');
    });

    it('should not show pistol related situations for rifles', () => {
      const wrapper = getWrapper(testFAMAS());

      expect(wrapper.text()).not.toContain('Pistol One Handed');
      expect(wrapper.text()).not.toContain('Firing Pistol Double Action');
    });

    it('should show bipod related situations for firearms with bipods', () => {
      const wrapper = getWrapper(testFAMAS());

      expect(wrapper.text()).toContain('Bipod Braced');
      expect(wrapper.text()).toContain('Bipod Not Braced');
    });

    it('should show folding stock option for firearms with folding stocks', () => {
      const wrapper = getWrapper(testMat49());

      expect(wrapper.text()).toContain('Folding Stock Not Used');
    });

    it('should not show folding stock option for firearms without folding stocks', () => {
      const wrapper = getWrapper(testFAMAS());

      expect(wrapper.text()).not.toContain('Folding Stock Not Used');
    });
  });

  describe('Selecting Situations', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be possible to select option', () => {
      const wrapper = getWrapper(testFAMAS());
      const updatedObj = { ...weaponBasedALMDouble };
      updatedObj.hipFire = true;

      wrapper.find('span[children="Hip Fire"]').closest('div').find('CheckBox').simulate('click');

      expect(dispatch).toHaveBeenCalledWith({ type: 'SITUATION_UPDATED', payload: updatedObj });
    });

    it('should mark checkbox as selected if option already marked true', () => {
      const mockState = { ...initialState, situation: { ...initialState.situation, hipFire: true } };
      const wrapper = getWrapper(testFAMAS(), mockState);

      const checkBox = wrapper.find('span[children="Hip Fire"]').closest('div').find('CheckBox');

      expect(checkBox.props().isActive).toBe(true);
    });

    it('should be possible to close modal when done button clicked', () => {
      const wrapper = getWrapper(testFAMAS());
      wrapper.find('button[children="Done"]').simulate('click');

      expect(setModal).toHaveBeenCalledWith(false);
    });
  });

  describe('Bipods And Bracing Options', () => {
    it('should include all bipod and bracing options by default', () => {
      const wrapper = getWrapper(testFAMAS());

      expect(
        wrapper.find('span[children="Bipod Braced"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Bipod Not Braced"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Braced"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Sling for Support"]').closest('div').find('.screen').exists(),
      ).toBe(false);
    });

    it('should exclude other bipod and bracing options if bipod brace selected', async () => {
      const mockState = { ...initialState, situation: { ...initialState.situation, bipodBraced: true } };
      const wrapper = getWrapper(testFAMAS(), mockState);

      expect(
        wrapper.find('span[children="Bipod Braced"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Bipod Not Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);

      expect(
        wrapper.find('span[children="Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);

      expect(
        wrapper.find('span[children="Sling for Support"]').closest('div').find('.screen').exists(),
      ).toBe(true);

      expect(
        wrapper.find('span[children="Hip Fire"]').closest('div').find('.screen').exists(),
      ).toBe(false);
    });

    it('should exclude other bipod and bracing options if bipod not braced selected', async () => {
      const mockState = { ...initialState, situation: { ...initialState.situation, bipodNotBraced: true } };
      const wrapper = getWrapper(testFAMAS(), mockState);

      expect(
        wrapper.find('span[children="Bipod Not Braced"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Bipod Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);
      expect(
        wrapper.find('span[children="Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);
      expect(
        wrapper.find('span[children="Sling for Support"]').closest('div').find('.screen').exists(),
      ).toBe(true);

      expect(
        wrapper.find('span[children="Hip Fire"]').closest('div').find('.screen').exists(),
      ).toBe(false);
    });

    it('should exclude other bipod and bracing options if braced selected', async () => {
      const mockState = { ...initialState, situation: { ...initialState.situation, braced: true } };
      const wrapper = getWrapper(testFAMAS(), mockState);

      expect(
        wrapper.find('span[children="Braced"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Bipod Not Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);
      expect(
        wrapper.find('span[children="Bipod Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);
      expect(
        wrapper.find('span[children="Sling for Support"]').closest('div').find('.screen').exists(),
      ).toBe(true);

      expect(
        wrapper.find('span[children="Hip Fire"]').closest('div').find('.screen').exists(),
      ).toBe(false);
    });

    it('should exclude other bipod and bracing options if sling support selected', async () => {
      const mockState = { ...initialState, situation: { ...initialState.situation, slingSupport: true } };
      const wrapper = getWrapper(testFAMAS(), mockState);

      expect(
        wrapper.find('span[children="Sling for Support"]').closest('div').find('.screen').exists(),
      ).toBe(false);

      expect(
        wrapper.find('span[children="Bipod Not Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);
      expect(
        wrapper.find('span[children="Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);
      expect(
        wrapper.find('span[children="Bipod Braced"]').closest('div').find('.screen').exists(),
      ).toBe(true);

      expect(
        wrapper.find('span[children="Hip Fire"]').closest('div').find('.screen').exists(),
      ).toBe(false);
    });
  });
});
