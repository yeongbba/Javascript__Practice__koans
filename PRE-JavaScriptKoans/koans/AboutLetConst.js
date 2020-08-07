describe('`const`에 대해서', function () {
  it('재할당이 금지된 const에 대해서 학습합니다.', function () {
    const constNum = 0;
    expect(constNum).toBe(0);

    const constString = 'I am a const';
    expect(constString).toBe('I am a const');
  });

  it('const로 선언해도 배열의 요소에 접근할 수 있습니다.', function () {
    const arr = [];

    const toBePushed = 42; // TODO
    arr.push(toBePushed);

    expect(arr).toEqual([42]);
  });
  it('const로 선언해도 객체의 속성을 추가 및 삭제할 수 있습니다.', function () {
    const obj = { x: 1 };

    delete obj.x;
    expect(obj).toEqual({});

    obj.toAchieve = 202050; // TODO

    expect(obj).toEqual({ toAchieve: 202050 });
    // https://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
  });
});
