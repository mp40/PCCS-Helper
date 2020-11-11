import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
// import WeaponsModalSelection, { filterCalibersFromType } from './index';
import { mgs } from '../../data/firearms';
import { isValidToDecreaseMagazine } from '../../helpers/gaurds';

import WeaponsModalSelection from './component';

// mptodo - clean this shit up
// import { firearmLists } from './data';
// import data from '../EquipmentCard/filter/data';
import * as data from './data';

const waitOneTick = (simulate) => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 0);
}));

const waitOneSec = (simulate) => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(simulate);
  }, 1001);
}));

const mockRifles = () => [
  {
    name: 'Karabin M1938',
    weight: 8,
  },
  {
    name: 'M16',
    weight: 8.7,
  },
];

const mockPistols = () => [
  {
    name: 'Makarov PM',
    weight: 1.7,
  },
  {
    name: 'Lebel M1892',
    weight: 2.1,
  },
];

const mockSmgs = () => [
  {
    name: 'MAT 49',
    list: 'smgs',
    weight: 9.2,
  },
  {
    name: 'Owen Mk1',
    list: 'smgs',
    weight: 10.1,
  },
];

const mockMgs = () => [
  {
    name: 'BAR A2',
    list: 'mgs',
    weight: 19.7,
  },
  {
    name: 'M60',
    list: 'mgs',
    weight: 29.7,
  },
];

const mockSniperRifles = () => [
  {
    name: 'Dragunov SVD',
    list: 'sniperRifles',
    weight: 10.2,
  },
  {
    name: 'M40A1',
    list: 'sniperRifles',
    weight: 14.8,
  },
];

const mockShotguns = () => [
  {
    name: 'Remington M870',
    list: 'shotguns',
    weight: 8.8,
  },
  {
    name: 'Ithaca LAPD',
    list: 'shotguns',
    weight: 7.2,
  },
];

const mockM16 = () => ({
  name: 'M16',
  weight: 8.7,
});

const mockM1911A1 = () => ({
  name: 'M1911A1',
  weight: 3,
});

const mockM60 = () => ({
  name: 'M60',
  weight: 29.7,
});

describe('Firearms selection', () => {
  let wrapper;

  const addFirearm = jest.fn();
  const toggleOffWeaponCardViews = jest.fn();

  const firearms = [mockM60()];

  data.firearmLists = jest.fn().mockImplementation(() => ([
    mockM16(),
    mockM1911A1(),
    mockM60(),
  ]));

  beforeEach(() => {
    wrapper = shallow(
      <WeaponsModalSelection
        firearms={firearms}
        addFirearm={addFirearm}
        toggleOffWeaponCardViews={toggleOffWeaponCardViews}
      />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render firearms list', () => {
    expect(wrapper.find('.firearmEntry').length).toBe(data.firearmLists().length);
  });

  it('should render firearm name and weight', () => {
    const m16Entry = wrapper.find('.firearmEntry').at(0);

    expect(m16Entry.text()).toBe('M168.7 lbs');
  });

  it('should be possible to select weapon', () => {
    wrapper.find('span[children="M16"]').parent().simulate('click');

    expect(addFirearm).toHaveBeenCalledWith(mockM16());
  });

  it('should not be possible to select weapon if has been previously selected', () => {
    wrapper.find('span[children="M60"]').parent().simulate('click');

    expect(addFirearm).not.toHaveBeenCalled();
  });

  it('should be possible to view firearm stats', () => {
    expect(wrapper.find('FirearmInspection').exists()).toBe(false);
    wrapper.find('GearModalContents').find('button').at(0).simulate('click');

    expect(wrapper.find('FirearmInspection').exists()).toBe(true);
  });

  // mptodo - clean this shit up
  // describe('filtering firearms list', () => {
  //   let wrapper;

  //   const addFirearm = jest.fn();
  //   const fireams = []

  //   beforeEach(() => {
  //     wrapper = shallow(<WeaponsModalSelection firearms={fullFirearmsList()} addFirearm={addFirearm} />);
  //   });

  //   it('should render an unfiltered list by defult', () => {
  //     console.log(wrapper.debug());
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(fullFirearmsList().length);
  //   });

  //   it('should be possible filter to only rifles', () => {
  //     wrapper.find('.selectRiflesFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(rifles().length);
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M16');
  //   });

  //   it('should be possible filter to only pistols', () => {
  //     wrapper.find('.selectPistolsFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(pistols().length);
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M1911A1');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M16');
  //   });

  //   it('should be possible filter to only sub-machine guns', () => {
  //     wrapper.find('.selectSMGsFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(smgs().length);
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('MAT 49');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
  //   });

  //   it('should be possible filter to only machine guns', () => {
  //     wrapper.find('.selectMGsFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(mgs().length);
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M60');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
  //   });

  //   it('should be possible filter to only sniper rifles', () => {
  //     wrapper.find('.selectSniperRiflesFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(sniperRifles().length);
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('Dragunov SVD');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M60');
  //   });

  //   it('should be possible filter to only shotguns', () => {
  //     wrapper.find('.selectShotgunsFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(shotguns().length);
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('Remington M870');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M60');
  //   });

  //   it('should be possible reset filter to all', () => {
  //     wrapper.find('.selectAllFilter').simulate('click');
  //     expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(fullFirearmsList().length);
  //   });
  // });
});

