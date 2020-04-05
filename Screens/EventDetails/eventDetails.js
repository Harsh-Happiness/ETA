import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {inject, observer} from 'mobx-react';
import thumb from '../../images/thumbnail.png';

import {styles} from './details.styles';

@inject('MainStore')
@observer
class EventDetails extends Component {
  constructor(props) {
    super(props);
  }

  persistData = async () => {
    try {
      let trackCount = this.props.MainStore.count.toString();
      let temp = this.props.MainStore.trackList;
      let trackList = JSON.stringify(temp);
      await AsyncStorage.setItem('count', trackCount);

      let items = [
        ['count', trackCount],
        ['trackList', trackList],
      ];
      await AsyncStorage.multiSet(items, () => {
        console.log('multi set done!');
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleItemSelection = (details) => {
    if (details.tracked === false) {
      details.tracked = true;
      this.props.MainStore.incrementCount(details);
      this.props.MainStore.changeEntryofItemInList(details);
      this.props.navigation.goBack('Events');
      this.persistData();
    }
  };

  handleItemDeselection = (details) => {
    if (details.tracked === true) {
      details.tracked = false;
      this.props.MainStore.decrementCount(details);
      this.props.MainStore.changeRemoveEntryofItemInList(details);
      this.props.navigation.goBack('Events');
      this.persistData();
    }
  };

  render() {
    const details = this.props.route.params;

    return (
      <View style={styles.detailsBox}>
        <Image style={styles.image} source={thumb} />
        <View style={styles.textBody}>
          <Text style={styles.eachText}>{details.event}</Text>
          <Text style={styles.eachText}>{details.place} </Text>
          <Text style={styles.eachText}>{details.entryType}</Text>
        </View>

        <View style={styles.buttonBox}>
          <Button
            title={
              details.tracked === false ? 'Add to Track!' : 'Already tracked!'
            }
            color={details.tracked === false ? 'green' : '#00d8ff'}
            onPress={() => this.handleItemSelection(details)}
          />
          {details.tracked && (
            <Button
              title={'Untrack!'}
              color={'#ff4c4c'}
              onPress={() => this.handleItemDeselection(details)}
            />
          )}
        </View>
      </View>
    );
  }
}

export default EventDetails;
