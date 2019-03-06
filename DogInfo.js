import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, SectionList, Button } from 'react-native';
import Icon from './components/Icon';

export default class DogInfo extends React.Component {

    render() {
        
        const data =[
            { name: 'breed', text: '품종', icon:'dog'},
            { name: 'birth', text: '나이', icon: 'dog'},
            { name: 'parent', text: '부모', icon: 'dog'},
            { name: 'health', text: '접종상태', icon: 'dog'},
        
        ]
        //detail의 개별 글씨부분
        const items = data.map((x)=>{
            return(
                
                <View key={x.name} style={{margin:2, flexDirection:'row',
                                paddingLeft:5, height:50, width:'46%', paddingTop:15}}>
                    <Icon name={x.icon} color={'gray'} size={13}/>
                    <Text> {x.text}</Text>
               </View>
               
            
            );
        })
        return (
            
            //Top view부분
            <View style={styles.container}>
            
                {/*위 이미지부분*/}
                <Image                    
                    source={require("./Image/bory1.png")}
                    style={styles.img}
                />
              
                {/*중간부분*/}
                <View style={styles.detail}>
                    {items}
                    <View style={{
                        //구분선 스타일
                        position:'absolute',
                        width: 2, 
                        marginTop:15,
                        height:'70%',
                        //left:'3.1%',
                        left: '50%',
                        backgroundColor:'black'
                    }}>
                    </View>    
                </View>

                {/*아랫부분*/}
                <View style={styles.doc}>
                    <SectionList 
                        renderItem={({ item, index, section }) => 
                            <View key={index}> 
                                <Image source={item.urii}/>
                                <Text >{item.title}</Text>
                            </View>}
                        renderSectionHeader={({ section: { title,color } }) => (
                            <View style={{backgroundColor:color, height: 50}}>
                            <Text style={{ fontWeight: 'bold', fontSize:30 }}>{title}</Text>
                        </View>
                        )}
                        sections={[
                            //이미지 넣을때 / 여러개 넣을때는 배열로 그냥 넣으면 됨.
                            { title: '콩이',color:'red' ,data: [{ title: '콩콩콩콩', urii: require("./Image/kong1.png") }, { title: 'iiiiyyyyyiii', urii: require("./Image/kong1.png") } ] },
                            { title: '보리',color:'gray' ,data: [{ title: '보리보리보리', urii: require("./Image/bory1.png") }, { title: 'iiiiyyyyyiii', urii: require("./Image/bory1.png") }] },
                            // { title: '이진수', data: ['바이너리다', '꿀잠을잤다'] },
                            // { title: '박은수', data: ['밥먹고 멍때린다', '은슈'] },
                           
                        ]}
                        keyExtractor={(item, index) => item + index}
                        stickySectionHeadersEnabled ={true} //안드로이드에서 섹션리스트 title 고정해줌
                    />      

                </View>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        //backgroundColor: 'black',
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
    img:{
        resizeMode: "contain", 
        height: '100%', 
        backgroundColor:'yellow',
        height:'100%',
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detail: {
        flexDirection: 'row',
        //backgroundColor: 'red',
        flexWrap: 'wrap',
        justifyContent:'center',
        width:'100%',
    },
    doc: {
        //backgroundColor: 'pink',
        height: '100%',
        flex: 1
    }
});
