import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen';
import Gallery from '../Containers/Gallery';
import Details from '../Containers/Details';
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  imageGallery: {
    screen: Gallery,
    navigationOptions: () => ({
      title: `All Small Cases`,
    }),
  },
  imageDetails: {
    screen: Details,
    navigationOptions: () => ({
      title: `Small Case`,
    }),
  }
}, {
  // Default config for all screens
    initialRouteName: 'imageGallery',
    navigationOptions: {
      headerStyle: styles.header
    }
})

export default createAppContainer(PrimaryNav)
