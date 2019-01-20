import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        margin: 10, 
        shadowOffset:{  width: 0,  height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 1
    },
    cardImageStyle: { width: 150, height: 150, overflow: 'hidden' }
})

export default styles;
