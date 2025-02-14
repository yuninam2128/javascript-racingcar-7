import { Racing } from './Model.js';
import View from './View.js';

class App {
  async run() {
    try {
      const racing = new Racing();

      const inputName = await View.readLine("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
      const nameArray = racing.validateCarNames(inputName);

      const inputNum = await View.readLine("시도할 횟수는 몇 회인가요?: "); 
      if (isNaN(inputNum) || inputNum <= 0) {
        throw new Error("[ERROR] IllegalArgumentException");
      }

      View.print('실행 결과');
      const results = racing.advanceCount(nameArray, inputNum);
      View.printResults(results);
      View.printWinner(racing.getWinner());
    
    } catch (error) {
      View.printError(error.message);
      return Promise.reject(error);
    }
  }
}

export default App;
