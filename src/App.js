import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name,count = 0) {
    this.name = name;
    this.count = count;
  }
}

class Racing {

  constructor() {
    this.carInstances = [];
  }

  validateCarNames(names) {
    // 전처리
    let nameArray = names.split(",").map(name => name.trim()); 
    
    // 빈 문자열 처리 
    nameArray = nameArray.filter(name => name !== "");

    // 자동차 이름 중복 처리
    nameArray = Array.from(new Set(nameArray));

    // 자동차 이름은 5자 이하
    nameArray.forEach(name => {
      if (name.length > 5) {
        throw new Error("[ERROR] IllegalArgumentException");
      }
    });

    return nameArray;
  }

  AdvanceCount(nameArray,Num){
    //인스턴스화
    this.carInstances = nameArray.map(name => new Car(name));

    //전진 카운트 
    for (let i = 0; i < Num; i++){
      Console.print('');
        for (let j = 0; j < this.carInstances.length; j++){
          const randomNum = Random.pickNumberInRange(0, 9);
          const advance = ( randomNum >= 4) ? true : false;
          if (advance){
            this.carInstances[j].count++;
          }
          Console.print(`${this.carInstances[j].name} : ${'-'.repeat(this.carInstances[j].count)}`);
        }
    }
    return this.carInstances;
  }

  winner(){
    //가장 큰 값 찾기
    const maxValue = Math.max(...this.carInstances.map(itemm => itemm.count)); 
    //가장 큰 값과 같은 값을 가진 CarName 만 추출
    const maxCarNames = this.carInstances.filter(item => item.count === maxValue).map(item => item.name); 
    
    return maxCarNames;
  }
}

class App {
  async run() {
    try{
      const racing = new Racing();

      //이름 입력받기, 예외 처리 
      const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
      const nameArray = racing.validateCarNames(inputName);

      //시도 횟수 입력받기, 예외 처리
      const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: "); 
      if (isNaN(inputNum) || inputNum <= 0) {
        throw new Error("[ERROR] IllegalArgumentException");
      }

      //출력
      Console.print('실행 결과');
      racing.AdvanceCount(nameArray,inputNum);
      Console.print(`최종 우승자 : ${racing.winner().join(', ')}`);
  
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }
}

export default App;