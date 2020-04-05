import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import Item from './Item';
import {styles} from './event.styles';

@inject('MainStore')
@observer
class EventMap extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.focusListener = this.props.cusNav.addListener('focus', () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.focusListener();
  }
  render() {
    const {feeds} = this.props;
    let nCol = this.props.MainStore.typeofView === 'list' ? 1 : 2;

    return (
      <View>
        <FlatList
          data={feeds}
          renderItem={({item}) => (
            <Item
              item={item}
              cusNav={this.props.cusNav}
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

export default EventMap;
