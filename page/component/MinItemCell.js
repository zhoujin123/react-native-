import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Heading2, Paragraph} from './WidghtText';

class MineItemCell extends Component {
  render() {
    let icon = null;
    if (this.props.image) {
      icon = <Image style={styles.icon} source={this.props.image} />;
    }
    return (
      <View style={styles.container}>
        {icon}
        <Heading2>{this.props.title}</Heading2>
        <Paragraph>{this.props.subTitle}</Paragraph>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 14,
    height: 14,
  },
});

export default MineItemCell;
