import React from 'react';
import { shallow } from 'enzyme';

import FireSelector from './index';

describe('The Fire Selector', () => {
  let wrapper;
  const setRof = jest.fn();

  describe('Rendering Selector Options', () => {
    it('should not screen Single selector option if Single option available', () => {
      wrapper = shallow(<FireSelector single selector="*8" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(0).find('.screen').exists()).toBe(false);
    });

    it('should render screen to cover Single selector option if firearm selector is full auto only', () => {
      wrapper = shallow(<FireSelector single={false} selector="*8" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(0).find('.screen').exists()).toBe(true);
    });

    it('should not render screen to cover Auto selector option if weapon is full auto capable', () => {
      wrapper = shallow(<FireSelector single selector="*8" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(2).find('.screen').exists()).toBe(false);
    });

    it('should render screen to cover Auto selector option if firearm is not full auto capable', () => {
      wrapper = shallow(<FireSelector single selector="2" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(2).find('.screen').exists()).toBe(true);
    });

    it('should not render screen to cover 3RB selector option if firearm is 3RB capable', () => {
      wrapper = shallow(<FireSelector single selector="**8" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(1).find('.screen').exists()).toBe(false);
    });

    it('should render screen to cover 3RB selector option if firearm is not 3RB capable', () => {
      wrapper = shallow(<FireSelector single selector="*8" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(1).find('.screen').exists()).toBe(true);
    });

    it('should not cover 3RB but cover Auto selector option if firearm is 3RB capable but not Auto capable', () => {
      wrapper = shallow(<FireSelector single selector="**" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(1).find('.screen').exists()).toBe(false);
      expect(wrapper.find('.selector').childAt(2).find('.screen').exists()).toBe(true);
    });

    it('should only allow Single selection for weapons that require manual cycling', () => {
      wrapper = shallow(<FireSelector single selector="3" rof="fake" setRof={setRof} />);

      expect(wrapper.find('.selector').childAt(0).find('.screen').exists()).toBe(false);
      expect(wrapper.find('.selector').childAt(1).find('.screen').exists()).toBe(true);
      expect(wrapper.find('.selector').childAt(2).find('.screen').exists()).toBe(true);
    });
  });

  describe('Selecting fire mode', () => {
    afterEach(() => {
      wrapper = shallow(<FireSelector single selector="**8" rof="fake" setRof={setRof} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should update ROF to single if Single button clicked', () => {
      wrapper.find('button[children="Single"]').simulate('click');

      expect(setRof).toHaveBeenCalledWith('Single');
    });

    it('should update ROF to auto if Auto button clicked', () => {
      wrapper.find('button[children="Auto"]').simulate('click');

      expect(setRof).toHaveBeenCalledWith('Auto');
    });

    it('should update ROF to single if 3RB button clicked', () => {
      wrapper.find('button[children="3RB"]').simulate('click');

      expect(setRof).toHaveBeenCalledWith('3RB');
    });
  });
});
