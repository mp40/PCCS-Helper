import React from 'react';
import { mount } from 'enzyme';

import VisibilitySelectModal from './index';

import { AlmStateProvider, WeaponProvider, AlmDispatchProvider } from '../../context';

import { firearms } from '../../../../../data/firearms';
import { hydrateFirearmByObject } from '../../../../../data/firearms/hydrate';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testScopedFAMAS = () => ({ ...firearms.FAMAS, attachedOptic: 'Medium Power Scope' });
const testAasFAMAS = () => ({ ...firearms.FAMAS, attachedOptic: 'AAS' });

const visibility = Object.freeze({
  lighting: 'Good',
  muzzleFlash: false,
  smokeFogHaze: false,
  lookingIntoLight: false,
  opticalUnder8: false,
  opticsBroken: false,
  aasBroken: false,
  sightsBroken: false,
  teargasNoMask: false,
  notLooking: false,
});

describe('Visibility Select Modal', () => {
  const setModal = jest.fn();
  const dispatch = jest.fn();

  const getWrapper = (firearm, visState = visibility) => mount(
    <AlmDispatchProvider dispatch={dispatch}>
      <AlmStateProvider state={{ visibility: { ...visState } }}>
        <WeaponProvider weapon={{ ...hydrateFirearmByObject(firearm) }}>
          <VisibilitySelectModal
            setModal={setModal}
          />
        </WeaponProvider>
      </AlmStateProvider>
    </AlmDispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show current lighting', () => {
    const wrapper = getWrapper(testFAMAS());
    expect(wrapper.find('button[children="Good"]').props().className).toBe('selected');
  });

  it('should be possible to change lighting', () => {
    const wrapper = getWrapper(testFAMAS());
    wrapper.find('button[children="Dusk"]').simulate('click');

    const updatedVisibility = { ...visibility };
    updatedVisibility.lighting = 'Dusk';

    expect(dispatch).toHaveBeenCalledWith({ type: 'VISIBILITY_UPDATED', payload: updatedVisibility });
  });

  it('should be possible to select Other visibility penality', () => {
    const wrapper = getWrapper(testFAMAS());
    const checkBox = wrapper.find('span[children="Shooter Not Looking"]')
      .closest('div').find('CheckBox');

    checkBox.simulate('click');

    const updatedVisibility = { ...visibility };
    updatedVisibility.notLooking = !updatedVisibility.notLooking;

    expect(dispatch).toHaveBeenCalledWith({ type: 'VISIBILITY_UPDATED', payload: updatedVisibility });
  });

  it('should show previously selected options with as selected', () => {
    const preCheckedVisibility = { ...visibility, lookingIntoLight: true };

    const wrapper = getWrapper(testFAMAS(), preCheckedVisibility);

    const checkBox = wrapper.find('span[children="Looking into Light"]')
      .closest('div').find('CheckBox');

    expect(checkBox.props().isActive).toBe(true);
  });

  it('should not show optics options if no optics attached', () => {
    const wrapper = getWrapper(testFAMAS());
    expect(wrapper.text()).not.toContain('Optics Broken');
    expect(wrapper.text()).not.toContain('AAS Broken');
  });

  it('should show broken optics if optics attached', () => {
    const wrapper = getWrapper(testScopedFAMAS());

    expect(wrapper.text()).toContain('Optics Broken');
    expect(wrapper.text()).not.toContain('AAS Broken');
  });

  it('should show broken aas optics options if aas attached', () => {
    const wrapper = getWrapper(testAasFAMAS());

    expect(wrapper.text()).not.toContain('Optics Broken');
    expect(wrapper.text()).toContain('AAS Broken');
  });

  it('should close the modal when Done button clicked', () => {
    const wrapper = getWrapper(testFAMAS());
    wrapper.find('button[children="Done"]').simulate('click');

    expect(setModal).toHaveBeenCalledWith(false);
  });
});
