import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'; 
import moment from 'moment';



export default class DateSelect extends Component {
    state = {
        isDateTimePickerVisible: true,//true면 바로 날짜선택이 뜸
        selectedData: null
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    //취소 누를경우
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
    //확인 누를경우
    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
          this.setState({
              selectedDate: date
          });
        
    };

    render() {
        const a = moment(this.state.selectedDate);
        return (
            <View style={{ flex: 1,  }}>
                <TouchableOpacity 
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    onPress={this._showDateTimePicker}>
                    <Text >날짜를 선택해주세요</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
                    <Text>{this.state.selectedDate ? a.format('YYYY년 MM월 DD일') : "선택날짜없음"}</Text>
                </View>
            </View>
        );
    } 

}


