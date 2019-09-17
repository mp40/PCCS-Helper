import React from 'react';
import { shallow } from 'enzyme';
import FirearmNotes from './FirearmNotes';

const getSpareGunMags = (magQty, magCap, magType = 'Mag') => [{ type: magType, qty: magQty, cap: magCap }];

describe('<FirearmNotes/>', () => {
  describe('rendering spare ammo', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<FirearmNotes gunObj={{ mag: [] }} />);
    it('should render the firearms additional ammo', () => {
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(0, 20) } });
      expect(wrapper.text()).toContain('0 x 20 rnd Mag');
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(1, 20) } });
      expect(wrapper.text()).toContain('1 x 20 rnd Mag');
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(8, 30) } });
      expect(wrapper.text()).toContain('8 x 30 rnd Mag');
    });
    it('should render additional ammo for loose rounds', () => {
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(0, 7, 'Rnd') } });
      expect(wrapper.text()).toContain('0 x Single Rounds');
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(0, 7, 'Rnd') } });
      expect(wrapper.text()).toContain('0 x Single Round');
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(2, 7, 'Rnd') } });
      expect(wrapper.text()).toContain('2 x Single Rounds');
      wrapper.setProps({ gunObj: { mag: getSpareGunMags(7, 7, 'Rnd') } });
      expect(wrapper.text()).toContain('7 x Single Rounds');
    });
    it('should be able to render secondary mags', () => {
      wrapper.setProps({ gunObj: { mag: [...getSpareGunMags(4, 30), ...getSpareGunMags(2, 20)] } });
      expect(wrapper.text()).toContain('4 x 30 rnd Mag2 x 20 rnd Mag');
      wrapper.setProps({ gunObj: { mag: [...getSpareGunMags(6, 33), ...getSpareGunMags(3, 22), ...getSpareGunMags(1, 99, 'Beta-C')] } });
      expect(wrapper.text()).toContain('6 x 33 rnd Mag3 x 22 rnd Mag1 x 99 rnd Beta-C');
    });
  });
  describe('rendering modification notes', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<FirearmNotes gunObj={{ mag: [] }} />);
    it('should render even if modNotes key not present', () => {
      expect(wrapper.exists()).toBe(true);
    });
    it('should render the modifcation notes', () => {
      wrapper.setProps({ gunObj: { mag: [], modNotes: [{ note: 'first mod' }] } });
      expect(wrapper.text()).toContain('first mod');
      wrapper.setProps({ gunObj: { mag: [], modNotes: [{ note: 'first mod' }, { note: 'second mod' }] } });
      expect(wrapper.text()).toContain('first modsecond mod');
      wrapper.setProps({ gunObj: { mag: [], modNotes: [{ note: 'a' }, { note: 'b' }, { note: 'c' }, { note: 'd' }] } });
      expect(wrapper.text()).toContain('abcd');
    });
  });
  describe('rendering non-standard gun object keys', () => {
    const wrapper = shallow(<FirearmNotes gunObj={{ mag: [] }} />);
    it('should render "Bipod" if key value bipod exists and is true', () => {
      expect(wrapper.text()).not.toContain('Bipod');
      wrapper.setProps({ gunObj: { mag: [], bipod: true } });
      expect(wrapper.text()).toContain('Bipod');
    });
    it('should render "Optics" if key value optics exists and is true', () => {
      expect(wrapper.text()).not.toContain('Optics');
      wrapper.setProps({ gunObj: { mag: [], optics: true } });
      expect(wrapper.text()).toContain('Optics');
    });
    it('should render selector key value if present', () => {
      expect(wrapper.text()).not.toContain('Full Auto Only');
      wrapper.setProps({ gunObj: { mag: [], selector: 'Full Auto Only' } });
      expect(wrapper.text()).toContain('Full Auto Only');
    });
  });
});
