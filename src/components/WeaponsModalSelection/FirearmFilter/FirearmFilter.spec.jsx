import React from 'react';
import { shallow } from 'enzyme';
import FirearmFilter from './index';

describe('firearm filter', () => {
  const handleSetFilterByType = jest.fn();
  const handleSetShowFilters = jest.fn();

  describe('the modal', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be possible to close the modal', () => {
      const wrapper = shallow(<FirearmFilter
        handleSetFilterByType={handleSetFilterByType}
        handleSetShowFilters={handleSetShowFilters}
      />);

      wrapper.find('button').simulate('click');

      expect(handleSetShowFilters).toHaveBeenCalled();
    });
  });

  describe('filter weapons by type', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <FirearmFilter
          handleSetFilterByType={handleSetFilterByType}
          handleSetShowFilters={handleSetShowFilters}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should have a default of all', () => {
      expect(wrapper.find('span[children="All Firearms"]').closest('div')
        .find('RadioButton').props().checked).toBe(true);
    });

    it('should select rifles when appropraite button clicked', () => {
      wrapper.find('span[children="Rifles"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="Rifles"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select pistols when appropraite button clicked', () => {
      wrapper.find('span[children="Pistols"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="Pistols"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select sub-machineguns when appropraite button clicked', () => {
      wrapper.find('span[children="SMGs"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="SMGs"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select machineguns when appropraite button clicked', () => {
      wrapper.find('span[children="MGs"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="MGs"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select shotguns when appropraite button clicked', () => {
      wrapper.find('span[children="Shotguns"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="Shotguns"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select sniper rifles when appropraite button clicked', () => {
      wrapper.find('span[children="Sniper Rifles"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="Sniper Rifles"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select all when appropraite button clicked', () => {
      wrapper.find('span[children="All Firearms"]').closest('div')
        .find('RadioButton')
        .simulate('click');

      expect(wrapper.find('span[children="All Firearms"]').closest('div')
        .find('RadioButton')
        .props().checked).toBe(true);
    });
  });

  describe('filter weapons by caliber', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <FirearmFilter
          handleSetFilterByType={handleSetFilterByType}
          handleSetShowFilters={handleSetShowFilters}
        />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should have a default of all calibers', () => {
      const radioButton = wrapper.find('span[children="All Calibres"]').closest('div')
        .find('RadioButton');

      expect(radioButton.props().checked).toBe(true);
    });

    it('should select 7.62mm NATO when appropraite button clicked', () => {
      wrapper.find('span[children="7.62mm NATO"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="7.62mm NATO"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select 5.56mm NATO when appropraite button clicked', () => {
      wrapper.find('span[children="5.56mm NATO"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="5.56mm NATO"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select 7.62mm x 39 when appropraite button clicked', () => {
      wrapper.find('span[children="7.62 x 39mm"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="7.62 x 39mm"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select 5.45mm x 39.5 when appropraite button clicked', () => {
      wrapper.find('span[children="5.45 x 39.5mm"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="5.45 x 39.5mm"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select 9mm Parabellum when appropraite button clicked', () => {
      wrapper.find('span[children="9mm Parabellum"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="9mm Parabellum"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select other non-specified calibers when appropraite button clicked', () => {
      wrapper.find('span[children="other"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="other"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });

    it('should select all calibers when appropraite button clicked', () => {
      wrapper.find('span[children="All Calibres"]').closest('div').find('RadioButton').simulate('click');

      expect(wrapper.find('span[children="All Calibres"]').closest('div').find('RadioButton').props().checked).toBe(true);
    });
  });
});
