import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import grid from '../../images/grid.png';
import list from '../../images/list.png';
import {styles} from './event.styles';

@inject('MainStore')
@observer
class TypeOfView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handlePress = (selected) => {
    if (selected !== this.props.MainStore.typeofView) {
      this.props.MainStore.setTypeofView(selected);
    }
  };

  handleTrackedList = () => {
    this.props.navigation.navigate('Tracked Events');
  };

  render() {
    return (
      <View style={styles.typeofViewBox}>
        <Text
          onPress={() => this.handleTrackedList()}
          style={styles.typeofViewText}>
          {'Tracks ' + '(' + this.props.MainStore.count + ')'}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.handlePress('list')}>
            <Image style={styles.viewImage} source={list} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handlePress('grid')}>
            <Image style={styles.viewImage} source={grid} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TypeOfView;
