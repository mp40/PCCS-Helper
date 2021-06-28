import React from 'react';
import { shallow, mount } from 'enzyme';

import Shooting from './index';

import { firearms } from '../../../data/firearms';

const testFAMAS = () => ({ ...firearms.FAMAS });
const testM16 = () => ({ ...firearms.M16 });
const testM1911A1 = () => ({ ...firearms.M1911A1 });
const testM60 = () => ({ ...firearms.M60 });

describe('Shooting Card', () => {
  let wrapper;
  const setFirearm = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Shooting sal={0} level={0} firearm={testFAMAS()} setFirearm={setFirearm} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set maxAims based on weapon max aim time allowed', () => {
    expect(wrapper.find('Aiming').props().maxAims).toBe(9);
  });

  it('should clear aims on weapon change', () => {
    wrapper = mount(<Shooting sal={0} level={0} firearm={testFAMAS()} setFirearm={setFirearm} />);

    wrapper.find('Aiming').invoke('setAims')(5);

    wrapper.setProps({ sal: 0, level: 0, firearm: testM16(), setFirearm });
    wrapper.update();

    expect(wrapper.find('Aiming').props().aims).toBe(1);
  });

  it('should clear situation mods on weapon change', () => {
    wrapper = mount(<Shooting sal={0} level={0} firearm={testFAMAS()} setFirearm={setFirearm} />);

    wrapper.find('span[children="Situation"]').closest('button').simulate('click');
    wrapper.find('CheckBox').at(0).simulate('click');
    wrapper.find('SituationSelectModal').invoke('setModal')(false);

    wrapper.setProps({ sal: 0, level: 0, firearm: testM16(), setFirearm });
    wrapper.update();

    expect(wrapper.find('span[children="Situation"]').closest('button').text()).toBe('SituationALM: 0');
  });

  it('should clear sab on weapon change', () => {
    const m16 = testM16();
    wrapper = mount(<Shooting sal={0} level={0} firearm={testFAMAS()} setFirearm={setFirearm} />);

    wrapper.find('span[children="Range"]').closest('button').simulate('click');
    wrapper.find('RangeSelectModal').invoke('setRange')(100);

    wrapper.find('FireSelector').invoke('setRof')('Auto');
    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.setProps({ sal: 0, level: 0, firearm: m16, setFirearm });
    wrapper.update();

    expect(wrapper.find('.data').text()).toContain(`ALM: ${m16.aim.mod[0]}`);
  });

  it('should reset fire selector on weapon change', () => {
    wrapper = mount(<Shooting sal={0} level={0} firearm={testM60()} setFirearm={setFirearm} />);

    wrapper.find('button[children="Sustained Fire"]').simulate('click');

    wrapper.setProps({ sal: 0, level: 0, firearm: testM16(), setFirearm });
    wrapper.update();

    expect(wrapper.find('button[children="Cease Fire"]').exists()).toBe(false);
    expect(wrapper.find('button[children="FIRE"]').exists()).toBe(true);

    expect(wrapper.find('FireSelector').props().rof).toBe('Single');
  });

  it('should clear rounds fired on weapon change', () => {
    wrapper = mount(<Shooting sal={0} level={0} firearm={testFAMAS()} setFirearm={setFirearm} />);

    wrapper.find('button[children="FIRE"]').simulate('click');

    wrapper.setProps({ sal: 0, level: 0, firearm: testM16(), setFirearm });
    wrapper.update();

    expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 0');
  });

  it('should clear selected ammo on weapon change', () => {
    wrapper = mount(<Shooting sal={0} level={0} firearm={testFAMAS()} setFirearm={setFirearm} />);

    wrapper.find('button[children="JHP"]').simulate('click');

    wrapper.setProps({ sal: 0, level: 0, firearm: testM16(), setFirearm });
    wrapper.update();

    expect(wrapper.find('.ammoMarker').at(0).props().className).toContain('selected');
    expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
    expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
  });

  it('should be possible to close Shooting Card', () => {
    wrapper.find('.close').simulate('click');

    expect(setFirearm).toHaveBeenCalledWith(false);
  });

  describe('Weapon Data', () => {
    describe('Minimum Arc by range', () => {
      it('should not show the MA if Single rof selected', () => {
        expect(wrapper.text()).not.toContain('MA:');
      });

      it('should show the MA if in Auto based on selected range of 85', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(85);

        wrapper.find('FireSelector').invoke('setRof')('Auto');

        expect(wrapper.text()).toContain('MA: 4');
      });

      it('should show the MA if in 3RB based on selected range of 85', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(85);

        wrapper.find('FireSelector').invoke('setRof')('3RB');

        expect(wrapper.text()).toContain('MA: 4');
      });

      it('should show the MA if in Auto based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        wrapper.find('FireSelector').invoke('setRof')('Auto');

        expect(wrapper.text()).toContain('MA: 0.4');
      });
    });

    describe('Selecting available ammo types', () => {
      it('should show ammo type as FMJ if it is the default', () => {
        expect(wrapper.find('.ammoMarker').at(0).props().className).toContain('selected');
        expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
        expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
      });

      it('should be possible to select JHP if available', () => {
        wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');

        expect(wrapper.find('.ammoMarker').at(0).props().className).not.toContain('selected');
        expect(wrapper.find('.ammoMarker').at(1).props().className).toContain('selected');
        expect(wrapper.find('.ammoMarker').at(2).props().className).not.toContain('selected');
      });

      it('should be possible to select AP if available', () => {
        wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');

        expect(wrapper.find('.ammoMarker').at(0).props().className).not.toContain('selected');
        expect(wrapper.find('.ammoMarker').at(1).props().className).not.toContain('selected');
        expect(wrapper.find('.ammoMarker').at(2).props().className).toContain('selected');
      });
    });

    describe('Default FMJ ammo stats', () => {
      it('should show the PEN based on range of 100', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        expect(wrapper.text()).toContain('PEN: 10');
      });

      it('should show the DC based on range of 100', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        expect(wrapper.text()).toContain('DC: 5');
      });

      it('should show the PEN based on selected range of 85', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(85);

        expect(wrapper.text()).toContain('PEN: 10');
      });

      it('should show the DC based on selected range of 85', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(85);

        expect(wrapper.text()).toContain('DC: 5');
      });

      it('should show the PEN based on selected range of 75', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(75);

        expect(wrapper.text()).toContain('PEN: 10');
      });

      it('should show the DC based on selected range of 75', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(75);

        expect(wrapper.text()).toContain('DC: 5');
      });

      it('should show the PEN based on selected range of 65', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(65);

        expect(wrapper.text()).toContain('PEN: 12');
      });

      it('should show the DC based on selected range of 65', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(65);

        expect(wrapper.text()).toContain('DC: 6');
      });

      it('should show the PEN based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        expect(wrapper.text()).toContain('PEN: 15');
      });

      it('should show the DC based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        expect(wrapper.text()).toContain('DC: 6');
      });

      it('should show the PEN based on selected range of 350', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(350);

        expect(wrapper.text()).toContain('PEN: 2.6');
      });

      it('should show the DC based on selected range of 350', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(350);

        expect(wrapper.text()).toContain('DC: 2');
      });
    });

    describe('JHP ammo stats', () => {
      beforeEach(() => {
        wrapper.find('.ammoTypes').find('button[children="JHP"]').simulate('click');
      });

      it('should show the PEN based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        expect(wrapper.text()).toContain('PEN: 15');
      });

      it('should show the DC based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        expect(wrapper.text()).toContain('DC: 8');
      });

      it('should show the PEN based on selected range of 350', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(350);

        expect(wrapper.text()).toContain('PEN: 2.5');
      });

      it('should show the DC based on selected range of 350', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(350);

        expect(wrapper.text()).toContain('DC: 3');
      });
    });

    describe('AP ammo stats', () => {
      beforeEach(() => {
        wrapper.find('.ammoTypes').find('button[children="AP"]').simulate('click');
      });

      it('should show the PEN based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        expect(wrapper.text()).toContain('PEN: 22');
      });

      it('should show the DC based on selected range of 1', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(1);

        expect(wrapper.text()).toContain('DC: 6');
      });

      it('should show the PEN based on selected range of 350', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(350);

        expect(wrapper.text()).toContain('PEN: 3.7');
      });

      it('should show the DC based on selected range of 350', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(350);

        expect(wrapper.text()).toContain('DC: 2');
      });
    });
  });

  describe('Modals', () => {
    it('should show the the Range Select modal when range button clicked', () => {
      wrapper.find('span[children="Range"]').closest('button').simulate('click');

      expect(wrapper.find('RangeSelectModal').exists()).toBe(true);
    });

    it('should show the Select Stance modal when shooter stance button clicked', () => {
      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');

      expect(wrapper.find('StanceSelectModal').exists()).toBe(true);
    });

    it('should show the Select Target Size modal when target size button clicked', () => {
      wrapper.find('span[children="Target Size"]').closest('button').simulate('click');

      expect(wrapper.find('TargetSizeSelectModal').exists()).toBe(true);
    });

    it('should show the Select Movement modal when movement button clicked', () => {
      wrapper.find('span[children="Movement"]').closest('button').simulate('click');

      expect(wrapper.find('MovementSelectModal').exists()).toBe(true);
    });

    it('should show the Select Situation modal when situation button clicked', () => {
      wrapper.find('span[children="Situation"]').closest('button').simulate('click');

      expect(wrapper.find('SituationSelectModal').exists()).toBe(true);
    });

    it('should show the Select Visibility modal when visibility button clicked', () => {
      wrapper.find('Aiming').dive().find('span[children="Aims"]').closest('button')
        .simulate('click');

      expect(wrapper.find('AimsSelectModal').exists()).toBe(true);
    });

    it('should show the Select Aims modal when aims button clicked', () => {
      wrapper.find('span[children="Visibility"]').closest('button').simulate('click');

      expect(wrapper.find('VisibilitySelectModal').exists()).toBe(true);
    });

    it('should pass bipod prop to Situation Select Modal as true if weapon has bipod', () => {
      wrapper.find('span[children="Situation"]').closest('button').simulate('click');

      expect(wrapper.find('SituationSelectModal').props().bipod).toBe(true);
    });

    it('should pass bipod prop to Situation Select Modal as false if weapon has no bipod', () => {
      wrapper = shallow(<Shooting sal={0} level={0} firearm={testM16()} setFirearm={setFirearm} />);

      wrapper.find('span[children="Situation"]').closest('button').simulate('click');

      expect(wrapper.find('SituationSelectModal').props().bipod).toBe(false);
    });

    it('should pass foldingStock prop to Situation Select Modal as true if weapon has folding stock', () => {
      const firearm = testFAMAS();
      firearm.length = '25/30';
      wrapper = shallow(<Shooting sal={0} level={0} firearm={firearm} setFirearm={setFirearm} />);

      wrapper.find('span[children="Situation"]').closest('button').simulate('click');

      expect(wrapper.find('SituationSelectModal').props().foldingStock).toBe(true);
    });

    it('should pass foldingStock prop to Situation Select Modal as false if weapon does not have folding stock', () => {
      wrapper.find('span[children="Situation"]').closest('button').simulate('click');

      expect(wrapper.find('SituationSelectModal').props().foldingStock).toBe(false);
    });
  });

  describe('Fire selector defaults', () => {
    it('should default to Single if weapon is capable of single fire', () => {
      const fireSelector = wrapper.find('FireSelector').dive();
      const selector = fireSelector.find('.switchHub');

      expect(selector.props().className).toContain('Single');
    });

    it('should default to Auto if weapon is not capable of single fire', () => {
      const firearm = testFAMAS();
      firearm.selector = 'full auto only';

      wrapper = shallow(<Shooting sal={0} level={0} firearm={firearm} setFirearm={setFirearm} />);

      const fireSelector = wrapper.find('FireSelector').dive();
      const selector = fireSelector.find('.switchHub');

      expect(selector.props().className).toContain('Auto');
    });
  });

  describe('Firing the firearm', () => {
    it('should use firearm ballistic accuracy instead of ALM if it is less', () => {
      wrapper = shallow(<Shooting sal={21} level={15} firearm={testM1911A1()} setFirearm={setFirearm} />);
      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('RangeSelectModal').invoke('setRange')(100);

      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
      wrapper.find('StanceSelectModal').invoke('setStance')('Prone');

      wrapper.find('Aiming').invoke('setAims')(6);

      expect(wrapper.find('.data').text()).toContain('ALM: 15');
      expect(wrapper.find('.firing').text()).toContain('Hit Chance: 80%');
    });

    it('should not use firearm ballistic accuracy if it is greater than ALM', () => {
      wrapper = shallow(<Shooting sal={10} level={4} firearm={testM1911A1()} setFirearm={setFirearm} />);

      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('RangeSelectModal').invoke('setRange')(100);

      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
      wrapper.find('StanceSelectModal').invoke('setStance')('Prone');

      wrapper.find('Aiming').invoke('setAims')(6);

      expect(wrapper.find('.data').text()).toContain('ALM: 9');
      expect(wrapper.find('.firing').text()).toContain('Hit Chance: 39%');
    });

    it('should provide visual feed back if ALM equals weapon BA', () => {
      wrapper = shallow(<Shooting sal={21} level={15} firearm={testM1911A1()} setFirearm={setFirearm} />);

      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('RangeSelectModal').invoke('setRange')(100);

      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
      wrapper.find('StanceSelectModal').invoke('setStance')('Prone');

      wrapper.find('Aiming').invoke('setAims')(6);

      expect(wrapper.find('.data').find('.baReached').exists()).toBe(true);
    });

    it('should not show the visual feed back if ALM is greater than BA', () => {
      wrapper = shallow(<Shooting sal={10} level={4} firearm={testM1911A1()} setFirearm={setFirearm} />);

      wrapper.find('span[children="Range"]').closest('button').simulate('click');
      wrapper.find('RangeSelectModal').invoke('setRange')(100);

      wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
      wrapper.find('StanceSelectModal').invoke('setStance')('Prone');

      wrapper.find('Aiming').invoke('setAims')(6);

      expect(wrapper.find('.data').find('.baReached').exists()).toBe(false);
    });

    describe('Firing interface', () => {
      it('should not render Sustained Fire button if Weapon is set to Single', () => {
        expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(false);
      });

      it('should render Sustained Fire button if Weapon is set to Auto', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');

        expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(true);
      });

      it('should not render Sustained Fire button if Weapon is set to 3RB', () => {
        wrapper.find('FireSelector').invoke('setRof')('3RB');

        expect(wrapper.find('button[children="Sustained Fire"]').exists()).toBe(false);
      });
    });

    describe('level 0 Standing Shooter vs Standing Target, 1 Aim, Single Shot', () => {
      it('should have 5% chance to hit at Range 5', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(5);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 5%');
      });

      it('should have no chance to hit at Range 25', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(25);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: NA');
      });

      it('should have no chance to hit at Range 50', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(50);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: NA');
      });

      it('should have no chance to hit at Range 100', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: NA');
      });

      it('should have no chance to hit at Range 400', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(400);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: NA');
      });
    });

    describe('level 0 Standing Shooter vs Standing Target, 1 Aim, Auto Shot', () => {
      beforeEach(() => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');
      });

      it('should have 47% chance to hit elevation at Range 5', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(5);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 47%');
      });

      it('should have 11% chance to hit elevation at Range 25', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(25);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 11%');
      });

      it('should have 6% chance to hit elevation at Range 50', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(50);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 6%');
      });

      it('should have 2% chance to hit elevation at Range 100', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 2%');
      });

      it('should have 1% chance to hit elevation at Range 200', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(200);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 1%');
      });

      it('should have 0% chance to hit elevation at Range 300', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(300);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 0%');
      });

      it('should have no chance to hit elevation at Range 400', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(400);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: NA');
      });
    });

    describe('level 4 Kneeling Shooter vs Target Firing Over Cover, 3 Aims, Single Shot', () => {
      beforeEach(() => {
        wrapper = shallow(<Shooting sal={10} level={4} firearm={testFAMAS()} setFirearm={setFirearm} />);

        wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
        wrapper.find('StanceSelectModal').invoke('setStance')('Kneeling');

        wrapper.find('span[children="Target Size"]').closest('button').simulate('click');
        wrapper.find('TargetSizeSelectModal').invoke('setSize')('Fire Over/Around');

        wrapper.find('Aiming').invoke('setAims')(3);
      });

      it('should have 96% chance to hit at Range 5', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(5);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 96%');
      });

      it('should have 27% chance to hit at Range 25', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(25);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 27%');
      });

      it('should have 9% chance to hit at Range 50', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(50);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 9%');
      });

      it('should have 3% chance to hit at Range 100', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 3%');
      });
    });

    describe('level 4 Kneeling Shooter vs Target Firing Over Cover, 3 Aims, Auto fire', () => {
      beforeEach(() => {
        wrapper = shallow(<Shooting sal={10} level={4} firearm={testFAMAS()} setFirearm={setFirearm} />);

        wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
        wrapper.find('StanceSelectModal').invoke('setStance')('Kneeling');

        wrapper.find('span[children="Target Size"]').closest('button').simulate('click');
        wrapper.find('TargetSizeSelectModal').invoke('setSize')('Fire Over/Around');

        wrapper.find('Aiming').invoke('setAims')(3);

        wrapper.find('FireSelector').invoke('setRof')('Auto');
      });

      it('should have 99% chance to hit elevation at Range 5', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(5);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 99%');
      });

      it('should have 62% chance to hit elevation at Range 25', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(25);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 62%');
      });

      it('should have 38% chance to hit elevation at Range 50', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(50);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 38%');
      });

      it('should have 21% chance to hit elevation at Range 100', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 21%');
      });
    });

    describe('level 0 standing Shooter vs Standing Target, 2 Aims, Three Round Burst', () => {
      beforeEach(() => {
        wrapper.find('FireSelector').invoke('setRof')('3RB');
      });

      it('should have 47% chance to hit elevation at Range 5', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(5);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 47%');
      });

      it('should have 11% chance to hit elevation at Range 25', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(25);

        const firingUI = wrapper.find('.firing');

        expect(firingUI.text()).toContain('Hit Chance: 11%');
      });
    });

    describe('Clicking Fire Buttons', () => {
      beforeEach(() => {
        wrapper = shallow(<Shooting sal={10} level={4} firearm={testFAMAS()} setFirearm={setFirearm} />);

        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        wrapper.find('span[children="Shooter Stance"]').closest('button').simulate('click');
        wrapper.find('StanceSelectModal').invoke('setStance')('Kneeling');

        wrapper.find('span[children="Target Size"]').closest('button').simulate('click');
        wrapper.find('TargetSizeSelectModal').invoke('setSize')('Fire Over/Around');

        wrapper.find('Aiming').invoke('setAims')(3);
      });

      it('should only reset aims when the fire button is clicked', () => {
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('Aiming').props().aims).toBe(1);
        expect(wrapper.find('span[children="Shooter Stance"]').closest('button').text()).toContain('Kneeling');
        expect(wrapper.find('span[children="Target Size"]').closest('button').text()).toContain('Fire Over/Around');
      });

      it('should minus the SAB from the EAL when the sustained fire button is clicked', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');

        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        expect(wrapper.find('Aiming').props().aims).toBe(3);
        expect(wrapper.find('span[children="Shooter Stance"]').closest('button').text()).toContain('Kneeling');
        expect(wrapper.find('span[children="Target Size"]').closest('button').text()).toContain('Fire Over/Around');

        expect(wrapper.find('.firing').text()).toContain('Hit Chance: 15%');
      });

      it('should minus the SAB from the EAL every time the sustained fire button is clicked', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');

        wrapper.find('button[children="Sustained Fire"]').simulate('click');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        expect(wrapper.find('Aiming').props().aims).toBe(3);
        expect(wrapper.find('span[children="Shooter Stance"]').closest('button').text()).toContain('Kneeling');
        expect(wrapper.find('span[children="Target Size"]').closest('button').text()).toContain('Fire Over/Around');

        expect(wrapper.find('.firing').text()).toContain('Hit Chance: 7%');
      });

      it('should replace Fire button with Cease Fire button from the EAL when the sustained fire button is clicked', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');

        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        expect(wrapper.find('button[children="FIRE"]').exists()).toBe(false);
        expect(wrapper.find('button[children="Cease Fire"]').exists()).toBe(true);
      });

      it('should reset aims to 1 and sab to 0 when Cease Fire button clicked', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');

        wrapper.find('button[children="Sustained Fire"]').simulate('click');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        wrapper.find('button[children="Cease Fire"]').simulate('click');

        expect(wrapper.find('Aiming').props().aims).toBe(1);
        expect(wrapper.find('.firing').text()).toContain('Hit Chance: 3%');
        expect(wrapper.find('button[children="Cease Fire"]').exists()).toBe(false);
      });
    });
    describe('Ammo Used Tally', () => {
      beforeEach(() => {
        wrapper = shallow(<Shooting sal={10} level={4} firearm={testFAMAS()} setFirearm={setFirearm} />);
      });

      it('should add one for single fire', () => {
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 1');
      });

      it('should track multiple shots in single fire', () => {
        wrapper.find('button[children="FIRE"]').simulate('click');
        wrapper.find('button[children="FIRE"]').simulate('click');
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 3');
      });

      it('should add auto fire rate for auto fire', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 8');
      });

      it('should track multiple bursts for auto fire', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');
        wrapper.find('button[children="FIRE"]').simulate('click');
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 16');
      });

      it('should track expended rounds in sustained fire for auto fire', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 16');
      });

      it('should not expend rounds on Cease Fire', () => {
        wrapper.find('FireSelector').invoke('setRof')('Auto');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        wrapper.find('button[children="Cease Fire"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 16');
      });

      it('should add 3 rounds for three round burst', () => {
        wrapper.find('FireSelector').invoke('setRof')('3RB');
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 3');
      });

      it('should track multiple three round bursts', () => {
        wrapper.find('FireSelector').invoke('setRof')('3RB');
        wrapper.find('button[children="FIRE"]').simulate('click');
        wrapper.find('button[children="FIRE"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 6');
      });

      it('should reset used rounds when reload button clicked', () => {
        wrapper.find('FireSelector').invoke('setRof')('3RB');
        wrapper.find('button[children="FIRE"]').simulate('click');
        wrapper.find('button[children="FIRE"]').simulate('click');

        wrapper.find('button[children="Reload"]').simulate('click');

        expect(wrapper.find('.firing').text()).toContain('Rounds Fired: 0');
      });

      it('should reset sab and aims reload button clicked', () => {
        wrapper.find('span[children="Range"]').closest('button').simulate('click');
        wrapper.find('RangeSelectModal').invoke('setRange')(100);

        wrapper.find('FireSelector').invoke('setRof')('Auto');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');
        wrapper.find('button[children="Sustained Fire"]').simulate('click');

        wrapper.find('button[children="Reload"]').simulate('click');

        expect(wrapper.find('Aiming').props().aims).toBe(1);
        expect(wrapper.find('.firing').text()).toContain('Hit Chance: 11%');
      });

      it('should show warning when 1 shot left in Single fire', () => {
        const firearm = testFAMAS();
        firearm.mag[0].cap = 1;
        wrapper = shallow(<Shooting sal={10} level={4} firearm={firearm} setFirearm={setFirearm} />);

        const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

        expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
      });

      it('should show warning when 3 rounds left in 3RB', () => {
        const firearm = testFAMAS();
        firearm.mag[0].cap = 3;
        wrapper = shallow(<Shooting sal={10} level={4} firearm={firearm} setFirearm={setFirearm} />);

        wrapper.find('FireSelector').invoke('setRof')('3RB');

        const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

        expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
      });

      it('should show warning when less than 3 rounds left in 3RB', () => {
        const firearm = testFAMAS();
        firearm.mag[0].cap = 2;
        wrapper = shallow(<Shooting sal={10} level={4} firearm={firearm} setFirearm={setFirearm} />);

        wrapper.find('FireSelector').invoke('setRof')('3RB');

        const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

        expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
      });

      it('should show warning when 1 burst left in Auto', () => {
        const firearm = testFAMAS();
        firearm.mag[0].cap = 8;
        wrapper = shallow(<Shooting sal={10} level={4} firearm={firearm} setFirearm={setFirearm} />);

        wrapper.find('FireSelector').invoke('setRof')('Auto');

        const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

        expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
      });

      it('should show warning when less than 1 burst left in Auto', () => {
        const firearm = testFAMAS();
        firearm.mag[0].cap = 7;
        wrapper = shallow(<Shooting sal={10} level={4} firearm={firearm} setFirearm={setFirearm} />);

        wrapper.find('FireSelector').invoke('setRof')('Auto');

        const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

        expect(roundsFiredDiv.childAt(1).props().className).toBe('lowMag');
      });

      it('should show warning when out of ammo', () => {
        const firearm = testFAMAS();
        firearm.mag[0].cap = 0;
        wrapper = shallow(<Shooting sal={10} level={4} firearm={firearm} setFirearm={setFirearm} />);

        const roundsFiredDiv = wrapper.find('span[children="Rounds Fired: "]').closest('div');

        expect(roundsFiredDiv.childAt(1).props().className).toBe('emptyMag');
      });
    });
  });
});
