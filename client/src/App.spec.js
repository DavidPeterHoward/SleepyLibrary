import React from 'react';
import { App, LocationDisplay } from './App';
import Modal from './utils/Modal/Modal';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Listing from './components/Listing/Listing';
import Home from './components/Home/Home';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Navigation buttons', () => {
  it('shows CreateBook modal when button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('#CreateBook').simulate('click');
    expect(
      wrapper.containsMatchingElement(
        <Modal show={true} type={'CREATE_BOOK'} />,
      ),
    ).be.true;
  });
  it("doesn't show CreateBook modal unless clicked", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsMatchingElement(
        <Modal show={true} type={'CREATE_BOOK'} />,
      ),
    ).be.false;
  });
  it('shows CreateAuthor modal when button is clicked', () => {
    const wrapper = shallow(<App />);
    wrapper.find('#CreateAuthor').simulate('click');
    expect(
      wrapper.containsMatchingElement(
        <Modal show={true} type={'CREATE_AUTHOR'} />,
      ),
    ).be.true;
  });
  it("doesn't show CreateAuthor modal unless clicked", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsMatchingElement(
        <Modal show={true} type={'CREATE_AUTHOR'} />,
      ),
    ).be.false;
  });
});
