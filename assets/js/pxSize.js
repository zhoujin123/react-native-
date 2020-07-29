import {Dimensions} from 'react-native';

// app只有竖屏模式，只获取一次宽度
const deviceWithDp = Dimensions.get('window').width;

// UI给图的尺寸
const uiWidthPx = 750;

function pxSize(uiElementPx) {
  return (uiElementPx * deviceWithDp) / uiWidthPx;
}

export default pxSize;
