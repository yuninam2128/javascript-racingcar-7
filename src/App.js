import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name, count = 0) {
    this.name = name;
    this.count = count;
  }
}

class Racing {
  static AdvanceCount(Names){
    //전처리 
    let tempArray = [];
    let nameArray = [Names];
    for (const name of nameArray) {
      tempArray = tempArray.concat(name.split(','));
    }
    nameArray = tempArray;
    return nameArray;
  }
}

class App {
  //입력 받기 
  async run() {
    const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: ");
    Console.print(Racing.AdvanceCount(inputName));
  }
}

export default App;
