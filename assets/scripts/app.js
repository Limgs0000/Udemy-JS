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
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operator: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    //파라미터 이름은 맘대로 지어도 됨.
    //파라미터로 정의한 변수는 함수 내부에서만 쓸 수 있음.
    //파라미터는 let or const 키워드도 필요없음.
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // const calcDescription = `${currentResult} + ${enteredNumber}`;

    // 문자열 변환 -> .toString(), 정수형 변환 -> parseInt()
    // currentResult = currentResult + enteredNumber;
    // currentResult++;
    currentResult += enteredNumber;
    // outputResult(currentResult, calcDescription);
    createAndWriteOutput('+', initialResult, enteredNumber);
    // const logEntry = {
    //     operator: 'ADD',
    //     prevResult: initialResult,
    //     number: enteredNumber,
    //     result: currentResult
    // };
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    // logEntries.push(logEntry); //push(): 배열 마지막에 밀어넣음. 즉 추가함.
    // console.log(logEntry.operator); //객체.키 -> 밸류값 리턴.
    // console.log(logEntries);
    // console.log(logEntries[0]); // 배열이름[원하는 순서]: 배열의 특정 번호에 있는 값 (배열의 index는 0부터 시작함)
    // return resultValue; //return 문은 결과를 돌려보내면서 함수를 종료하는 선언이기도함.
} //함수 선언문 뒤에는 세미콜론을 붙이지 않음.

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTYPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`; //템플릿 리터럴
let errorMessage = 'An error\'' + ' occured!' // 이스케이프 문자 목록
