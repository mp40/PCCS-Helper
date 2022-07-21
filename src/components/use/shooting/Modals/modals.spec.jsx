import React from 'react';
import { shallow } from 'enzyme';

import AlmModals from './index';

describe('Modals', () => {
  const setModal = jest.fn();
  const getWrapper = (modal) => shallow(<AlmModals modal={modal} setModal={setModal} />);

  it('should not show anything if modal prop set to false', () => {
    const wrapper = getWrapper(false);

    expect(wrapper.find('.modal-background').exists()).toBe(false);
  });

  it('should show Range Select if modal prop set to "range"', () => {
    const wrapper = getWrapper('range');

    expect(wrapper.find('RangeSelectModal').exists()).toBe(true);
  });

  it('should show Select Stance if modal prop set to "stance"', () => {
    const wrapper = getWrapper('stance');

    expect(wrapper.find('StanceSelectModal').exists()).toBe(true);
  });

  it('should show Select Target Size if modal prop set to "target"', () => {
    const wrapper = getWrapper('target');

    expect(wrapper.find('TargetSizeSelectModal').exists()).toBe(true);
  });

  it('should show Select Movement if modal prop set to "movement"', () => {
    const wrapper = getWrapper('movement');

    expect(wrapper.find('MovementSelectModal').exists()).toBe(true);
  });

  it('should show Select Situation if modal prop set to "situation"', () => {
    const wrapper = getWrapper('situation');

    expect(wrapper.find('SituationSelectModal').exists()).toBe(true);
  });

  it('should show Select Visibility if modal prop set to "visibility"', () => {
    const wrapper = getWrapper('visibility');

    expect(wrapper.find('VisibilitySelectModal').exists()).toBe(true);
  });

  it('should show Select Miscellaneous if modal prop set to "miscellaneous"', () => {
    const wrapper = getWrapper('miscellaneous');

    expect(wrapper.find('MiscellaneousSelectModal').exists()).toBe(true);
  });

  it('should show Select Aims if modal prop set to "aims"', () => {
    const wrapper = getWrapper('aims');

    expect(wrapper.find('AimsSelectModal').exists()).toBe(true);
  });
});
