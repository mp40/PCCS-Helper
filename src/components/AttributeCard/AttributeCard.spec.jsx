import React from 'react';
import { shallow, mount } from 'enzyme';

import { Provider } from 'react-redux';

import { getStore } from '../../helpers/testHelpers';

import AttributeCard from './component';
import ConnectedAttributeCard from '.';

describe('Character Attributes', () => {
  describe('the attribute card', () => {
    const modifyStrengthValue = jest.fn();
    const modifyIntelligenceValue = jest.fn();
    const modifyWillpowerValue = jest.fn();
    const modifyHealthValue = jest.fn();
    const modifyAgilityValue = jest.fn();

    const wrapper = shallow(<AttributeCard
      str={10}
      int={10}
      hlt={10}
      wil={10}
      agi={10}
      modifyStrengthValue={modifyStrengthValue}
      modifyIntelligenceValue={modifyIntelligenceValue}
      modifyWillpowerValue={modifyWillpowerValue}
      modifyHealthValue={modifyHealthValue}
      modifyAgilityValue={modifyAgilityValue}
    />);

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should render values', () => {
      expect(wrapper.find('StatInput')).toHaveLength(5);
      expect(wrapper.find('[statName="Strength"]').prop('statLevel')).toBe(10);
      expect(wrapper.find('[statName="Intelligence"]').prop('statLevel')).toBe(10);
      expect(wrapper.find('[statName="Willpower"]').prop('statLevel')).toBe(10);
      expect(wrapper.find('[statName="Health"]').prop('statLevel')).toBe(10);
      expect(wrapper.find('[statName="Agility"]').prop('statLevel')).toBe(10);
    });

    it('should have a gaurd to prevent changing value less than 3', () => {
      const input = wrapper.find('[statName="Strength"]').dive(0);

      input.find('.updateStrength').simulate('click');
      input.find('input').simulate('keyUp', { target: { value: 2 },
        key: 'Enter' });

      expect(modifyStrengthValue).not.toHaveBeenCalled();
    });

    it('should have a gaurd to prevent changing value greater than 19', () => {
      const input = wrapper.find('[statName="Strength"]').dive(0);

      input.find('.updateStrength').simulate('click');
      input.find('input').simulate('keyUp', { target: { value: 20 },
        key: 'Enter' });

      expect(modifyStrengthValue).not.toHaveBeenCalled();
    });
  });

  describe('attribute card intergration test', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedAttributeCard />
      </Provider>,
    );

    const inputAttribute = (attributeId, newValue) => {
      wrapper.find(attributeId).simulate('click');
      wrapper.find(`${attributeId} input`).simulate('keyUp', { target: { value: newValue },
        key: 'Enter' });
    };

    it('should update strength', () => {
      inputAttribute('.updateStrength', '11');

      expect(wrapper.find('.updateStrength').text()).toBe('11');
    });

    it('should update intelligence', () => {
      inputAttribute('.updateIntelligence', '12');

      expect(wrapper.find('.updateIntelligence').text()).toBe('12');
    });

    it('should update willpower', () => {
      inputAttribute('.updateWillpower', '17');

      expect(wrapper.find('.updateWillpower').text()).toBe('17');
    });

    it('should update health', () => {
      inputAttribute('.updateHealth', '14');

      expect(wrapper.find('.updateHealth').text()).toBe('14');
    });

    it('should update agility', () => {
      inputAttribute('.updateAgility', '18');

      expect(wrapper.find('.updateAgility').text()).toBe('18');
    });
  });
});

// mptodo - maybe i dont need the below test
//     it('updates actions and other combat stats when attributes change', () => {
//       const gunActionsTable = wrapper.find('.actionsTable').at(0);
//       const handActionsTable = wrapper.find('.actionsTable').at(1);
//       const additionalData = wrapper.find('.additionalCombatData');
//       expect(gunActionsTable.text()).toEqual('Gun2121');
//       expect(handActionsTable.text()).toEqual('Hand3222');
//       expect(additionalData.text()).toEqual('BS 3MS 8DB 3');
//     });
