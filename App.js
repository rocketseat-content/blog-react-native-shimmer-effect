import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';


export default class App extends Component {
  state = {
    visible: false,
    userImageVisible: false,
    postImageVisible: false,
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: !this.state.visible }), 2500);
  }

  renderRows(numberRow) {
    let shimmerRows = [];
    for(let index = 0; index < numberRow; index++ ){
      shimmerRows.push(
        <View style={styles.post} key={`loading-${index}`}>
          <View style={styles.userInfoContainer}>
            <ShimmerPlaceHolder
              style={styles.postUserImage}
              visible={this.state.userImageVisible}
              backgroundColorBehindBorder={'white'}
            >
              <Image
                style={styles.postUserImage}
                source={{ uri: 'https://unsplash.it/1000/1000' }}
                onLoad={() => { this.setState({ userImageVisible: true }); }}

              />
            </ShimmerPlaceHolder>
            <View style={styles.userInfo}>
              <ShimmerPlaceHolder
                style={styles.shimmerComponent}
                autoRun={true}
                visible={this.state.visible}
              >
                <Text style={styles.username}>Usuário {index}</Text>
              </ShimmerPlaceHolder>
              <ShimmerPlaceHolder
                style={styles.shimmerComponent}
                autoRun={true}
                visible={this.state.visible}
              >
                <Text style={styles.posted}>Postado há {index} minutos</Text>
              </ShimmerPlaceHolder>
            </View>
          </View>
          <View style={styles.postInfo}>
            <ShimmerPlaceHolder
                style={styles.shimmerComponent}
                autoRun={true}
                visible={this.state.visible}
            >
              <Text>Essa é a descrição do post {index}</Text>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder
              style={styles.postImage}
              visible={this.state.postImageVisible}
              backgroundColorBehindBorder={'white'}
            >
              <Image
                style={styles.postImage}
                source={{ uri: 'https://unsplash.it/1000/1000' }}
                onLoad={() => { this.setState({ postImageVisible: true }); }}

              />
            </ShimmerPlaceHolder>
          </View>
          <View style={styles.postOptions}>
            <Text>Curtir</Text>
            <Text>Comentar</Text>
            <Text>Compartilhar</Text>
          </View>
        </View>
      )
    }
    return (
      <ScrollView style={styles.content}>
        {shimmerRows}
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar} />
        { this.renderRows(3) }
        <View style={styles.menuBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9ccd1',
  },
  searchBar: {
    height: 54,
    backgroundColor: '#3b5998',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  menuBar: {
    height: 54,
    backgroundColor: '#edeef1',
  },
  post: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  shimmerComponent: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  userInfoContainer: {
    flexDirection: 'row',
  },
  postUserImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  posted: {
    fontSize: 12,
    color: '#BBB',
    marginTop: 5,
  },
  postInfo: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    marginTop: 10,
    paddingVertical: 10,
  },
  postImage: {
    marginTop: 10,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height * 0.2,
  },
  postOptions: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
