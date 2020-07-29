import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {ListView} from '@ant-design/react-native';
import pxSize from '../../assets/js/pxSize';
import imgArr from '../../assets/js/imgArr';

class ListViewCom extends Component {
  state = {
    layout: 'list',
  };
  sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
  onFetch = async (page = 1, startFetch, aboutFetch) => {
    try {
      // console.log(imgArr);
      let pageLimit = 20;
      if (this.state.layout === 'grid') pageLimit = 60;
      const skip = (page - 1) * pageLimit;
      let rowData = Array.from(
        {length: pageLimit},
        (_, index) => `这是第${index + skip}条`,
      );
      if (page === 3) {
        rowData = [];
      }
      await this.sleep(2000);
      startFetch(rowData, pageLimit);
    } catch (err) {
      aboutFetch();
    }
  };
  skipDetail = (item) => {
    let {navigation} = this.props;
    navigation.navigate('BriefPage', {book: item});
  };
  renderItem = (item) => {
    // 随机从三张图片中取一张
    const randomNum = Math.floor(Math.random() * 3 + 1);
    return (
      <TouchableOpacity
        style={styles.imgView}
        onPress={() => this.skipDetail(item)}>
        <View>
          <Image
            style={{width: pxSize(300), height: pxSize(400)}}
            source={imgArr[`png${randomNum}`]}
            resizeMode="cover"
          />
          <View>
            <Text>{item}</Text>
            <Text ellipsizeMode="tail" numberOfLines={1}>
              这是一个很长的简介，可能放不下，需要省略。这是一个很长的简介，可能放不下，需要省略
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item, index) => `${this.state.layout}-${item}-${index}`}
        renderItem={this.renderItem}
        numColumns={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  imgView: {
    padding: 16,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});

export default ListViewCom;
