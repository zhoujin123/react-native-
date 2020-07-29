import React, {Component} from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import pxSize from '../../assets/js/pxSize';
import imgArr from '../../assets/js/imgArr';

class CatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        '爆笑喜剧',
        '少年热血',
        '武侠格斗',
        '少女爱情',
        '恐怖灵异',
        '侦探推理',
        '科幻魔幻',
        '竞技体育',
        '其他漫画',
      ],
    };
  }
  static navigationOptions = {
    tabBarLabel: '分类',
    tabBarIcon: ({focused}) => {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../assets/img/type1.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../assets/img/type0.png')}
        />
      );
    },
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.types.map((item, index) => {
          return (
            <View key={item + index}>
              <Text style={styles.title}>{item}</Text>
              <Image
                source={imgArr[`cat${index}`]}
                style={[
                  {width: pxSize(330), height: pxSize(215)},
                  styles.imageBox,
                ]}
                resizeMode="cover"
              />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 14,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageBox: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default CatePage;
