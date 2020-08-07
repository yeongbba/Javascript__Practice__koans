describe('Spread syntax 에 대하여', function () {
  it('전개 문법을 학습합니다.', function () {
    const spread = [1, 2, 3];
    const arr = [0, ...spread, 4]; // TODO : 전개 문법(spread syntax)를 사용하세요. spread를 지우지 않고 해결할 수 있습니다.
    expect(arr).toEqual([0, 1, 2, 3, 4]);
  });

  it('빈 배열에 전개 문법을 사용하면, 아무것도 전달되지 않습니다.', function () {
    const spread = [];
    const arr = [0, ...spread, 1]; // TODO : 전개 문법(spread syntax)를 사용하세요. spread를 지우지 않고 해결할 수 있습니다.
    expect(arr).toEqual([0, 1]);
  });

  it('배열을 이어붙일 수 있습니다', function () {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const needConcat = [...arr1, ...arr2]; // TODO
    expect(needConcat).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('객체도 이어붙일 수 있습니다.', function () {
    const obj1 = {
      a: 1,
      b: 2,
      c: 3,
    };
    const obj2 = {
      time: '0156',
      status: '졸립다',
    };

    const needConcat = { ...obj1, ...obj2 }; // TODO
    expect(needConcat).toEqual({
      a: 1,
      b: 2,
      c: 3,
      time: '0156',
      status: '졸립다',
    });
  });

  it('Rest Parameter를 학습합니다.', function () {
    const spread = [42, 2, 1, 4, 2, 12];
    const max = Math.max(...spread); // TODO
    expect(max).toBe(42);

    const realMax = Math.max(100, 23, 41, ...spread); // TODO
    expect(realMax).toBe(100);
  });

  it('생성자 함수에도 사용할 수 있습니다.', function () {
    const spread = [1970, 0, 1]; // 1 Jan 1970
    const whenComputerStarts = new Date(...spread); // TODO
    expect(whenComputerStarts).toEqual(new Date(1970, 0, 1));
  });
});
