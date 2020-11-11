import React from 'react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';
// import { Provider } from 'react-redux';
import WeaponsCard, { getSelectedWeapons } from './component';
import { getStore } from '../../helpers/testHelpers';

import ConnectedWeaponsCard from '.';

const waitOneSec = (simulate) => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 1001);
}));

describe('The Weapons Card', () => {
  describe('weapons intergration tests', () => {
    describe('firearms', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should be able to select a weapon', () => {
        wrapper.find('#addFirearm').simulate('click');
        wrapper.find('span[children="M1911A1"]').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M1911A1313');
        expect(wrapper.find('thead').text()).toContain('lbs3');
      });

      it('should be possible to increase qty of a gun', () => {
        wrapper.find('#qtyUpFirearm').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M1911A1326');
        expect(wrapper.find('thead').text()).toContain('lbs6');
      });

      it('should be possible to decrease qty of a gun', () => {
        wrapper.find('#qtyDownFirearm').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M1911A1313');
        expect(wrapper.find('thead').text()).toContain('lbs3');
      });

      it('should be possible to increase spare ammo', () => {
        wrapper.find('#qtyUpMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').text()).toContain('1 x 7 round Mag');
        expect(wrapper.find('thead').text()).toContain('lbs3.7');
      });

      it('should be possible to decrease spare ammo', () => {
        wrapper.find('#qtyDownMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').text()).toContain('0 x 7 round Mag');
        expect(wrapper.find('thead').text()).toContain('lbs3');
      });

      it('should be possible to delete a gun', () => {
        wrapper.find('.removeM1911A1').simulate('click');

        expect(wrapper.find('tbody').text()).not.toContain('M1911A1313');
        expect(wrapper.find('thead').text()).toContain('lbs0');
      });
    });

    describe('grenades', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should be possible to select a grenade', () => {
        wrapper.find('#addGrenade').simulate('click');
        wrapper.find('.selectM2').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M21.311.3');
        expect(wrapper.find('thead').text()).toContain('lbs1.3');
      });

      it('should be possible to increment grenade qty up', () => {
        wrapper.find('.M2Row').find('#qtyUpGrenade').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M21.322.6');
        expect(wrapper.find('thead').text()).toContain('lbs2.6');
      });

      it('should be possible to increment grenade qty down', () => {
        wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M21.311.3');
        expect(wrapper.find('thead').text()).toContain('lbs1.3');
      });

      it('should be possible ro remove grenade', () => {
        wrapper.find('.removeM2').simulate('click');

        expect(wrapper.find('tbody').text()).not.toContain('M2');
        expect(wrapper.find('thead').text()).toContain('lbs0');
      });

      // mptodo
      //     it('should be not possible for grenade qty to be less than one', () => {
      //       wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');
      //       expect(wrapper.find('.M2Row').text()).toContain('M21.31');
      //       expect(wrapper.find('.M2Row').text()).not.toContain('M21.30');
      //     });
    });

    describe('launchers', () => {
      const store = getStore();

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedWeaponsCard />
        </Provider>,
      );

      it('should be possible to select a launcher', () => {
        wrapper.find('#addLauncher').simulate('click');
        wrapper.find('span[children="M79"]').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M796.516.5');
        expect(wrapper.find('thead').text()).toContain('lbs6.5');
      });

      it('should be possible to increment launcher qty', () => {
        wrapper.find('#qtyUpLauncher').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M796.5213');
        expect(wrapper.find('thead').text()).toContain('lbs13');
      });

      it('should be possible to decrement launcher qty', () => {
        wrapper.find('#qtyDownLauncher').simulate('click');

        expect(wrapper.find('tbody').text()).toContain('M796.516.5');
        expect(wrapper.find('thead').text()).toContain('lbs6.5');
      });

      it('should be possible to increment launcher ammo', () => {
        wrapper.find('#qtyUpMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').at(0).text()).toContain('1 x HEAT');
        expect(wrapper.find('thead').text()).toContain('lbs7.01');
      });

      it('should be possible to decrement launcher ammo', () => {
        wrapper.find('#qtyDownMagType1').simulate('click');

        expect(wrapper.find('.spareMagRow').at(0).text()).toContain('0 x HEAT');
        expect(wrapper.find('thead').text()).toContain('lbs6.5');
      });

      it('should be possible to remove launcher', () => {
        wrapper.find('.removeM79').simulate('click');

        expect(wrapper.find('tbody').text()).not.toContain('M79');
        expect(wrapper.find('thead').text()).toContain('lbs0');
      });
    });
  });
});

// mptodo - delete, check
// describe('The Weapons Card', () => {
//   const gunList = (wrapper) => wrapper.find('.firearmSelectModal');
//   const selectedWeapons = (wrapper) => wrapper.find('#characterWeaponList');
//   const header = (wrapper) => wrapper.find('.weaponsHeader');
//   const navBarWeight = (wrapper) => wrapper.find('.navEquipWeight');

