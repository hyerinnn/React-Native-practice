import React from 'react';
import { StyleSheet,Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import DogInfo from './DogInfo';
import Loginscreen from './Loginscreen';
import CarItem from './CarItem';
import CarItemDetail from './components/CarItemDetail';
import Test from './Test';
import { Ionicons } from '@expo/vector-icons';

const AppNavigator = createStackNavigator({
  home: {
    screen: Loginscreen,
  },
  move1: {
    screen: CarItem,
  },
  move2:{
    screen: DogInfo,
  },

});
const AppNavigator2 = createStackNavigator({
  home: {
    screen: CarItem,
  },
  move1: {
    screen: DogInfo,
  },
  move2: {
    screen: Loginscreen,
  },

});
const TabNavigator = createBottomTabNavigator(
  {
    Home: AppNavigator,
    Settings: Test
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
        } else if (routeName === "Settings") {
          iconName = `ios-settings`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },

});
