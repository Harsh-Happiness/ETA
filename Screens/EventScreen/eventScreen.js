import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import Events from './eventMap';
import TypeOfView from './typeOfView';

@inject('MainStore')
@observer
export class EventScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let storeFeed = this.props.MainStore.dataList;

    return (
      <View>
        <TypeOfView navigation={this.props.navigation} />
        <Events feeds={storeFeed} cusNav={this.props.navigation} />
      </View>
    );
  }
}

export default EventScreen;
