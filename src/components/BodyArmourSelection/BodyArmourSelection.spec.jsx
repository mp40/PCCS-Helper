import React from 'react';
import { shallow } from 'enzyme';

import BodyArmourSelection from './index';

// const getHelmets = () => [
//   {
//     name: 'M1',
//     pf: 4,
//     bpf: 4,
//     ac: 'I',
//     weight: 2.5,
//     tags: ['USA', 'WW2', 'Cold War'],
//   },
//   {
//     name: 'Mk 1',
//     pf: 4,
//     bpf: 4,
//     ac: 'I',
//     weight: 2.2,
//     tags: ['British', 'WW1', 'WW2'],
//   },
// ];

const helmets = Object.freeze({
  M1: {
    name: 'M1',
    pf: 4,
    bpf: 4,
    ac: 'I',
    weight: 2.5,
    tags: ['USA', 'WW2', 'Cold War'],
  },
  'Mk 1': {
    name: 'Mk 1',
    pf: 4,
    bpf: 4,
    ac: 'I',
    weight: 2.2,
    tags: ['British', 'WW1', 'WW2'],
  },
});

describe('Body Armour Selection', () => {
  let wrapper;

  const armourType = 'helmet';
  const armourList = helmets;
  const handleDispatch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <BodyArmourSelection
        armourType={armourType}
        armourList={armourList}
        handleDispatch={handleDispatch}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const m1Helmet = helmets.M1;
  const mk1Helmet = helmets['Mk 1'];

  it('should render helmet details', () => {
    const m1String = `${m1Helmet.name}${m1Helmet.pf}${m1Helmet.bpf}${m1Helmet.ac}${m1Helmet.weight}`;
    const mk1String = `${mk1Helmet.name}${mk1Helmet.pf}${mk1Helmet.bpf}${mk1Helmet.ac}${mk1Helmet.weight}`;

    expect(wrapper.text()).toContain(m1String);
    expect(wrapper.text()).toContain(mk1String);
  });

  it('should be possible to select helmet', () => {
    wrapper.find('td[children="M1"]').parent().simulate('click');

    expect(handleDispatch).toHaveBeenCalledWith('helmet', 'M1');
  });

  it('should be possible to remove helmet', () => {
    wrapper.find('button[children="Remove"]').simulate('click');

    expect(handleDispatch).toHaveBeenCalledWith(armourType, undefined);
  });

  it('should be possible to close modal', () => {
    wrapper.find('.close').simulate('click');

    expect(handleDispatch).toHaveBeenCalledWith(null);
  });
});
