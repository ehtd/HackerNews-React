import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async getTopStories() {
    try {
      let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      let jsonResponse = await response.json();
      this.setState({
        isLoading: false,
        data: jsonResponse
      });
    } catch (error) {
      console.error(error)
      this.setState({
        isLoading: false
      });
    }
  }

  componentDidMount() {
    return(
      this.getTopStories()
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{backgroundColor:'#333'}}>
        <FlatList 
          data={this.state.data}
            renderItem={({item}) => <Cell name={item}/>}
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
          <CircledLabel name='999'/>
        </View>
      </View>
    );
  }
}

class CircledLabel extends Component {
  render() {
    return (
      <View style={[styles.circledLabel, styles.centered]}>
        <Text style={[styles.centered, styles.red, styles.normal]} numberOfLines={1}>
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

let circleSize = 50;
let paddingSize = 10;
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
    padding: paddingSize,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  cellLabelTitle: {
    paddingHorizontal: paddingSize,
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
    height: circleSize,
    width: circleSize,
    borderRadius: circleSize / 2,
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
