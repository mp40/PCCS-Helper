import React from 'react';
import { shallow } from 'enzyme';

import Aiming from './index';

describe('Aiming buttons', () => {
  let wrapper;

  const setAims = jest.fn();
  const setModal = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display the aim count on the main aim button', () => {
    wrapper = shallow(<Aiming aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);

    const aimsButton = wrapper.find('span[children="Aims"]').closest('button');

    expect(aimsButton.text()).toContain('1');
  });

  it('should increment aims from 1 to 2 when the plus aim button is clicked', () => {
    wrapper = shallow(<Aiming aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);

    wrapper.find('button[children="+"]').simulate('click');

    expect(setAims).toHaveBeenCalledWith(2);
  });

  it('should increment aims from 2 to 3 when the plus aim button is clicked', () => {
    wrapper = shallow(<Aiming aims={2} maxAims={6} setAims={setAims} setModal={setModal} />);

    wrapper.find('button[children="+"]').simulate('click');

    expect(setAims).toHaveBeenCalledWith(3);
  });

  it('should not increment aims greater than maxAims', () => {
    wrapper = shallow(<Aiming aims={6} maxAims={6} setAims={setAims} setModal={setModal} />);

    wrapper.find('button[children="+"]').simulate('click');

    expect(setAims).not.toHaveBeenCalled();
  });

  it('should apply styles to show cannot decrement', () => {
    wrapper = shallow(<Aiming aims={6} maxAims={6} setAims={setAims} setModal={setModal} />);

    expect(wrapper.find('button[children="+"]').props().className).toBe('unavailable');
  });

  it('should decrement aims from 6 to 5 when the minus aims button is clicked', () => {
    wrapper = shallow(<Aiming aims={6} maxAims={6} setAims={setAims} setModal={setModal} />);

    wrapper.find('button[children="-"]').simulate('click');

    expect(setAims).toHaveBeenCalledWith(5);
  });

  it('should decrement aims from 5 to 4 when the minus aims button is clicked', () => {
    wrapper = shallow(<Aiming aims={5} maxAims={6} setAims={setAims} setModal={setModal} />);
    wrapper.find('button[children="-"]').simulate('click');

    expect(setAims).toHaveBeenCalledWith(4);
  });

  it('should not decrement aims less than 1', () => {
    wrapper = shallow(<Aiming aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);

    wrapper.find('button[children="-"]').simulate('click');

    expect(setAims).not.toHaveBeenCalled();
  });

  it('should apply styles to show cannot decrement', () => {
    wrapper = shallow(<Aiming aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);

    expect(wrapper.find('button[children="-"]').props().className).toBe('unavailable');
  });

  it('should open the Aiming Modal when the main aims button is clicked', () => {
    wrapper = shallow(<Aiming aims={1} maxAims={6} setAims={setAims} setModal={setModal} />);

    wrapper.find('span[children="Aims"]').closest('button').simulate('click');

    expect(setModal).toHaveBeenCalledWith('aims');
  });
});
