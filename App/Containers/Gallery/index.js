import React, { Component } from 'react'
import { Text, StyleSheet, View, NetInfo} from 'react-native'
import ImageGallery from '../../Components/ImageGallery';
import GalleryActions from '../../Redux/GalleryRedux';
import { connect } from 'react-redux';
import styles from './styles';

const { getSmallCases } = GalleryActions;

class Gallery extends Component {
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
    this.state.isConnected ? this.props.allSmallCases() : null;
    NetInfo.isConnected.addEventListener('connectionChange', this.checkNetConnectivity)
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.checkNetConnectivity)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.isConnected ? null : (<Text style={styles.textCenter}>{`You are Offline, please try to connect to WiFi`}</Text>)}
        <ImageGallery navigation={this.props.navigation} galleryData={this.props.smallCaseData} />
      </View>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    smallCaseData: state.gallery.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    allSmallCases: () => {
      dispatch(getSmallCases())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
