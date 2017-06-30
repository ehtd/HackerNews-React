import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
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
          <NumberLabel name='10'/>
          <Text style={styles.cellLabel}>{this.props.name}</Text>
          <CircledLabel name='10'/>
        </View>
      </View>
    );
  }
}

class CircledLabel extends Component {
  render() {
    return (
      <View style={styles.circledLabel}>
        <Text style={styles.circledText} numberOfLines={1}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

class NumberLabel extends Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Text style={styles.circledText} numberOfLines={1}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 1
  },
  circledText: {
    alignItems: 'center',
    color: '#FFF',
    // backgroundColor: '#0F0',
    justifyContent: 'center'
  },
  cell: {
    backgroundColor: '#000',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  cellLabel: {
    padding: 10,
    flex: 1,
    backgroundColor: '#FFF',
  },
  cellNumberLabel: {
    backgroundColor: '#F00',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circledLabel: {
    backgroundColor: '#F00',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    backgroundColor: '#F00',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
