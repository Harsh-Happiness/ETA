/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {inject, observer} from 'mobx-react';
import {styles} from '../../styles';

@inject('MainStore')
@observer
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onChangeText = (t) => {
    this.setState({name: t});
  };

  componentDidMount = async () => {
    try {
      let c,
        list = [];
      await AsyncStorage.multiGet(['count', 'trackList']).then((resp) => {
        c = +resp[0][1];
        list = JSON.parse(resp[1][1]);
        if (c !== 0) this.props.MainStore.count = c;
        if (list !== null) {
          this.props.MainStore.trackList = list;
          this.props.MainStore.handleDataList();
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  clearStorage = async () => {
    let keys = ['count', 'trackList'];
    await AsyncStorage.multiRemove(keys, () => {
      console.log('removed !');
    });
  };
  render() {
    const name = this.state;
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.title}>Type your name...</Text>

        <TextInput
          underlineColorAndroid="transparent"
          selectionColor="black"
          style={{
            fontSize: 15,
            padding: 15,
            borderColor: 'black',
            borderWidth: 1,
            width: '75%',
          }}
          placeholder={'Your name'}
          onChangeText={(t) => this.onChangeText(t)}
          value={this.state.name}
        />

        {this.state.name != '' && (
          <View style={{padding: 10}}>
            <Button
              title="Go Ahead!"
              onPress={() => this.props.navigation.navigate('Events')}
            />
          </View>
        )}
        <View style={{padding: 20}}>
          <Button
            title="Clear Storage"
            color={'#ff4c4c'}
            onPress={() => this.clearStorage()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
