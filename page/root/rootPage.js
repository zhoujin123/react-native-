import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomePage from '../home/homePage';
import CatePage from '../home/catePage';
import MinePage from '../home/minePage';

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      title: '首页',
      tabBarLabel: '首页',
    },
  },
  Cate: {
    screen: CatePage,
    navigationOptions: {
      title: '分类',
      tabBarLabel: '分类',
    },
  },
  Mine: {
    screen: MinePage,
    navigationOptions: {
      title: '个人中心',
      tabBarLabel: '个人中心',
    },
  },
});

export default BottomNavigator;
