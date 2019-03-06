import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

export default class IconTextInput extends React.Component {

  componentDidMount(){
    //불러와서 state바꿈.
  }  


  render() {
    return (
      <View style={styles.container}>
        <Icon name={this.props.IconName} />
        <TextInput
          placeholder={this.props.placeholder}
          style={{ marginLeft: 5, width: '80%', height: 50 }}
          onChangeText={text =>{
            //저장해요
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderWidth: 0.2,
    paddingLeft: 20,
  },
});
