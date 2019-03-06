import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';


export default class Apitest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0, 
        }
    }
    //위치정보를 얻는 코드
    componentDidMount(){    
        navigator.geolocation.getCurrentPosition(  
            (position) => { 
                //coords는 Coordinates의 객체로, 현재의 위치를 정의함
                const {coords} = position;
                this.setState({ 
                    latitude : coords.latitude, 
                    longitude: coords.longitude 
                });
            },
            (error) => { 
                alert(error.message) 
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );

        //현재 위치 갱신할때의 설정
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const { coords } = position;
            this.setState({
                latitude: coords.latitude,
                longitude: coords.longitude
            });
        });
    }
    
    //해제 (해제안해주면 계속 새로고침됨)
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
                {this.state.latitude ? 
                <MapView style={{ height: '60%', width: '100%' }}
               
                 region={{
                     latitude: this.state.latitude, 
                     longitude: this.state.longitude, 
                     latitudeDelta: 0.0922,
                     longitudeDelta: 0.0421,
                    }}
                    showUserLocation={true} //원으로 현재위치 표시
                    />
                 : <Text>위치 정보 읽어오는중..</Text>
                }
                <Text>{this.state.longitude}</Text>
                <Text>{this.state.latitude}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems : 'center'
    },

});
