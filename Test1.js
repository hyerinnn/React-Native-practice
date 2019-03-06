import React from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DogInfo from './DogInfo';
import Apitest from './Apitest';
import CarItem from './CarItem';

const AppNavigator = createStackNavigator({
    List: {
        screen: DogInfo,
    },
    Detail: {
        screen: CarItem,
    },
});

class App extends React.Component {

    render() {
        return (

            /*//기존로그인화면
            <ImageBackground
              source={require("./bory.png")}
              style={{ flex: 1, height: '100%' }}
              imageStyle={{ opacity: 0.3 }}
            >
            <Loginscreen />
            </ImageBackground>
            */
            <Loginscreen />
            //<CarItem/>
            //<DogInfo/>
            //<SecList/>
            //<Apitest/>
        );
    }
}
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
    },

});
