import { mountAppWithStore, storeWithEquipment } from '../../helpers/testHelpers';

describe('Character Generation', () => {
  const wrapper = mountAppWithStore();
  wrapper.find('#activateCreateChar').simulate('click');

  const inputAttribute = (attributeId, newValue) => {
    wrapper.find(attributeId).simulate('click');
    wrapper.find(`${attributeId} input`).simulate('keyUp', { target: { value: newValue },
      key: 'Enter' });
  };

  it('should render Character Generation page', () => {
    expect(wrapper.text()).toContain('Attribute');
  });
  it('should render the attributes', () => {
    expect(wrapper.text()).toContain('Strength');
    expect(wrapper.text()).toContain('Intelligence');
    expect(wrapper.text()).toContain('Health');
    expect(wrapper.text()).toContain('Willpower');
    expect(wrapper.text()).toContain('Agility');
  });
  it('shoulder render attribute values', () => {
    expect(wrapper.text()).toContain('10');
  });
  describe('changing attribute values', () => {
    it('should update strength', () => {
      inputAttribute('#updateStr', '11');
      expect(wrapper.text()).toContain('11');
    });
    it('should update intelligence', () => {
      inputAttribute('#updateInt', '12');
      expect(wrapper.text()).toContain('12');
    });
    it('should update health', () => {
      inputAttribute('#updateHlt', '14');
      expect(wrapper.text()).toContain('14');
    });
    it('should update willpower', () => {
      inputAttribute('#updateWil', '17');
      expect(wrapper.text()).toContain('17');
    });
    it('should update agility', () => {
      inputAttribute('#updateAgi', '18');
      expect(wrapper.text()).toContain('18');
    });
    it('updates actions when attributes change', () => {
      const actionsTable = wrapper.find('#gunActionTable');
      const firstImpulse = actionsTable.childAt(1);
      const secondImpulse = actionsTable.childAt(2);
      const thirdImpulse = actionsTable.childAt(3);
      const fourthImpulse = actionsTable.childAt(4);
      expect(firstImpulse.text()).toContain('2');
      expect(secondImpulse.text()).toContain('1');
      expect(thirdImpulse.text()).toContain('2');
      expect(fourthImpulse.text()).toContain('1');
    });
    describe('edge cases', () => {
      it('should not be possible to enter values under 3', () => {
        inputAttribute('#updateAgi', '2');
        expect(wrapper.find('.attributeRow').at(4).text()).not.toContain('2');
      });
      it('should not be possible to enter values over 19', () => {
        inputAttribute('#updateAgi', '20');
        expect(wrapper.find('.attributeRow').at(4).text()).not.toContain('20');
      });
    });
  });
  describe('Comabt Data', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');

    describe('Combat Actions', () => {
      it('should render gun combat actions', () => {
        const rows = wrapper.find('.combatActions tbody tr');
        expect(rows.at(0).text()).toEqual('Gun1111');
      });
      it('should render gun combat actions', () => {
        const rows = wrapper.find('.combatActions tbody tr');
        expect(rows.at(1).text()).toEqual('Hand1111');
      });
    });
    describe('movement and damage bonus', () => {
      const data = wrapper.find('.additionalCombatData');
      it('should render base speed', () => {
        expect(data.text()).toContain('3');
      });
      it('should render max speed', () => {
        expect(data.text()).toContain('6');
      });
      it('should render damage bonus', () => {
        expect(data.text()).toContain('1');
      });
    });
  });
  describe('the equipment list', () => {
    const wrapper = mountAppWithStore();
    wrapper.find('#activateCreateChar').simulate('click');
    const addEquipment = (wrapper) => {
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      const requiredEquipment = wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0);
      requiredEquipment.simulate('click');
    };
    it('should render', () => {
      expect(wrapper.text()).toContain('Equipment');
    });
    it('should show total equipment weight', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      const listWrapper = wrapper.find('.equipmentListBody');
      expect(listWrapper.text()).toContain(2.2);
    });
    it('should render equipment list', () => {
      wrapper.find('#addEquipment').simulate('click');
      expect(wrapper.text()).toContain('Baseball Bat');
    });
    it('should have a button to close the equipment modal', () => {
      const wrapper = mountAppWithStore();
      wrapper.find('#activateCreateChar').simulate('click');
      wrapper.find('#addEquipment').simulate('click');
      wrapper.find('#closeEquipmentModal').simulate('click');
      expect(wrapper.text()).not.toContain('Baseball Bat');
    });
    it('should add selected equipment name to character equipmentTable', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      expect(wrapper.find('#characterEquipmentList').text()).toContain('Baseball Bat');
    });
    it('should add selected equipment weight to character equipmentTable', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      expect(wrapper.find('#characterEquipmentList').text()).toContain(2.2);
    });
    it('should add selected equipment quantity to character equipmentTable', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      expect(wrapper.find('#characterEquipmentList').text()).toContain(1);
    });
    it('should add selected equipment quantity to character equipmentTable', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      expect(wrapper.find('#characterEquipmentList').childAt(1).childAt(2).text()).toContain(1);
    });
    it('should be possible increment qty up and down', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      wrapper.find('#qtyUp').simulate('click');
      expect(wrapper.find('#characterEquipmentList').childAt(1).childAt(2).text()).toContain(2);
      wrapper.find('#qtyDown').simulate('click');
      expect(wrapper.find('#characterEquipmentList').childAt(1).childAt(2).text()).toContain(1);
    });
    it('should calculate weight * qty', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      expect(wrapper.find('#characterEquipmentList').childAt(1).childAt(3).text()).toContain(2.2);
      wrapper.find('#qtyUp').simulate('click');
      expect(wrapper.find('#characterEquipmentList').childAt(1).childAt(3).text()).toContain(4.4);
    });
    it('should be possible to remove equipment fromn list', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      wrapper.find('#filterEquipmentList').simulate('click');
      wrapper.find('#removeEquip').simulate('click');
      expect(wrapper.text()).not.toContain('Baseball Bat');
    });
    it('should remove weight of deleted quipment', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      wrapper.find('#filterEquipmentList').simulate('click');
      wrapper.find('#qtyUp').simulate('click');
      wrapper.find('#removeEquip').simulate('click');
      expect(wrapper.find('.menuBar').text()).toContain(5);
    });
    it('should not be possible to add the same item twice to list', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0)
        .simulate('click');
      wrapper.find('#closeEquipmentModal').simulate('click');
      expect(wrapper.find('#characterEquipmentList').children()).toHaveLength(2);
    });
    it('should clear all equipment from list', () => {
      const wrapper = mountAppWithStore();
      addEquipment(wrapper);
      wrapper.find('.equipmentListBody').at(0).childAt(1).childAt(0)
        .simulate('click');
      wrapper.find('.equipmentListBody').at(0).childAt(2).childAt(0)
        .simulate('click');
      wrapper.find('#closeEquipmentModal').simulate('click');
      wrapper.find('#clearAllEquipment').simulate('click');
      expect(wrapper.text()).not.toContain('Bayonet');
      expect(wrapper.text()).not.toContain('Basic Pouch');
      expect(wrapper.text()).not.toContain('Baseball Bat');
      expect(wrapper.text()).toContain(5);
    });
    describe('adding custom equipment', () => {
      const goToCustomEquipment = (wrapper) => {
        wrapper.find('#activateCreateChar').simulate('click');
        wrapper.find('#toggleCustomEquipment').simulate('click');
      };
      it('should be posible to add custom equipment to the list', () => {
        const wrapper = mountAppWithStore();
        goToCustomEquipment(wrapper);
        wrapper.find('#equipNameInput').simulate('change', {
          target: { value: 'CustomEquipment' },
        });
        wrapper.find('#equipWeightInput').simulate('change', {
          target: { value: '666' },
        });
        wrapper.find('#submitCustomEquipButton').simulate('click');
        expect(wrapper.text()).toContain(666);
        expect(wrapper.text()).toContain('CustomEquipment');
      });
      it('should display error msg if custom equipment name not provided', () => {
        const wrapper = mountAppWithStore();
        goToCustomEquipment(wrapper);
        wrapper.find('#equipWeightInput').simulate('change', {
          target: { value: '666' },
        });
        wrapper.find('#submitCustomEquipButton').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
      });
      it('should display error msg if custom equipment weight not provided', () => {
        const wrapper = mountAppWithStore();
        goToCustomEquipment(wrapper);
        wrapper.find('#equipNameInput').simulate('change', {
          target: { value: 'newEquipment' },
        });
        wrapper.find('#submitCustomEquipButton').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
      });
      it('should display error msg if custom equipment weight input not a number', () => {
        const wrapper = mountAppWithStore();
        goToCustomEquipment(wrapper);
        wrapper.find('#equipNameInput').simulate('change', {
          target: { value: 'newEquipment' },
        });
        wrapper.find('#equipWeightInput').simulate('change', {
          target: { value: 'x666' },
        });
        wrapper.find('#submitCustomEquipButton').simulate('click');
        expect(wrapper.text()).toContain('Please Enter Valid Equipment Name and Weight');
      });
      it('should display error msg if equipment name already selected', () => {
        const wrapper = mountAppWithStore(storeWithEquipment());
        wrapper.find('#activateCreateChar').simulate('click');
        wrapper.find('#toggleCustomEquipment').simulate('click');
        wrapper.find('#equipNameInput').simulate('change', {
          target: { value: 'newEquipment' },
        });
        wrapper.find('#equipWeightInput').simulate('change', {
          target: { value: '666' },
        });
        wrapper.find('#submitCustomEquipButton').simulate('click');
        expect(wrapper.text()).toContain('Already In List, Please Enter Valid Equipment Name');
      });
    });
    describe('filtering the equipment list', () => {
      it('should display filter tags', () => {
        const wrapper = mountAppWithStore();
        wrapper.find('#activateCreateChar').simulate('click');
        wrapper.find('#addEquipment').simulate('click');
        wrapper.find('#filterEquipmentList').simulate('click');
        expect(wrapper.text()).toContain('ALICE');
      });
      it('should filter the list based on slected criteria', () => {
        const wrapper = mountAppWithStore();
        wrapper.find('#activateCreateChar').simulate('click');
        wrapper.find('#addEquipment').simulate('click');
        wrapper.find('#filterEquipmentList').simulate('click');
        const tagContainer = wrapper.find('.tagContainer div');
        tagContainer.at(8).simulate('click');
        wrapper.find('#filterEquipmentList').simulate('click');
        expect(wrapper.text()).toContain('Boil In The Bag');
        expect(wrapper.text()).not.toContain('Baseball Bat');
      });
      it('should change the filterEquipmentList button text when filter modal open', () => {
        const wrapper = mountAppWithStore();
        wrapper.find('#activateCreateChar').simulate('click');
        wrapper.find('#addEquipment').simulate('click');
        const button = wrapper.find('#filterEquipmentList');
        expect(button.text()).toEqual('Filter List');
        button.simulate('click');
        expect(button.text()).toEqual('Apply Filter');
      });
      it('should be able to clear filters', () => {
        // TODO
      });
    });
  });
});
