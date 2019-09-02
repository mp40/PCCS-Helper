import React from 'react';
import { shallow } from 'enzyme';
import BodyArmourTable from './index';

const helmet = {
  name: 'M1x',
  pf: 5,
  bpf: 4,
  ac: 'i',
  weight: 2.5,
};

const vest = {
  name: 'M69x',
  pf: 6,
  bpf: 2,
  ac: 'ix',
  weight: 8.5,
};

describe('BodyArmourTable', () => {
  describe('defaults', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<BodyArmourTable helmet={undefined} vest={undefined} />);
    const helmetRow = wrapper.find('tbody').childAt(0);
    const vestRow = wrapper.find('tbody').childAt(1);
    it('should render "No Helmet" data if helmet is not defined', () => {
      expect(helmetRow.find('.name').text()).toContain('No Helmet');
      expect(helmetRow.find('.pf').text()).toContain('0');
      expect(helmetRow.find('.bpf').text()).toContain('0');
      expect(helmetRow.find('.ac').text()).toContain('-');
    });
    it('should render "No Vest" data if helmet is not defined', () => {
      expect(vestRow.find('.name').text()).toContain('No Vest');
      expect(vestRow.find('.pf').text()).toContain('0');
      expect(vestRow.find('.bpf').text()).toContain('0');
      expect(vestRow.find('.ac').text()).toContain('-');
    });
  });
  describe('helmet data', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<BodyArmourTable helmet={helmet} />);
    const helmetRow = wrapper.find('tbody').childAt(0);
    it('should render the helmet name', () => {
      expect(helmetRow.find('.name').text()).toContain('M1x');
    });
    it('should render the protection factor', () => {
      expect(helmetRow.find('.pf').text()).toContain('5');
    });
    it('should render the blunt protection factor', () => {
      expect(helmetRow.find('.bpf').text()).toContain('4');
    });
    it('should render the armour class', () => {
      expect(helmetRow.find('.ac').text()).toContain('I');
    });
  });
  describe('vest data', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<BodyArmourTable vest={vest} />);
    const vestRow = wrapper.find('tbody').childAt(1);
    it('should render the vest name', () => {
      expect(vestRow.text()).toContain('M69x');
    });
    it('should render the protection factor', () => {
      expect(vestRow.text()).toContain('6');
    });
    it('should render the blunt protection factor', () => {
      expect(vestRow.text()).toContain('2');
    });
    it('should render the armour class', () => {
      expect(vestRow.text()).toContain('I');
    });
  });
});
