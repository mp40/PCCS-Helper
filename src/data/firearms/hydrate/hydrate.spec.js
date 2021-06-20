import { hydrateFirearmByObject } from './index';

const m16 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
};

const m16WithScope = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 1 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  attachedOptic: 'Low Power Scope',
};

const m203 = {
  attached: 'M203',
  mag: [{ qty: 0 }, { qty: 0 }],
};

const m16WithM203 = {
  name: 'M16',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.7, cap: 20, qty: 0 }, { type: 'Mag', weight: 1, cap: 30, qty: 0 }],
  launcher: m203,
};

const svdNoScopeAttached = {
  name: 'Dragunov SVD',
  qty: 1,
  mag: [{ type: 'Mag', weight: 0.68, cap: 10, qty: 0 }],
};

describe('Hydrating Firearm By Object', () => {
  it('should add modification notes if required', () => {
    const modNote = { note: 'test', weightMod: 1 };
    const firearm = { ...m16, modNotes: [modNote] };

    const hydratedFirearm = hydrateFirearmByObject(firearm);

    expect(hydratedFirearm.modNotes).toEqual([modNote]);
  });

  it('should add standard firearm optic data if required', () => {
    const hydratedFirearm = hydrateFirearmByObject({ ...svdNoScopeAttached });

    const expectedOpticData = {
      ableToAttach: ['PSO - 1'],
      attached: undefined,
    };

    expect(hydratedFirearm.optics).toEqual(expectedOpticData);
  });

  it('should add optics if required', () => {
    const hydratedFirearm = hydrateFirearmByObject({ ...m16WithScope });

    expect(hydratedFirearm.optics).toEqual({ attached: 'Low Power Scope' });
  });

  it('should add underslung launcher if required', () => {
    const hydratedFirearm = hydrateFirearmByObject({ ...m16WithM203 });

    const expectedLauncherData = {
      ...m203,
      ableToAttach: ['M203'],
    };

    expect(hydratedFirearm.launcher).toEqual(expectedLauncherData);
  });
});
