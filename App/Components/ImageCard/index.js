import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

class ImageCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onViewSmallCase}>
                <View style={styles.cardStyle}>
                    <Image source={{ uri: this.props.imageURL }} style={styles.cardImageStyle} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default ImageCard; 
