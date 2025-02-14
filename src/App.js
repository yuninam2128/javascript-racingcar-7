import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name,count = 0) {
    this.name = name;
    this.count = count;
  }
}

class Racing {
  static AdvanceCount(Names,Num){
    //전처리 
    let tempArray = [];
    let nameArray = [Names];
    for (const name of nameArray) {
      tempArray = tempArray.concat(name.split(','));
    }
    nameArray = tempArray;

    //인스턴스화
    let carInstances = nameArray.map(name => new Car(name));

    //전진 카운트 
    for (let i = 0; i < Num; i++){
      Console.print('');
        for (let j = 0; j < carInstances.length; j++){
          const randomNum = Random.pickNumberInRange(0, 9);
          const advance = ( randomNum >= 4) ? true : false;
          if (advance){
            carInstances[j].count++;
          }
          Console.print(`${carInstances[j].name} : ${'-'.repeat(carInstances[j].count)}`);
        }
    }
    return carInstances;
  }

  static winner(){

  }
}


class App {
  async run() {
    //입력 받기 
    const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: ");

    //출력
    Console.print('실행 결과');
    Racing.AdvanceCount(inputName,inputNum);
  }
}

export default App;
