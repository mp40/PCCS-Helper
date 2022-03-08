import { mountAppWithStore } from '../../helpers/testHelpers';

describe('Select helmet intergration test', () => {
  window.history.pushState({}, '', '/edit');
  const wrapper = mountAppWithStore();

  afterAll(() => {
    window.history.pushState({}, '', '/');
  });

  it('should be possible to select helmet', () => {
    wrapper.find('td[children="No Helmet"]').simulate('click');
    wrapper.find('td[children="SPECTRA"]').simulate('click');

    const bodyArmourCard = wrapper.find('BodyArmourCard');
    expect(bodyArmourCard.text()).toContain('SPECTRA1.4');
  });
});

describe('Select vest intergration test', () => {
  window.history.pushState({}, '', '/edit');
  const wrapper = mountAppWithStore();

  afterAll(() => {
    window.history.pushState({}, '', '/');
  });

  it('should be possible to select helmet', () => {
    wrapper.find('td[children="No Vest"]').simulate('click');
    wrapper.find('td[children="M69"]').simulate('click');

    const bodyArmourCard = wrapper.find('BodyArmourCard');
    expect(bodyArmourCard.text()).toContain('M698.5');
  });
});
