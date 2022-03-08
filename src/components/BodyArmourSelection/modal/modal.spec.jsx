import React from 'react';
import { shallow } from 'enzyme';

import BodyArmourSelection from './index';

const armourListDouble = { 'No Vest': {
  name: 'No Vest',
  pf: '0',
  bpf: '0',
  ac: '-',
  weight: 0,
},
M1951: {
  name: 'M1951',
  pf: 4,
  bpf: 2,
  ac: 'I',
  weight: 7.8,
  tags: ['USA', 'Cold War'],
},
M1955: {
  name: 'M1955',
  pf: 5,
  bpf: 5,
  ac: 'I',
  weight: 10.3,
  tags: ['USA', 'Cold War'],
} };

describe('Body Armour Selection Modal', () => {
  let wrapper;

  const closeModal = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <BodyArmourSelection
        closeModal={closeModal}
        dispatch={dispatch}
        armourList={armourListDouble}
        armourType="vest"
      />,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should select body armour', () => {
    wrapper.find('td[children="M1951"]').parent().simulate('click');

    expect(dispatch).toHaveBeenCalledWith('M1951');
    expect(closeModal).toHaveBeenCalled();
  });

  it('should remove body armour', () => {
    wrapper.find('button[children="Remove"]').simulate('click');

    expect(dispatch).toHaveBeenCalledWith(undefined);
    expect(closeModal).toHaveBeenCalled();
  });

  it('should close the modal when close button clicked', () => {
    wrapper.find('.close').simulate('click');

    expect(closeModal).toHaveBeenCalled();
  });
});
