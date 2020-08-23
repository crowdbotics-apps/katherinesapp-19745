import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList93529Navigator from '../features/ArticleList93529/navigator';
import ArticleList93528Navigator from '../features/ArticleList93528/navigator';
import ArticleList93527Navigator from '../features/ArticleList93527/navigator';
import ArticleList93505Navigator from '../features/ArticleList93505/navigator';
import ArticleList93503Navigator from '../features/ArticleList93503/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList93529: { screen: ArticleList93529Navigator },
ArticleList93528: { screen: ArticleList93528Navigator },
ArticleList93527: { screen: ArticleList93527Navigator },
ArticleList93505: { screen: ArticleList93505Navigator },
ArticleList93503: { screen: ArticleList93503Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
