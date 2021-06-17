import React from 'react';
import { mount } from 'enzyme';
import SelectLauncherModal from './component';

describe('the select grenade/rocket launcher modal', () => {
  describe('the list of launchers', () => {
    let wrapper;
    const toggleOffWeaponCardViews = jest.fn();
    const addLauncher = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <SelectLauncherModal toggleOffWeaponCardViews={toggleOffWeaponCardViews} addLauncher={addLauncher} />,
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display list of weapons', () => {
      expect(wrapper.text()).toContain('M79');
    });

    it('should be possible to see launcher stats', () => {
      wrapper.find('.button--question').at(0).simulate('click');

      expect(wrapper.find('WeaponStatsTable').exists()).toBe(true);
    });

    it('should be possible select a launcher', () => {
      wrapper.find('span[children="M79"]').closest('div').simulate('click');

      expect(addLauncher).toHaveBeenCalledWith('M79');
    });

    it('should close the modal when selection made', () => {
      wrapper.find('span[children="M79"]').closest('div').simulate('click');

      expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showLaunchers');
    });

    it('should be possible to close modal without selecting launcher', () => {
      wrapper.find('.close').simulate('click');

      expect(toggleOffWeaponCardViews).toHaveBeenCalledWith('showLaunchers');
    });
  });

  describe('rendering data for grenade launchers', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<SelectLauncherModal />);
      wrapper.find('span[children="M79"]').closest('.row').find('button').simulate('click');
    });

    it('should render the correct ballistic ranges', () => {
      const header = wrapper.find('.WeaponStatHeader');

      expect(header.text()).toContain('40100200400');
    });

    it('should contain the correct data on line one of the table', () => {
      const line = wrapper.find('.gunTableLine').at(0);

      expect(line.text()).toBe('L291-21HEATPEN288288288PEN1.61.410.70.4');
    });

    it('should contain the correct data on line two of the table', () => {
      const line = wrapper.find('.gunTableLine').at(1);

      expect(line.text()).toBe('W6.52-11DC101010DC11111');
    });

    it('should contain the correct data on line three of the table', () => {
      const line = wrapper.find('.gunTableLine').at(2);

      expect(line.text()).toBe('3-8BSHC*2471141');
    });

    it('should contain the correct data on line four of the table', () => {
      const line = wrapper.find('.gunTableLine').at(3);

      expect(line.text()).toBe('RT104-7BC24171231251');
    });

    it('should contain the correct data on line five of the table', () => {
      const line = wrapper.find('.gunTableLine').at(4);

      expect(line.text()).toBe('ROF-5-5');
    });

    it('should contain the correct data on line six of the table', () => {
      const line = wrapper.find('.gunTableLine').at(5);

      expect(line.text()).toBe('6-4HEPEN2.12.12.1PEN1.61.410.70.4');
    });

    it('should contain the correct data on line seven of the table', () => {
      const line = wrapper.find('.gunTableLine').at(6);

      expect(line.text()).toBe('Cap17-3DC101010DC11111');
    });

    it('should contain the correct data on line eight of the table', () => {
      const line = wrapper.find('.gunTableLine').at(7);

      expect(line.text()).toBe('AW0.51BSHC*3621562');
    });

    it('should contain the correct data on line nine of the table', () => {
      const line = wrapper.find('.gunTableLine').at(8);

      expect(line.text()).toBe('RndBC27380251361');
    });

    it('should contain the correct data on line ten of the table', () => {
      const line = wrapper.find('.gunTableLine').at(9);

      expect(line.text()).toBe('');
    });

    it('should contain the correct data on line eleven of the table', () => {
      const line = wrapper.find('.gunTableLine').at(10);

      expect(line.text()).toBe('MR200AOI14');
    });

    it('should contain the correct data on line twelve of the table', () => {
      const line = wrapper.find('.gunTableLine').at(11);

      expect(line.text()).toBe('BA23101');
    });

    it('should contain the correct data on line thirteen of the table', () => {
      const line = wrapper.find('.gunTableLine').at(12);

      expect(line.text()).toBe('SAB11TOF113380');
    });
  });

  describe('rendering data for disposable anti-tank rockets', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<SelectLauncherModal />);
      wrapper.find('span[children="M72 A2 LAW"]').closest('.row').find('button').simulate('click');
    });

    it('should contain the correct data on line one of the table', () => {
      const line = wrapper.find('.gunTableLine').at(0);

      expect(line.text()).toBe('L26/351-20HEATPEN68h68h68h68hPEN54.94.74.54.13.3');
    });

    it('should contain the correct data on line two of the table', () => {
      const line = wrapper.find('.gunTableLine').at(1);

      expect(line.text()).toBe('W5.22-11DC10101010DC777765');
    });

    it('should contain the correct data on line three of the table', () => {
      const line = wrapper.find('.gunTableLine').at(2);

      expect(line.text()).toBe('3-8BSHC1530-3-7-12');
    });

    it('should contain the correct data on line four of the table', () => {
      const line = wrapper.find('.gunTableLine').at(3);

      expect(line.text()).toBe('RT144-6BC11h2457036155');
    });

    it('should contain the correct data on line five of the table', () => {
      const line = wrapper.find('.gunTableLine').at(4);

      expect(line.text()).toBe('ROF-5-5');
    });

    it('should contain the correct data on line six of the table', () => {
      const line = wrapper.find('.gunTableLine').at(5);

      expect(line.text()).toBe('6-4');
    });

    it('should contain the correct data on line seven of the table', () => {
      const line = wrapper.find('.gunTableLine').at(6);

      expect(line.text()).toBe('Cap17-3');
    });

    it('should contain the correct data on line eight of the table', () => {
      const line = wrapper.find('.gunTableLine').at(7);

      expect(line.text()).toBe('AW-8-2');
    });

    it('should contain the correct data on line nine of the table', () => {
      const line = wrapper.find('.gunTableLine').at(8);

      expect(line.text()).toBe('');
    });

    it('should contain the correct data on line ten of the table', () => {
      const line = wrapper.find('.gunTableLine').at(9);

      expect(line.text()).toBe('');
    });

    it('should contain the correct data on line eleven of the table', () => {
      const line = wrapper.find('.gunTableLine').at(10);

      expect(line.text()).toBe('MR650AOI11');
    });

    it('should contain the correct data on line twelve of the table', () => {
      const line = wrapper.find('.gunTableLine').at(11);

      expect(line.text()).toBe('BA11-1-11-20');
    });

    it('should contain the correct data on line thirteen of the table', () => {
      const line = wrapper.find('.gunTableLine').at(12);

      expect(line.text()).toBe('SABTOF5143275');
    });
  });
});
