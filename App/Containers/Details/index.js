import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageDetails from '../../Components/ImageDetails';

export default class Details extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <ImageDetails navigation={this.props.navigation}/>
        )
    }
}