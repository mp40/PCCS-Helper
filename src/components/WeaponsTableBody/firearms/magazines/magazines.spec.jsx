import React from 'react';
import { shallow } from 'enzyme';
import Magazines from '.';

const increaseMagazineQty = jest.fn();
const decreaseMagazineQty = jest.fn();

describe('Selected Firearm Magazines', () => {
  const getWrapperWithMagazines = (magazines) => shallow(
    <Magazines
      firearmName="Mock Firearm"
      magazines={magazines}
      increaseMagazineQty={increaseMagazineQty}
      decreaseMagazineQty={decreaseMagazineQty}
    />);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return "Single Rounds" if type is "Rnd"', () => {
    const wrapper = getWrapperWithMagazines([{ type: 'Rnd', weight: 0.1, cap: 7, qty: 1 }]);

    expect(wrapper.find('MagazineRow').props().text).toBe('Single Round');
  });

  it('should return magzine details if type is not single round', () => {
    const wrapper = getWrapperWithMagazines([{ type: 'Mag', weight: 0.7, cap: 7, qty: 1 }]);

    expect(wrapper.find('MagazineRow').props().text).toBe('7 round Mag');
  });

  it('should not decrease magazine less than zero', () => {
    const wrapper = getWrapperWithMagazines([{ type: 'Mag', weight: 0.7, cap: 7, qty: 0 }]);

    wrapper.find('MagazineRow').invoke('decreaseItem')();

    expect(decreaseMagazineQty).not.toHaveBeenCalled();
  });

  it('should not render magazines tagged as removed', () => {
    const wrapper = getWrapperWithMagazines([{ removed: true, type: 'Mag', weight: 0.7, cap: 7, qty: 0 }]);

    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
