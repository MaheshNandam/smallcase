import React, { Component } from 'react'
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet, View, Image, FlatList, NetInfo } from 'react-native';
import ImageCard from '../Components/ImageCard';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    }
  }

  checkNetConnectivity = (isConnected) => {
    if (isConnected) {
      this.setState({ isConnected });
    }
    else {
      this.setState({ isConnected });
    }
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.checkNetConnectivity)
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.checkNetConnectivity)
  }

  render () {
    return (
      <SafeAreaView forceInset={{ bottom: 'always' }} style={{flex: 1}}>
        {
          this.state.isConnected ?
            (
              <FlatList
                horizontal={false}
                numColumns={'2'}
                style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}
                data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
                renderItem={({ item }) =>
                  <View style={{
                    justifyContent: 'space-around',
                    flexDirection: 'row', flexWrap: 'wrap', flex: 1
                  }}>
                    <ImageCard key={item.key} navigation={this.props.navigation} />
                  </View>
                }
              />
            )
            :
            null
        }
      </SafeAreaView>
    )
  }
}
