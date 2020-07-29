import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import pxSize from '../../assets/js/pxSize';
import {Button} from '@ant-design/react-native';

class BriefPage extends Component {
  render() {
    let {navigation} = this.props;
    const book = navigation.state.params.book;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            style={styles.button}
            type="default"
            size="small"
            onPress={() => {
              navigation.goBack();
            }}>
            《 返回
          </Button>
          <Text>小兔子乖乖</Text>
        </View>
        <View>
          <Text style={styles.title}>{book}</Text>
          <Image
            source={require('../../assets/img/tuzi.png')}
            resizeMode="cover"
            style={{height: pxSize(600)}}
          />
          <Text style={styles.describe} numberOfLines={13}>
            漫画描写法是指抓住人或事物的某一外貌特征，运用夸张和比喻等手段进行勾勒形象来表现性格特征的一种描写方法。
            这种方法的特点有三：一是抓住能表现性格的外貌特征，简笔勾勒；二是夸张和比喻手法的运用；三是有画面感。这种描写，不求人物的维妙维肖、呼之欲出；不求形神兼备，只求特征鲜明、特征之处见“精神”。这种描写，不求面面俱到，只求突出一点。抓住某一个“点”，把镜头对准它，放大、夸张、“曝光”，以达到突出人物性格特征、给人深刻印象的目的。
            鲁迅是文学漫画大师，他善于抓住人物特征，用白描的笔调勾勒出人物的画像，以表现其性格特征。例如，《故乡》(九年义务教育三年制初级中学教科书《语文》第二册，人民教育出版社1993年版)一文中“凸颧骨，薄嘴唇”，“两手搭在髀间，没有系裙，张着两脚，正像一个画图仪器里细脚伶仃的圆规”的自私、油腔滑调的市侩杨二嫂的漫画像；脸“灰黄”而有“很深的皱纹”，眼“周围都肿得通红”，头戴“破毡帽”，那“像是松树皮”的手“又粗又笨而且开裂”的衰老麻木的闰土的漫画像。这些都是漫画描写的杰作
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#87CEFA',
    height: 50,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold',
  },
  describe: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 28,
  },
});
export default BriefPage;
