import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class CarItemDetail extends React.Component {

    render() {
        return (

            <TouchableOpacity style={styles.carbox} onPress={this.props.onPress}>
                <Image
                    //source={require("../Image/bory1.png")}
                    source={this.props.uri}
                    style={{ resizeMode: "contain", width: '35%', height: '100%'}}
                />

                <View style={{
                    flex: 1.3,
                    height: '100%',
                    paddingLeft: 5,
                    //backgroundColor: 'yellow',
                    paddingLeft: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <Text style={{ fontSize: 15 }}>
                        이름 : {this.props.title}
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        종 : {this.props.brd}
                    </Text>
                    <Text style={{ fontSize: 10, color:'gray' }}>
                        구매일 : {this.props.date}
                    </Text>
                </View>

                <View style={{
                    flex: 1,
                    height: '100%',
                    paddingLeft: 5,
                    //backgroundColor: 'red',
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingLeft: 10
                }}>
                    <Text style={{ fontSize: 15 }}>
                        샵 : {this.props.shop}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carbox: {
        //가로부분 설정
        height: 120,
        flexDirection: 'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 2,

    },

});
