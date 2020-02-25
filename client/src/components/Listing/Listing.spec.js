import React from 'react';
import { List, Listing } from './Listing';
import { useFetchListAndMerge } from '../../utils/FetchListAndMergeHook';
import { renderHook, act } from '@testing-library/react-hooks';

const singleListingBook = {
  _id: '1',
  name: 'David',
  isbn: '12345678',
};

const singleListingAuthor = {
  _id: '1',
  first_name: 'David',
  last_name: 'Howard',
};

const errorMessage = {
  error: {
    message: 'Test Error',
  },
};

describe('List Component for BOOKS', () => {
  it('renders without crashing', () => {
    shallow(<List />);
  });
  it('renders with mocked data', () => {
    const wrapper = mount(
      <List listingType={'books'} data={[singleListingBook]} isLoaded={true} />,
    );
    expect(wrapper.containsMatchingElement(<p>ID: 1</p>)).to.be.true;
    expect(wrapper.containsMatchingElement(<p>Name: David</p>)).to.be.true;
    expect(wrapper.containsMatchingElement(<p>ISBN: 12345678</p>)).to.be.true;
  });
  it('renders loading state', () => {
    const wrapper = mount(<List />);
    expect(wrapper.text()).to.equal('Loading...');
  });
  it('renders no data after loading', () => {
    const wrapper = mount(<List isLoaded={true} />);
    expect(wrapper.text()).to.equal("There isn't any data here!");
  });
  it('renders an error if loaded without data', () => {
    const wrapper = mount(<List isLoaded={true} error={errorMessage.error} />);
    expect(wrapper.text()).to.equal('Error! Test Error');
  });
});

describe('List Component for AUTHORS', () => {
  it('renders without crashing', () => {
    shallow(<List />);
  });
  it('renders with mocked data', () => {
    const wrapper = mount(
      <List
        listingType={'authors'}
        data={[singleListingAuthor]}
        isLoaded={true}
      />,
    );
    expect(wrapper.containsMatchingElement(<p>ID: 1</p>)).to.be.true;
    expect(wrapper.containsMatchingElement(<p>First Name: David</p>)).to.be
      .true;
    expect(wrapper.containsMatchingElement(<p>Last Name: Howard</p>)).to.be
      .true;
  });
  it('renders loading state', () => {
    const wrapper = mount(<List />);
    expect(wrapper.text()).to.equal('Loading...');
  });
  it('renders no data after loading', () => {
    const wrapper = mount(<List isLoaded={true} />);
    expect(wrapper.text()).to.equal("There isn't any data here!");
  });
  it('renders an error if loaded without data', () => {
    const wrapper = mount(<List isLoaded={true} error={errorMessage.error} />);
    expect(wrapper.text()).to.equal('Error! Test Error');
  });
});
