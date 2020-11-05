import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { getStore } from '../../helpers/testHelpers';

import ConnectedEquipmentCard from '.';

describe('the equipment list', () => {
  describe('equipment intergration tests', () => {
    const store = getStore();

    const wrapper = mount(
      <Provider store={store}>
        <ConnectedEquipmentCard />
      </Provider>,
    );

    it('should be possible to add equipment', () => {
      wrapper.find('#addEquipment').simulate('click');
      wrapper.find('div[children="Baseball Bat"]').simulate('click');

      expect(wrapper.find('thead').text()).toContain('2.2');
      expect(wrapper.find('tbody').find('tr').text()).toContain('Baseball Bat2.212.2');
    });

    it('should be possible increment qty up', () => {
      wrapper.find('#qtyUpEquipment').simulate('click');

      expect(wrapper.find('tbody').find('tr').text()).toContain('Baseball Bat2.224.4');
      expect(wrapper.find('thead').text()).toContain('4.4');
    });

    it('should be possible increment qty down', () => {
      wrapper.find('#qtyDownEquipment').simulate('click');

      expect(wrapper.find('tbody').find('tr').text()).toContain('Baseball Bat2.212.2');
      expect(wrapper.find('thead').text()).toContain('2.2');
    });

    it('should be possible to remove equipment from list', () => {
      wrapper.find('.removeBaseballBat').simulate('click');

      expect(wrapper.find('tbody').text()).not.toContain('Baseball Bat');
      expect(wrapper.find('thead').text()).toContain('lbs0');
    });

    it('should clear all equipment from list', () => {
      wrapper.find('div[children="Baseball Bat"]').simulate('click');
      wrapper.find('div[children="Basic Pouch"]').simulate('click');
      wrapper.find('div[children="Bayonet"]').simulate('click');

      wrapper.find('#clearAllEquipment').simulate('click');

      expect(wrapper.find('tbody').text()).not.toContain('Bayonet');
      expect(wrapper.find('tbody').text()).not.toContain('Basic Pouch');
      expect(wrapper.find('tbody').text()).not.toContain('Baseball Bat');
      expect(wrapper.find('thead').text()).toContain('lbs0');
    });
  });
});

// mptodo check, delete
// describe('the equipment list', () => {
//   let wrapper;

//   const addEquipment = () => {
//     wrapper.find('#addEquipment').simulate('click');
//     const requiredEquipment = wrapper.find('.equipmentListBody').at(0).childAt(0).childAt(0);
//     requiredEquipment.simulate('click');
//   };
//   beforeEach(() => {
//     wrapper = mountAppWithStore(storeWithCreateCharacterView());
//   });
//   describe('equipment headings', () => {
//     it('should render', () => {
//       expect(wrapper.text()).toContain('Equipment');
//     });
//     it('should show total equipment weight', () => {
//       addEquipment(wrapper);
//       const listWrapper = wrapper.find('.equipmentListBody');
//       expect(listWrapper.text()).toContain(2.2);
//     });
//   });
//   describe('interacting with the select equipment interface', () => {
//     it('should render equipment selection ist', () => {
//       wrapper.find('#addEquipment').simulate('click');
//       expect(wrapper.text()).toContain('Baseball Bat');
//     });
//     it('should have a button to close the select equipment modal', () => {
//       wrapper.find('#addEquipment').simulate('click');
//       wrapper.find('#closeEquipmentModal').simulate('click');
//       expect(wrapper.text()).not.toContain('Baseball Bat');
//     });
//   });
//   describe('equipment quantity', () => {
//     it('should be possible increment qty up and down', () => {
//       addEquipment(wrapper);
//       wrapper.find('#qtyUpEquipment').simulate('click');
//       expect(wrapper.find('.BaseballBatRow').childAt(2).text()).toContain(2);
//       wrapper.find('#qtyDownEquipment').simulate('click');
//       expect(wrapper.find('.BaseballBatRow').childAt(2).text()).toContain(1);
//     });
//     it('should calculate weight * qty', () => {
//       addEquipment(wrapper);
//       expect(wrapper.find('.BaseballBatRow').childAt(3).text()).toContain(2.2);
//       wrapper.find('#qtyUpEquipment').simulate('click');
//       expect(wrapper.find('.BaseballBatRow').childAt(3).text()).toContain(4.4);
//     });
//   });
//   describe('removing equipment', () => {
//     it('should be possible to remove equipment from list', () => {
//       addEquipment(wrapper);
//       wrapper.find('#filterEquipmentList').simulate('click');
//       wrapper.find('.removeBaseballBat').simulate('click');
//       expect(wrapper.text()).not.toContain('Baseball Bat');
//     });
//     it('should remove weight of deleted quipment', () => {
//       addEquipment(wrapper);
//       wrapper.find('#filterEquipmentList').simulate('click');
//       wrapper.find('#qtyUpEquipment').simulate('click');
//       wrapper.find('.removeBaseballBat').simulate('click');
//       expect(wrapper.find('.menuBar').text()).toContain(5);
//     });
//     it('should clear all equipment from list', () => {
//       addEquipment(wrapper);
//       wrapper.find('.equipmentListBody').at(0).childAt(1).childAt(0)
//         .simulate('click');
//       wrapper.find('.equipmentListBody').at(0).childAt(2).childAt(0)
//         .simulate('click');
//       wrapper.find('#closeEquipmentModal').simulate('click');
//       wrapper.find('#clearAllEquipment').simulate('click');
//       expect(wrapper.text()).not.toContain('Bayonet');
//       expect(wrapper.text()).not.toContain('Basic Pouch');
//       expect(wrapper.text()).not.toContain('Baseball Bat');
//       expect(wrapper.text()).toContain(5);
//     });
//   });
// });
