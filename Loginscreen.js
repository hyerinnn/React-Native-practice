import React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, ImageBackground, Button } from 'react-native';
import IconTextInput from './components/IconTextInput';
import RoundButton from './components/RoundButton';
import Alarm from './components/Alarm';

export default class Loginscreen extends React.Component {

  static navigationOptions = ({navigation})=> {  
    return {
      headerTitle:(
      <View style={styles.top}>
          <Text style={{ fontSize: 20, color: '#d79' }} >KongBory</Text>
      </View>
      ),
     headerRight:(
        <Button
          onPress={()=> {
            navigation.navigate('move2');
          }}
          title="눌러"
          color='grey'
        />
      ),
    };
  };

  render() {
    return (
      <ImageBackground
        source={require("./bory.png")}
        style={{ flex: 1, height: '100%' }}
        imageStyle={{ opacity: 0.3 }}
      >
      
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text
          style={{
            fontSize: 55,
            marginBottom: 20,
            fontWeight: 'bold',
            color: '#d79',
          }}
        >
          KongBory
        </Text>
        <IconTextInput IconName={'account'} placeholder=" ID " />
        <IconTextInput
          IconName={'keyboard-outline'}
          placeholder=" PASSWORD  "
        />
        <RoundButton
          title={'LOGIN'}
            onPress={() => {
              this.props.navigation.navigate('move1')}}
        />
        <Alarm />
      </KeyboardAvoidingView>
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  top:
  {
    width: '100%',
   //backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingRight: 20,
    paddingLeft: 30,
    
  }
});
