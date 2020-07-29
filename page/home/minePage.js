import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Heading1, Paragraph} from '../component/WidghtText';
import {WhiteSpace} from '@ant-design/react-native';
import imgArr from '../../assets/js/imgArr';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const list = [
  [
    {title: '我的钱包', subtitle: '办信用卡 >', iconkey: 'qianbao'},
    {title: '余额', subtitle: '￥10000 >', iconkey: 'yue'},
    {title: '抵用券', subtitle: '5 >', iconkey: 'diyongquan'},
    {title: '会员卡', subtitle: '2 >', iconkey: 'huiyuanka'},
  ],
  [
    {title: '好友去哪', subtitle: '>', iconkey: 'haoyou'},
    {title: '我的评价', subtitle: '>', iconkey: 'pinjia'},
    {title: '我的收藏', subtitle: '>', iconkey: 'shoucang'},
    {title: '会员中心', subtitle: '￥15 >', iconkey: 'huiyuan'},
    {title: '积分商城', subtitle: '好礼已上线 >', iconkey: 'jifen'},
  ],
  [
    {title: '客服中心', subtitle: '>', iconkey: 'kefu'},
    {title: '关于我', subtitle: '>', iconkey: 'guanyuwo'},
  ],
];
class MinePage extends Component {
  static navigationOptions = {
    tabBarLabel: '个人中心',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../assets/img/mine1.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../assets/img/mine0.png')}
        />
      );
    },
  };
  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/img/yixing.jpg')}
            style={styles.imageBox}
          />
          <Heading1>贝壳女孩儿~</Heading1>
        </View>
        <StatusBar barStyle="default" backgroundColor="#219bd9" />
      </View>
    );
  }
  renderContent() {
    return list.map((parent, index) => {
      return (
        <View key={index} style={styles.listBox}>
          <WhiteSpace />
          {parent.map((item) => {
            return (
              <View key={item.iconkey} style={styles.listcell}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={imgArr[item.iconkey]} style={styles.icon} />
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Paragraph>{item.subtitle}</Paragraph>
                </View>
              </View>
            );
          })}
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.mineContent}>
        <View
          style={[
            styles.container,
            {
              width: screenWidth,
              height: screenHeight / 2,
            },
          ]}
        />
        <ScrollView>
          {this.renderHeader()}
          <WhiteSpace />
          {this.renderContent()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21,
  },
  mineContent: {
    // marginTop: 10,
  },
  container: {
    position: 'absolute',
    backgroundColor: '#00CED1',
  },
  header: {
    height: 200,
    paddingTop: 60,
    paddingLeft: 40,
    backgroundColor: '#00CED1',
  },
  imageBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  listcell: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default MinePage;
