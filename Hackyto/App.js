import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#333'}}>
        <FlatList 
          data={[
            {key: "Test1"}, 
            {key: "Test2"},
            {key: "Test3"}, 
            {key: "Test4"},
            {key: "Test5"}, 
            {key: "Test6"},
            {key: "Test7"}, 
            {key: "Test8"},
            {key: "Test9"}, 
            {key: "Test10"},
            {key: "Test11"},
            {key: "Test12"},
            {key: "Test13"},
            {key: "Test14"},
            {key: "Test15"},
            ]}
            renderItem={({item}) => <Cell name={item.key}/>}
          />
      </View>
    );
  }
}

class Cell extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.cell}>
          <NumberLabel name='200'/>
          <View style={{flex:1, flexDirection: 'column'}}>
            <Text style={[styles.cellLabelTitle, styles.normal]}>{this.props.name}</Text>
            <Text style={[styles.cellLabelDescription, styles.small]}>{this.props.name}</Text>
          </View>
          <CircledLabel name='10'/>
        </View>
      </View>
    );
  }
}

class CircledLabel extends Component {
  render() {
    return (
      <View style={[styles.circledLabel, styles.centered]}>
        <Text style={[styles.centered, styles.red]} numberOfLines={1}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

class NumberLabel extends Component {
  render() {
    return (
      <View style={[styles.largeView, styles.centered]}>
        <Text style={[styles.centered, styles.large]} numberOfLines={1}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 1
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  cell: {
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  cellLabelTitle: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#FFF',
  },
  cellLabelDescription: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#FFF',
  },
  circledLabel: {
    backgroundColor: '#F00',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  largeView: {
    height: 40,
    width: 60,
  },
  red: {
    backgroundColor: '#F00',
    color: '#FFF',
  },
  large: {
    fontSize: 26
  },
  normal: {
    fontSize: 20
  },
  small: {
    fontSize: 10
  }
});
