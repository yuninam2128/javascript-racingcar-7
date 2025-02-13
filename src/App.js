import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }
}

class App {
  async run() {
    const inputName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
    const inputNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: ");
  }
}

export default App;
