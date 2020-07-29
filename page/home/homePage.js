import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Carousel} from '@ant-design/react-native';
import ListViewCom from '../component/listViewCom';

class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    // 判断当前是否为首页，focused为boolean
    tabBarIcon: ({focused}) => {
      if (focused) {
        return (
          <Image
            style={styles.tabBarIcon}
            source={require('../../assets/img/index.png')}
          />
        );
      }
      return (
        <Image
          style={styles.tabBarIcon}
          source={require('../../assets/img/index1.png')}
        />
      );
    },
  };
  render() {
    return (
      <View style={{marginTop: 10}}>
        <View style={{paddingHorizontal: 15}}>
          <Carousel style={styles.wrapper} selectedIndex={3} autoplay infinite>
            <View
              style={[styles.containerHorizontal, {backgroundColor: 'red'}]}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/img/app2.png')}
              />
            </View>
            <View
              style={[styles.containerHorizontal, {backgroundColor: 'blue'}]}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/img/app3.png')}
              />
            </View>
            <View
              style={[styles.containerHorizontal, {backgroundColor: 'yellow'}]}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/img/app4.png')}
              />
            </View>
          </Carousel>
        </View>
        <ListViewCom navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 21,
    height: 21,
  },
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
  image: {
    width: '100%',
    height: 150,
  },
});
export default HomePage;
