import { StyleSheet, Dimensions } from 'react-native';
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    flexView: { flex: 1 },
    cardImageStyle: { width: width, height: height * 0.33, resizeMode: 'stretch' },
    scrollBody: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    textCaption:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;
