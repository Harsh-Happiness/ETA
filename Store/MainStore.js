import {observable, action, autorun} from 'mobx';
import feeds from '../data.json';
var findIndex = require('lodash/findIndex');
var filter = require('lodash/filter');

class MainStore {
  constructor() {
    autorun(() => console.log(this.report));
  }

  @observable title = 'ETA';
  @observable count = 0;
  @observable trackList = [];
  @observable dataList = feeds.data;
  @observable typeofView = 'list';
  @observable renderFlag = false;

  @action
  incrementCount = (details) => {
    let temp = this.trackList;
    this.trackList = [...temp, details];

    this.count = this.count + 1;
  };

  @action
  decrementCount = (details) => {
    this.trackList = filter(this.trackList, function (obj) {
      return obj.index !== details.index;
    });
    this.count = this.count - 1;
  };

  @action
  setTypeofView = (selected) => {
    this.typeofView = selected;
  };

  @action
  changeEntryofItemInList = (details) => {
    let idx = findIndex(this.dataList, function (obj) {
      return obj.index === details.index;
    });

    this.dataList[idx].tracked = true;
    this.renderFlag = true;
  };

  @action
  changeRemoveEntryofItemInList = (details) => {
    let idx = findIndex(this.dataList, function (obj) {
      return obj.index === details.index;
    });

    this.dataList[idx].tracked = false;
    this.renderFlag = true;
  };

  @action
  handleDataList = () => {
    console.log(this.trackList);
    if (this.trackList !== null) {
      this.trackList.forEach((o) => {
        let temp = this.dataList.find((x) => x.index === o.index);
        temp.tracked = true;
      });
    }
  };
}

export default new MainStore();
