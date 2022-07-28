import React from 'react';
import { mount } from 'enzyme';

import { DispatchProvider } from '../App/context';

import NameCard from './component';

import * as actions from '../App/actions';

jest.mock('./modal', () => '<ModalDouble />');

describe('Clothing Card', () => {
  jest.spyOn(actions, 'showModal').mockImplementation(() => {});

  const dispatch = jest.fn();

  const wrapper = mount(
    <DispatchProvider dispatch={dispatch}>
      <NameCard name="fake name" />
    </DispatchProvider>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be possible to open model to update name', () => {
    wrapper.find('button').simulate('click');

    expect(dispatch).toHaveBeenCalled();
    expect(actions.showModal).toHaveBeenCalledWith('<ModalDouble />');
  });
});
