import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  // 전진 조건을 적용하는 메서드 
  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.count++;
    }
  }

  // 자동차 상태 출력 
  print() {
    Console.print(`${this.name} : ${'-'.repeat(this.count)}`);
  }
}

class Racing {
  constructor() {
    this.carInstances = [];
  }

  validateCarNames(names) {
    // 쉼표 기준 분리 | 공백 처리 | 5자 이하 처리 | 중복 처리 
    return [...new Set(names.split(",")
      .map(name => name.trim())
      .filter(name => name && name.length <= 5))];
  }

  advanceCount(nameArray,Num){
    // 인스턴스화
    this.carInstances = nameArray.map(name => new Car(name));

    // 전진 카운트 
    for (let i = 0; i < Num; i++){
      Console.print('');
      this.carInstances.forEach(car => {
        car.move();
        car.print();
      })
    }
  }

  getWinner(){
    // 가장 큰 값 찾기
    const maxCount = Math.max(...this.carInstances.map(car => car.count));
    // 가장 큰 값과 같은 값을 가진 CarName 만 추출
    return this.carInstances.filter(car => car.count === maxCount).map(car => car.name);
  }
}

class App {
  async run() {
    try{
      const racing = new Racing();

      // 이름 입력받기, 예외 처리 
      const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
      const nameArray = racing.validateCarNames(inputName);

      // 시도 횟수 입력받기, 예외 처리
      const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: "); 
      if (isNaN(inputNum) || inputNum <= 0) {
        throw new Error("[ERROR] IllegalArgumentException");
      }

      // 출력
      Console.print('실행 결과');
      racing.advanceCount(nameArray,inputNum);
      Console.print(`최종 우승자 : ${racing.getWinner().join(', ')}`);
  
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }
}

export default App;