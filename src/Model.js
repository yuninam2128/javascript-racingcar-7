import { Random } from "@woowacourse/mission-utils";

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
      return `${this.name} : ${'-'.repeat(this.count)}`;
    }
  }
  
  class Racing {
    constructor() {
      this.carInstances = [];
    }

    // 쉼표 기준 분리 | 공백 처리 | 5자 이하 처리 | 중복 처리 
    validateCarNames(names) {
      return [...new Set(names.split(",")
        .map(name => name.trim())
        .filter(name => name && name.length <= 5))];
    }

    // 전진 카운트 
    advanceCount(nameArray, num) {
      // 인스턴스화
      this.carInstances = nameArray.map(name => new Car(name));
  
      const result = [];
      for (let i = 0; i < num; i++) {
        result.push(this.carInstances.map(car => {
          car.move();
          return car.print();
        }));
      }
      return result;
    }
    getWinner() {
      // 가장 큰 값 찾기
      const maxCount = Math.max(...this.carInstances.map(car => car.count));
      // 가장 큰 값과 같은 값을 가진 CarName 만 추출
      return this.carInstances.filter(car => car.count === maxCount).map(car => car.name);
    }
  }
  
  export { Car, Racing };  