// describe('promise to wait for transition close', () => {
//   const wrapper = mount(<WeaponsModalSelection firearmsArray={mgs()} />);
//   describe('firearm filter card transitions', () => {
//     it('should have a filter card with default class name', () => {
//       expect(wrapper.find('.filterCardWrapper').exists()).toEqual(true);
//       expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(false);
//     });
//     it('should apply transition to filter card', async () => {
//       await act(async () => {
//         await waitOneTick(wrapper.find('#showFirearmFilters').simulate('click'));
//       });
//       wrapper.update();
//       expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(true);
//       expect(wrapper.find('.filterCardWrapper').hasClass('final')).toEqual(false);
//     });
//     it('should apply the final class after one second', async () => {
//       await act(async () => {
//         await waitOneSec();
//       });
//       wrapper.update();
//       expect(wrapper.find('.filterCardWrapper').hasClass('final')).toEqual(true);
//     });
//     it('should be possible to reverse filter card transition', async () => {
//       await act(async () => {
//         await waitOneTick(wrapper.find('#showFirearmFilters').simulate('click'));
//       });
//       wrapper.update();
//       expect(wrapper.find('.filterCardWrapper').hasClass('trans')).toEqual(false);
//     });
//   });

//   describe('weapon stat card transitions', () => {
//     it('should not be rendered by default', () => {
//       expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(false);
//     });
//     it('should render the card in pre-transition location then apply transition', async () => {
//       expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(false);
//       await act(async () => {
//         await waitOneTick(wrapper.find('.viewM60').simulate('click'));
//       });
//       wrapper.update();
//       expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(true);
//     });
//     it('should reverse transtion before closing card', async () => {
//       expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(true);
//       await act(async () => {
//         await waitOneTick(wrapper.find('#closeGunStatView').simulate('click'));
//       });
//       wrapper.update();
//       expect(wrapper.find('.WeaponStatTableContainer').hasClass('trans')).toEqual(false);
//       expect(wrapper.find('.WeaponStatTableContainer').exists()).toEqual(true);
//     });
//   });
// });

// mptodo this will pass tests even if args in handleSetFilterByType are in wrong order.
// mptodo mqke sure some tests fail if args in wrong order
// describe('filtering types and calibers helper function', () => {
//   const firearmArrayDouble = () => [
//     { name: 'AK47', calibre: '7.62 x 39mm' },
//     { name: 'AK 74', calibre: '5.45 x 39.5mm' },
//     { name: 'M16', calibre: '5.56mm NATO' },
//     { name: 'M60', calibre: '7.62mm NATO' },
//     { name: 'MAT 49', calibre: '9mm Parabellum' },
//     { name: 'fakeCaliberGun', calibre: 'Xmm Nothing' },
//   ];
//   it('should return an array with all calibers', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), 'All');
//     expect(returnedArray.length).toBe(firearmArrayDouble().length);
//   });
//   it('should return an array with only 7.62 x 39mm chambered weapons', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), '7.62 x 39mm');
//     expect(returnedArray.length).toBe(1);
//     expect(returnedArray[0].name).toBe('AK47');
//   });
//   it('should return an array with only 5.45 x 39.5mm chambered weapons', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), '5.45 x 39.5mm');
//     expect(returnedArray.length).toBe(1);
//     expect(returnedArray[0].name).toBe('AK 74');
//   });
//   it('should return an array with only 5.56mm NATO chambered weapons', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), '5.56mm NATO');
//     expect(returnedArray.length).toBe(1);
//     expect(returnedArray[0].name).toBe('M16');
//   });
//   it('should return an array with only 7.62mm NATO chambered weapons', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), '7.62mm NATO');
//     expect(returnedArray.length).toBe(1);
//     expect(returnedArray[0].name).toBe('M60');
//   });
//   it('should return an array with only 9mm Parabellum chambered weapons', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), '9mm Parabellum');
//     expect(returnedArray.length).toBe(1);
//     expect(returnedArray[0].name).toBe('MAT 49');
//   });
//   it('should return an array with weapons with calibers not on list', () => {
//     const returnedArray = filterCalibersFromType(firearmArrayDouble(), 'Other');
//     expect(returnedArray.length).toBe(1);
//     expect(returnedArray[0].name).toBe('fakeCaliberGun');
//   });
// });

