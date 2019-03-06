import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Icon extends React.Component {
  render() {
    return (
      <MaterialCommunityIcons name={this.props.name} size={this.props.size} color={this.props.color} />
    );
  }
}
