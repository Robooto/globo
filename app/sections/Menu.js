import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';

class Menu extends React.Component {

    onPress = () => {
        Alert.alert('You tapped the button');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigation.navigate('LessonsRT')}>
                        <Text style={styles.buttonText}>LESSONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigation.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#34605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#34605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
});