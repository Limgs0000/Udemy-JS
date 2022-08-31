/** 
 * 변수(Variable) : 
 *   데이터 컨테이너(data container) or 데이터 저장소(data storage)
 *   재할당이 가능함.
 *   let 키워드를 사용함.
 * ex)
 * let userName = 'Max'
 * userName = 'Manu' <-- ok
 * 
 * 상수(Constant) :
 *   마찬가지로 데이터 컨테이너 혹인 데이터 저장소임.
 *   값이 변경되서는 안됨. --> 재할당이 불가능함.
 *   const 키워드를 사용함.
 * 
 * 왜 쓰는가? 
 *   코드에는 절대 변하지 않는 값이 있을 수 있는데,
 *   이런 값을 데이터 컨테이너에 저장하는 것은
 *   중앙에서 일괄적으로 초기화를 하기 위함.
 *   상수를 최대한 사용하는게 좋음 --> 값을 변경할 수 없고, 용도가 제한적이기 때문.
 * ex)
 * const totalUsers = 15
 * totalUsers = 13 <-- no
 * 
 * 데이터 타입(Data Type)
 * Number:
 *   2, -3, 22.956, ...
 * String(Text):
 *   'Hi', "Hi", `Hi`
 */ 

/**
 * js에서는 변수에 값을 할당하여 꼭 초기화를 할 필요가 없음.
 */
const defaultResult = 0; //상수 선언

let currentResultEX; // 초기화가 안된 상태
let currentResult = 0; //초기화 된 상태 --> 0으로 초기화함.
currentResult = defaultResult; // 상수를 currentResult에 넣음

currentResult = (currentResult + 50) * 3 / 2 -1; // 재할당함.

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`; //템플릿 리터럴
let errorMessage = 'An error\'' + ' occured!' // 이스케이프 문자 목록

outputResult(currentResult, calculationDescription);

/**
 * 함수(Function): 
 */