import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Main extends Component {
    render(){
        return (
            <View>
                <Text>
                    React Native sandbox with:
                </Text>
                <Text>
                    - react-native-navigation
                </Text>
                <Text>
                    .... - compileSdkVersion 25
                </Text>
                <Text>
                    .... - buildToolsVersion "25.0.1"
                </Text>
                <Text>
                     - redux
                </Text>
                <Text>
                     - Reactotron
                </Text>
            </View>
        )
    }
}
