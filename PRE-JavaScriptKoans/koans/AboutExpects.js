describe('Expect에 관해서', function () {
  /*
   코드스테이츠의 첫 번째 스프린트 JavaScriptKoans에 오신 것을 환영합니다.
   이번 스프린트에서는 이전에 코플릿에서 여러분의 에러를 검사하던 유닛 테스트(unit test)를 직접 수정하여 통과 시켜야 합니다.
   단순히 테스트를 통과하기는 쉽지만, "왜 통과하는지" 꼭 고민하는 시간이 되었으면 합니다.

   AboutExpects.js 에서는 expect 함수에 대해서 배우게 됩니다. 
   우리는 이 함수를 활용하여 앞으로 모든 Koans 과제를 완성하게 될 것입니다.
   expect는 assertion 함수 중 하나로, 여러분이 작성한 코드의 결과가 expect 함수의 첫 번째 인자와 match 되어야 한다는 "assertion(주장)"을 담고 있습니다.
   직접 문제를 풀어보면서 expect에 대해서 알아봅시다.
   */

  it('테스트 하고 싶은 값(첫번째 인자)의 truthy 여부 검사를 학습합니다.', function () {
    /* 
    첫 문제는 우선 그냥 풀어봅시다.
    expect 함수의 첫 번째 인자에 false 대신 true를 넣어서 테스트를 통과시키세요.
    expect(true).toBeTruthy();

    음, 그런데 1을 넣어보는 것은 어떻까요? 테스트를 통과할까요? 풀어보기 전에 주석으로 예상되는 결과를 적어두세요.
    여러분이 예상하는 결과 : 통과
    통과한다면, 왜 통과하는지 고민해보세요.
    */

    expect(true).toBeTruthy(); // TODO : expect의 첫 번째 인자를 테스트가 통과될 수 있도록 첫 번째 인자를 수정하세요.
  });

  /*
  1 + 1은 무엇일까요? 2 입니다. (귀요미 아닙니다...)
  우리는 1 + 1 을 컴퓨터에게 명령하면서, 2일 것을 기대하고 있습니다.
  바로 이것이 assertion, 주장입니다. 우리는 컴퓨터에게 1 + 1이 2일 것을 주장하고 있습니다.

  아쉽게도 1 + 1은 우리에게 너무나 자명한 사실이지만, 이를 컴퓨터가 백만번 수행했을 때, 오류가 날 가능성을 대비하여
  기능을 테스트한다고 가정합시다.
  우리는 1 + 1이라는 실제(actual) 작업이 2가 나올 것이라고 예상(expected)하는 테스트를 작성하면 되겠죠?
  */
  it('두 값의 일치 여부를 검사하는 비교연산자 ==를 학습합니다.', function () {
    let expectedValue = 2; // TODO : FILL_ME_IN에 "정답이기를 기대하는 값"을 넣어주세요.
    let actualValue = 1 + 1; // actualVaule는 "실제 실행된 값"입니다.

    // 흠, 그런데 expectedValue에 '2'를 넣어도 통과가 되네요.
    expect(actualValue == expectedValue).toBeTruthy();
  });

  // 하지만 타입 같은지 확인해야할 경우도 있겠죠.
  // == 은 이제 그만 잊어버립시다!
  it('두 값의 타입까지 검사할 수 있는 비교연산자 ===를 학습합니다.', function () {
    let expectedValue = 2; // TODO
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  it('Matcher toBe를 사용해 일치 여부를 검사하는 법을 학습합니다.', function () {
    let expectedValue = '2'; // TODO
    let actualValue = (1 + 1).toString(); // "2"

    // toBe는 Matcher라고 합니다. 두 값을 비교하는 다양한 메소드 중 하나라고 생각하시면 됩니다.
    // toBe()는 === 처럼, 대상의 'type'도 같은지 비교합니다.
    expect(actualValue).toBe(expectedValue);
    // 2 === '2' => false, 2 === 2 => true
  });

  // 문제를 해결하며 FILL_ME_IN을 만나게 되면 FILL_ME_IN을 테스트를 통과하도록 변경해야합니다.
  // 아래 테스트를 통과하기 위해서 FILL_ME_IN을 무엇으로 변경해야 할까요?
  it("'FILL_ME_IN'에 정확한 값을 입력했는지 검사합니다.", function () {
    expect(1 + 1).toBe(2); // TODO
  });
});
