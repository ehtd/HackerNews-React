import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Test'/>
        <View style={styles.cell}>
          <CircledLabel name='1'/>
          <Text style={styles.cellLabel}>Description Description Description Description Description Description Description Description Description Description Description </Text>
          <CircledLabel name='999'/>
        </View>
        <View style={styles.cell}>
          <CircledLabel name='2'/>
          <Text style={styles.cellLabel}>Description Description Description</Text>
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

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circledText: {
    alignItems: 'center',
    color: '#FFF',
    backgroundColor: '#0F0',
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
  circledLabel: {
    backgroundColor: '#F00',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
