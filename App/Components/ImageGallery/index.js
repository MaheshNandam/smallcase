import React, { Component } from 'react'
import { SafeAreaView } from 'react-navigation';
import { Text, StyleSheet, View, Image, FlatList, NetInfo, ScrollView, RefreshControl } from 'react-native';
import ImageCard from '../ImageCard';
import HistoricalActions from '../../Redux/HistoricalRedux';
import { connect } from 'react-redux';
import { offlineActionTypes } from 'react-native-offline';

const { getHistoricalData } = HistoricalActions;

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        }
    }

    onViewSmallCase=(data)=>{
        this.props.historicalData(data.scid)
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.props.galleryData; 
        setTimeout(()=>{
           this.setState({ refreshing: false })
        }, 600)       
    }

    render() {
        return (
            <SafeAreaView forceInset={{ bottom: 'always' }} style={{ flex: 1 }}>
                <ScrollView 
                    style={{flexGrow: 1}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <FlatList
                        keyExtractor={(item, index) => index}
                        horizontal={false}
                        numColumns={'2'}
                        contentContainerStyle={{ flex: 1 }}
                        data={this.props.galleryData}
                        renderItem={({ item }) =>
                            <ImageCard
                                key={item.key}
                                navigation={this.props.navigation}
                                onViewSmallCase={() => this.onViewSmallCase(item.data.data)}
                                imageURL={'https://assets.smallcase.com/images/smallcases/130/' + item.data.data.scid + '.png'} 
                            />                           
                        }
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         isConnected: state.network.isConnected
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        historicalData: (scid) => {
            dispatch(getHistoricalData(scid))
        }
    }
}

export default connect(null, mapDispatchToProps)(ImageGallery);
