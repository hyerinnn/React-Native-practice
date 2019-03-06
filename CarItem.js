import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import CarItemDetail from './components/CarItemDetail';
import moment from 'moment';
import { EvilIcons } from "@expo/vector-icons";


export default class CarItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            data: [
                { key: 'a', title: '보리', uri: require("./Image/bory1.png"), brd: '장모치와와', 
                    shop: '은수dog', date: <EvilIcons name={"calendar"} size={30} style={{paddingTop: 20}}/> },
                { key: 'b', title: '콩이', uri: require("./Image/kong1.png"), brd: '장모치와와', 
                    shop: '해피독', date: <EvilIcons name={"calendar"} size={30} style={{ paddingTop: 20 }} /> },
            ]
        }
    }

    render() {
        const DATE = this.props.navigation.getParam('selectedDate');
        const a = moment(this.state.DATE);
        return (

            <View style={styles.container}>
                <View style={styles.logo}>
                    <Text>홈</Text>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: 10
                        }}
                    >KongBory</Text>
                    <Text>back</Text>
                    
                </View>

                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => <CarItemDetail onPress={()=>{
                        this.props.navigation.navigate('move2')
                    }} key={index} title={item.title} uri={item.uri} brd={item.brd} shop={item.shop} date={item.date} />}
                    refreshing={this.state.isRefreshing}
                    onRefresh={() => {
                        this.setState({
                            isRefreshing: true
                        })
                        setTimeout(() => {
                            this.setState({
                                isRefreshing: false,
                                data: [
                                    { key: 'a', title: '보리', uri: require("./Image/bory1.png"), brd: '장모치와와', shop: '은수dog', date: a.format('YYYY년 MM월 DD일') ? a.format('YYYY년 MM월 DD일') : "선택날짜없음"  },
                                    { key: 'b', title: '콩이', uri: require("./Image/kong1.png"), brd: '장모치와와', shop: '해피독'  },
                                    { key: 'c', title: '해리', uri: require("./Image/harry1.png"), brd: '시츄', shop: '댕댕샵'},
                                    { key: 'd', title: '몽', uri: require("./Image/mong1.png"), brd: '모름', shop: '멍뭉이네' },
                                ]
                            })
                        }, 2000);
                    }}
                />
            </View>
        );
    }s
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
    },
    logo: {
        width: '100%',
        height: 60,
        backgroundColor: '#A84E19',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20
    },
});
