import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

var { height, width } = Dimensions.get('window');
const isWidePhone = width > 350;

export default class Alarm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            color: 'grey',
            textAlign: 'center',
            lineHeight: 25,
          }}
        >
          <Text style={styles.link}>이용약관</Text>과{' '}
          <Text style={styles.link}>개인정보취급정책</Text>에 동의하실 경우,
          {isWidePhone ? '\n' : ''}
          새 계정을 만들어 주세요.
        </Text>
        <View style={{ marginTop: 25 }}>
          <Text
            style={{
              fontSize: 14,
              color: '#17d',
              textDecorationLine: 'underline',
            }}
          >
            회원가입 하시겠어요?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'black',
    fontSize: 16,
  },
});