// describe('Weapon Notes', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<WeaponsModalSelection />);
//   });
//   it('should not render for shotguns', () => {
//     wrapper.find('.viewRemingtonM870').simulate('click');
//     const inspectedFirearm = wrapper.find('FirearmInspection').dive(0);
//     expect(inspectedFirearm.find('FirearmNotes').exists()).toBe(false);
//   });
//   it('should render for other firearms', () => {
//     wrapper.find('.viewM60').simulate('click');
//     const inspectedFirearm = wrapper.find('FirearmInspection').dive(0);
//     expect(inspectedFirearm.find('FirearmNotes').exists()).toBe(true);
//   });
// });

// describe('Firearms with grenade launchers', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<WeaponsModalSelection />);
//   });
//   it('should be able to toggle to view grenade launcher data', () => {
//     wrapper.find('.viewM203').simulate('click');
//     wrapper.find('.toggleViewGrenadeLauncher').simulate('click');
//     expect(wrapper.text()).toContain('AW0.51');
//     expect(wrapper.text()).toContain('HEAT');
//   });
//   it('should be able to toggle back to rifle data', () => {
//     wrapper.find('.viewM203').simulate('click');
//     wrapper.find('.toggleViewGrenadeLauncher').simulate('click');
//     expect(wrapper.text()).toContain('AW0.51');
//     expect(wrapper.text()).toContain('HEAT');
//     wrapper.find('.toggleViewGrenadeLauncher').simulate('click');
//     expect(wrapper.text()).not.toContain('AW0.51');
//     expect(wrapper.text()).not.toContain('HEAT');
//   });
//   it('should not render toggle button if firearm does not have launcher', () => {
//     wrapper.find('.viewM60').simulate('click');
//     expect(wrapper.find('.toggleViewGrenadeLauncher').exists()).toBe(false);
//   });
// });

/*
describe('Firearms selection', () => {
  describe('filtering firearms list', () => {
    let wrapper;

    const addFirearm = jest.fn();

    beforeEach(() => {
      // wrapper = mountAppWithStore(storeWithCreateCharacterView());
      // wrapper.find('#addFirearm').simulate('click');
      wrapper = shallow(<WeaponsCardSelectModal firearms={fullFirearmsList()} addFirearm={addFirearm} />);
    });

    it('should render an unfiltered list by defult', () => {
      console.log(wrapper.debug());
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(fullFirearmsList().length);
    });

    it('should be possible filter to only rifles', () => {
      wrapper.find('.selectRiflesFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(rifles().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M16');
    });

    it('should be possible filter to only pistols', () => {
      wrapper.find('.selectPistolsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(pistols().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M1911A1');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M16');
    });

    it('should be possible filter to only sub-machine guns', () => {
      wrapper.find('.selectSMGsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(smgs().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('MAT 49');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
    });

    it('should be possible filter to only machine guns', () => {
      wrapper.find('.selectMGsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(mgs().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('M60');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M1911A1');
    });

    it('should be possible filter to only sniper rifles', () => {
      wrapper.find('.selectSniperRiflesFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(sniperRifles().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('Dragunov SVD');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M60');
    });

    it('should be possible filter to only shotguns', () => {
      wrapper.find('.selectShotgunsFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(shotguns().length);
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).toContain('Remington M870');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').text()).not.toContain('M60');
    });

    it('should be possible reset filter to all', () => {
      wrapper.find('.selectAllFilter').simulate('click');
      expect(wrapper.find('.firearmSelectModal').find('.gearModalContents').children().length).toBe(fullFirearmsList().length);
    });
  });
});
*/
