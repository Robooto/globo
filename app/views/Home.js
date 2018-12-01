import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

class Home extends React.Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Header message='Press to Login' />
                <Hero />
                <Menu navigation={navigation} /> 
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

/**
 * Ability to write platform specfic code
 * Playform.select({
 *  ios: {
 *      height: 300
 *      },
 *  android: {
 *      height: 250
 *  }
 * })
 */
