import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import * as queries from '../src/graphql/queries';
import { API, graphqlOperation } from "aws-amplify";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    categories: []
  };

  async componentDidMount() {
    try {
      const categories = await API.graphql(graphqlOperation(queries.listCategories))
      console.log('categories:', categories);
      this.setState({
        categories: categories.data.listCategories.items
      })
    } catch (err) {
      console.log('error fetching categories...', err)
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      {this.state.categories.map((category, index) => (
          <View key={index}>
            <Text>{category.category}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