//   describe('Firearms', () => {

//     it('should be possible to open a list of selectable weapons', () => {
//       wrapper.find('#addFirearm').simulate('click');
//       expect(wrapper.text()).toContain('M16');
//     });
//     it('should be able to select a weapon', () => {
//       gunList(wrapper).find('#M16').simulate('click');
//       expect(selectedWeapons(wrapper).text()).toContain('M16');
//     });
//     it('should be possible to close the weapon select list', () => {
//       wrapper.find('#closeFirearmModal').simulate('click');
//       expect(wrapper.text()).not.toContain('M60');
//     });
//     it('should update the displayed weapons weight', () => {
//       expect(header(wrapper).text()).toContain('8.7');
//     });
//     it('should update total weight', () => {
//       expect(navBarWeight(wrapper).text()).toContain('13.7');
//     });
//     it('should be possible to increase qty of a gun', () => {
//       wrapper.find('#qtyUpFirearm').simulate('click');
//       expect(selectedWeapons(wrapper).text()).toContain('2');
//     });
//     it('should be possible to decrease qty of a gun', () => {
//       wrapper.find('#qtyDownFirearm').simulate('click');
//       expect(selectedWeapons(wrapper).text()).toContain('1');
//     });
//     it('should be possible to delete a gun', () => {
//       wrapper.find('.removeM16').simulate('click');
//       expect(wrapper.text()).not.toContain('M16');
//     });
//     it('should be possible to increase spare ammo', () => {
//       wrapper.find('#addFirearm').simulate('click');
//       gunList(wrapper).find('#M1911A1').simulate('click');
//       wrapper.find('#qtyUpMagType1').simulate('click');
//       expect(header(wrapper).text()).toContain('3.7');
//       expect(navBarWeight(wrapper).text()).toContain('8.7');
//     });
//     it('should be possible to decrease spare ammo', () => {
//       wrapper.find('#qtyDownMagType1').simulate('click');
//       expect(header(wrapper).text()).toContain('3');
//       expect(header(wrapper).text()).not.toContain('3.7');
//       expect(navBarWeight(wrapper).text()).toContain('8');
//       expect(navBarWeight(wrapper).text()).not.toContain('8.7');
//     });
//     it('should remove spare ammo weight from total when weapon removed', () => {
//       wrapper.find('#qtyUpMagType1').simulate('click');
//       wrapper.find('.removeM1911A1').simulate('click');
//       expect(header(wrapper).text()).toContain('0');
//       expect(navBarWeight(wrapper).text()).toContain('5');
//       expect(navBarWeight(wrapper).text()).not.toContain('5.7');
//     });
//     it('should remove all guns and ammo when remove all clicked', () => {
//       gunList(wrapper).find('#M1911A1').simulate('click');
//       wrapper.find('#qtyUpMagType1').simulate('click');
//       gunList(wrapper).find('#M60').simulate('click');
//       wrapper.find('#clearAllFirearms').simulate('click');

