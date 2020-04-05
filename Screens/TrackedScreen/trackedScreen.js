import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {inject, observer} from 'mobx-react';
import Item from '../EventScreen/Item';

@inject('MainStore')
@observer
export class TrackedScreen extends Component {
  render() {
    const trackedList = this.props.MainStore.trackList;
    let nCol = this.props.MainStore.typeofView === 'list' ? 1 : 2;
    return (
      <View>
        <FlatList
          data={trackedList}
          renderItem={({item}) => (
            <Item
              item={item}
              screenName={this.props.route.name}
              viewType={this.props.MainStore.typeofView}
            />
          )}
          numColumns={nCol}
          key={nCol}
          keyExtractor={(item) => item.event}
        />
      </View>
    );
  }
}

export default TrackedScreen;
