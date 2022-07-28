import React from 'react';
import { mount } from 'enzyme';

import { DispatchProvider } from '../App/context';

import BodyArmourCard from './component';

import * as actions from '../App/actions';

jest.mock('../../data/uniformAndArmourTypes', () => ({
  __esModule: true,
  helmets: { 'mock helmet': { name: 'mock helmet', weight: 2.5 } },
  vests: { 'mock vest': { name: 'mock vest', weight: 7.5 } },
}));

jest.mock('../BodyArmourSelection/helmet', () => '<HelmetComponentDouble />');
jest.mock('../BodyArmourSelection/vest', () => '<VestComponentDouble />');

describe('Body Armour Card', () => {
  jest.spyOn(actions, 'showModal').mockImplementation(() => {});

  const dispatch = jest.fn();

  const wrapper = mount(
    <DispatchProvider dispatch={dispatch}>
      <BodyArmourCard helmet="mock helmet" vest="mock vest" />
    </DispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to open model to select helmet', () => {
    wrapper.find('td[children="mock helmet"]').closest('tr').simulate('click');

    expect(dispatch).toHaveBeenCalled();
    expect(actions.showModal).toHaveBeenCalledWith('<HelmetComponentDouble />');
  });

  it('should be possible to open model to select vest', () => {
    wrapper.find('td[children="mock vest"]').closest('tr').simulate('click');

    expect(dispatch).toHaveBeenCalled();
    expect(actions.showModal).toHaveBeenCalledWith('<VestComponentDouble />');
  });
});