//       expect(selectedWeapons(wrapper).text()).not.toContain('M1911A1');
//       expect(selectedWeapons(wrapper).text()).not.toContain('M60');
//       expect(navBarWeight(wrapper).text()).toContain('5');
//     });
//   });
//   describe('firearms edge cases', () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper.find('#addFirearm').simulate('click');
//     });
//     it('should increment only the intended mag when weapons have multiple mag types', () => {
//       gunList(wrapper).find('#M16').simulate('click');
//       expect(selectedWeapons(wrapper).text()).toContain('M16');
//       const spareMagRow = wrapper.find('.spareMagRow');
//       const firstMag = spareMagRow.at(0);
//       const secondMag = spareMagRow.at(1);
//       firstMag.find('#qtyUpMagType1').simulate('click');
//       expect(firstMag.find('.spareMagRow').text()).toContain('1');
//       expect(secondMag.find('.spareMagRow').text()).not.toContain('1');
//     });
//     it('should not allow gun qty to be less than one', () => {
//       gunList(wrapper).find('#M60').simulate('click');
//       wrapper.find('#qtyDownFirearm').simulate('click');
//       expect(wrapper.find('.M60Row').childAt(2).text()).toContain('1');
//       expect(wrapper.find('.M60Row').childAt(2).text()).not.toContain('0');
//     });
//     it('should not allow mag qty to be less than 0', () => {
//       gunList(wrapper).find('#M16').simulate('click');
//       const spareMagRow = wrapper.find('.spareMagRow');
//       const firstMag = spareMagRow.at(0);
//       const secondMag = spareMagRow.at(1);
//       firstMag.find('#qtyDownMagType1').simulate('click');
//       expect(firstMag.find('.spareMagRow').text()).toContain('0');
//       secondMag.find('#qtyDownMagType2').simulate('click');
//       expect(firstMag.find('.spareMagRow').text()).toContain('0');
//     });
//     it('should not be possible to select the same weapon twice', () => {
//       gunList(wrapper).find('#M16').simulate('click');
//       gunList(wrapper).find('#M16').simulate('click');
//       expect(navBarWeight(wrapper).text()).toContain('13.7');
//     });
//   });
//   describe('firearms features', () => {
//     wrapper.find('#addFirearm').simulate('click');
//     gunList(wrapper).find('#M1911A1').simulate('click');
//     it('should be possible to view firearms stats', () => {
//       wrapper.find('.viewM1911A1').simulate('click');
//       expect(wrapper.text()).toContain('ROF');
//     });
//     it('should be possible to close firearms stats', async () => {
//       await act(async () => {
//         await waitOneSec(wrapper.find('#closeGunStatView').simulate('click'));
//       });
//       wrapper.update();
//       expect(wrapper.find('#closeGunStatView').exists()).toEqual(false);
//     });
//   });
//   describe('grenades', () => {
//     it('should be possible to open a list of selectable grenades', () => {
//       wrapper.find('#addGrenade').simulate('click');
//       expect(wrapper.text()).toContain('L2 A2');
//     });
//     it('should be possible to select a grenade', () => {
//       wrapper.find('.selectM2').simulate('click');
//       expect(selectedWeapons(wrapper).text()).toContain('M21.311.3');
//     });
//     it('should be possible to increment grenade qty up', () => {
//       wrapper.find('.M2Row').find('#qtyUpGrenade').simulate('click');
//       expect(wrapper.find('.M2Row').text()).toContain('M21.32');
//     });
//     it('should be possible to increment grenade qty down', () => {
//       wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');
//       expect(wrapper.find('.M2Row').text()).toContain('M21.31');
//     });
//     it('should be not possible for grenade qty to be less than one', () => {
//       wrapper.find('.M2Row').find('#qtyDownGrenade').simulate('click');
//       expect(wrapper.find('.M2Row').text()).toContain('M21.31');
//       expect(wrapper.find('.M2Row').text()).not.toContain('M21.30');
//     });
//     it('should be possible ro remove grenade', () => {
//       wrapper.find('.removeM2').simulate('click');
//       expect(selectedWeapons(wrapper).text()).not.toContain('M21.311.3');
//     });
//   });
//   describe('launchers', () => {
//     const wrapper = shallow(<WeaponsCard firearms={[]} grenades={[]} removeAllFirearms={() => {}} />);
//     const setSpy = () => jest.spyOn(wrapper.instance(), 'toggleOnWeaponsCardViews');
//     it('should be possible to open a list of selectable launchers', () => {
//       const spyOnMethod = setSpy();
//       wrapper.find('GearCard').dive().find('#addLauncher').simulate('click');
//       expect(spyOnMethod).toHaveBeenCalledWith('showLaunchers');
//       spyOnMethod.mockRestore();
//     });
//   });
//   describe('launchers intergration', () => {
//     it('should be possible to select a launcher', () => {
//       wrapper.find('#addLauncher').simulate('click');
//       wrapper.find('#M79').simulate('click');
//       expect(wrapper.find('#characterWeaponList').text()).toContain('M79');
//       expect(wrapper.find('#characterWeaponList').text()).toContain('0 x HEAT');
//       expect(wrapper.find('#characterWeaponList').text()).toContain('0 x HE');
//     });
//     it('should be possible to increment launcher ammo', () => {
//       const heatAmmo = wrapper.find('.spareMagRow').at(0);
//       heatAmmo.find('#qtyUpMagType1').simulate('click');
//       expect(heatAmmo.text()).toContain('1 x HEAT');
//     });
//     it('should be possible to decrement launcher ammo', () => {
//       const heatAmmo = wrapper.find('.spareMagRow').at(0);
//       heatAmmo.find('#qtyDownMagType1').simulate('click');
//       expect(heatAmmo.text()).toContain('0 x HEAT');
//     });
//     it('should be possible to increment launcher qty', () => {
//       const m79 = wrapper.find('.M79Row');
//       m79.find('#qtyUpLauncher').simulate('click');
//       expect(m79.childAt(2).text()).toBe('2');
//     });
//     it('should be possible to decrement launcher qty', () => {
//       const m79 = wrapper.find('.M79Row');
//       m79.find('#qtyDownLauncher').simulate('click');
//       expect(m79.childAt(2).text()).toBe('1');
//     });
//     it('should be possible to remove launcher', () => {
//       const m79 = wrapper.find('.M79Row');
//       m79.find('.removeM79').simulate('click');
//       expect(wrapper.find('#characterWeaponList').text()).not.toContain('M79');
//     });
//   });
// });

describe('getSelectedWeapons function', () => {
  it('should return the firearms list', () => {
    const firearms = [{ name: 'M16' }, { name: 'M1911A1' }];
    expect(getSelectedWeapons(firearms)).toStrictEqual(firearms);
  });
  it('should return an empty array if firearms is undefined', () => {
    expect(getSelectedWeapons(undefined)).toStrictEqual([]);
  });
});
