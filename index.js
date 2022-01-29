import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import PropTypes from 'prop-types'

AppRegistry.registerComponent(appName, () => App);
