import React from 'react';
import { StyleSheet,SectionList , Text, View } from 'react-native';


export default class SecList extends React.Component {

    render() {
        return (
            <SectionList
                renderItem={({item, index, sections}) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({section: {title}}) => (  
                    <Text style={{fontWeight: 'bold'}}>{title}</Text> 
                )}
                sections={[
                    {title: '은수', data: ['박은수', '똥멍청이']},
                    {title: 'Title1', data: ['item1', 'item1']},
                    {title: 'Title1', data: ['item1', 'item1']},
                ]}
                keyExtractor={(item, index) => item + index}
            />            

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
    },

});
