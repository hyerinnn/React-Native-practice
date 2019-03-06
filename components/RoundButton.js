import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from './Icon';
export default class RoundButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.box} onPress={this.props.onPress}>
          <Text style={styles.login}>{this.props.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    marginTop: 10,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d79',
    height: 50,
    borderRadius: 8,
    borderColor: '#d76',
    borderWidth: 1,
    width: '100%',
  },
  login: {
    color: '#eee',
    fontSize: 20,
  },
});
