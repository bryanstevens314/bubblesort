describe('Split Array function', function () {

  it('is able to split an array into two halves', function () {
    const sortArray = [38, 27, 43, 3, 9, 82, 10];
    expect(window.split(sortArray)).toEqual(
      [38],
      [27],
      [43],
      [3],
      [9],
      [82],
      [10]
    );
    // your code here
  });
});
describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    const sortArray = [38, 27, 43, 3, 9, 82, 10];
    window.merge(sortArray);
    // test the merging algorithm
  });
});
