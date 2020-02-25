import { useFetchListAndMerge } from './FetchListAndMergeHook';

/* 
A method for rerendering functional components hooks:
- requires @testing-library/react-hooks
-> Send first bit of data
-> check for data
-> send second bit of data
-> rerender()
-> check for merged data
*/

describe('custom hook: FetchListAndMerge', () => {
  let DataObject = [
    {
      _id: '1',
      name: 'David',
      isbn: '12345',
    },
  ];
  const { result, rerender } = renderHook(() =>
    useFetchListAndMerge(DataObject),
  );
  it('should contain 1 element in the array', () => {
    expect(...result.current).to.have.length(1);
  });
  it('should contain 2 elements in the array', () => {
    DataObject = [
      {
        _id: '2',
        name: 'Chloe',
        isbn: '123456',
      },
    ];
    rerender();
    expect(...result.current).to.have.length(2);
  });
});
