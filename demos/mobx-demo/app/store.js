import { observable, computed } from 'mobx';

class Store {
  @observable name = 'Bartek'; // 直接被观察的属性
  @computed get decorated() { // 自动计算出来的属性
    return `${this.name} is awesome!`;
  }
}

export default Store;
