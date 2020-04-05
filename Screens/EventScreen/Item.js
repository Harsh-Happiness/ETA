import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import defaultThumb from '../../images/thumbnail.png';

import {styles} from './event.styles';

const handleForMultipleScreen = (screenName, cusNav, item) => {
  if (screenName !== 'Tracked Events') {
    cusNav.navigate('Event Details', item);
  }
};
const Item = ({item, cusNav = null, viewType, screenName = null}) => {
  const cssForTrackedItem =
    item.tracked === true ? styles.trackedColor : styles.noColor;

  return (
    <TouchableOpacity
      style={[
        cssForTrackedItem,
        viewType === 'list' ? styles.eachListItem : styles.eachGridItem,
      ]}
      onPress={() => handleForMultipleScreen(screenName, cusNav, item)}>
      <Image
        style={viewType === 'list' ? styles.listImage : styles.gridImage}
        source={defaultThumb}
      />
      <View style={{padding: 7}}>
        <Text style={styles.eachEntry}>{item.event}</Text>
        <Text style={styles.eachEntry}>{item.place}</Text>
        <Text style={styles.eachEntry}>{item.entryType}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
