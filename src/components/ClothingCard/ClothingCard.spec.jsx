import React from 'react';
import { mount } from 'enzyme';

import { DispatchProvider } from '../App/context';

import ClothingCard from './component';

import * as actions from '../App/actions';

jest.mock('../../data/uniformAndArmourTypes', () => ({
  __esModule: true,
  uniformWeights: { 'mock uniform': 5 },
}));

jest.mock('./modal', () => '<ModalDouble />');

describe('Clothing Card', () => {
  jest.spyOn(actions, 'showModal').mockImplementation(() => {});

  const dispatch = jest.fn();

  const wrapper = mount(
    <DispatchProvider dispatch={dispatch}>
      <ClothingCard uniform="mock uniform" />
    </DispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to open model to select uniform', () => {
    wrapper.find('td[children="mock uniform"]').closest('tr').simulate('click');

    expect(dispatch).toHaveBeenCalled();
    expect(actions.showModal).toHaveBeenCalledWith('<ModalDouble />');
  });
});
