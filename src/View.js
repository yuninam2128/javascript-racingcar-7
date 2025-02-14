import { Console } from "@woowacourse/mission-utils";

class View {
    static print(message) {
      Console.print(message);
    }
  
    static async readLine(message) {
      return await Console.readLineAsync(message);
    }
  
    static printResults(results) {
      results.forEach(result => {
        result.forEach(carOutput => {
          View.print(carOutput);
        });
      });
    }
  
    static printWinner(winner) {
      View.print(`최종 우승자 : ${winner.join(', ')}`);
    }
  
    static printError(message) {
      View.print(message);
    }
  }
  
  export default View;
  