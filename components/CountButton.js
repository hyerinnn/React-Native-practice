import React from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView, Text, View, TouchableOpacity } from 'react-native';


export default class CountButton extends React.Component {
    constructor(props){

    }
    
    render() {
        return (
            <View style={{flex:1, marginTop:100, }}>
                <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
                    <Text style={{fontSize:50}}>{this.props.title} </Text>
                </TouchableOpacity>
            </View>

        );
    }
}