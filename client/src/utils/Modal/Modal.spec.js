import React from 'react';
import Modal, { HandleShowModal } from './Modal';
import { renderHook, act } from '@testing-library/react-hooks';

describe('<Modal/> Component', () => {
  it('renders without crashing', () => {
    shallow(<Modal />);
  });
  it('renders without crashing with show=true', () => {
    let ShowModal = true;
    const HandleModalOverlayClick = e => {
      if (e.target === e.currentTarget) {
        ShowModal = false;
      }
    };
    const wrapper = mount(
      <Modal
        show={ShowModal}
        HandleModalOverlayClick={HandleModalOverlayClick}
      />,
    );
    // wrapper.simulate('click');
    // console.log(wrapper.debug());
    // expect(wrapper)
  });
});
