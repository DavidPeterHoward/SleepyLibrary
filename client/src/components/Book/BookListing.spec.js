import React from 'react';
import { BookListing, BookListingTest } from './BookListing';

const singleListing = {
  _id: '1',
  name: 'David',
  isbn: '12345678',
};

describe('BookListing Component', () => {
  it('renders without crashing', () => {
    shallow(<BookListing />);
  });
  it('renders with mocked data', () => {
    const wrapper = shallow(BookListing(singleListing));
    expect(wrapper.containsMatchingElement(<p>ID: 1</p>)).to.be.true;
    expect(wrapper.containsMatchingElement(<p>Name: David</p>)).to.be.true;
    expect(wrapper.containsMatchingElement(<p>ISBN: 12345678</p>)).to.be.true;
  });
});
