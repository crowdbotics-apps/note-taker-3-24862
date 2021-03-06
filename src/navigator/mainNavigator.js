import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile212015Navigator from '../features/UserProfile212015/navigator';
import Tutorial212014Navigator from '../features/Tutorial212014/navigator';
import NotificationList211986Navigator from '../features/NotificationList211986/navigator';
import Settings211985Navigator from '../features/Settings211985/navigator';
import Settings211977Navigator from '../features/Settings211977/navigator';
import UserProfile211975Navigator from '../features/UserProfile211975/navigator';
import UserProfile211944Navigator from '../features/UserProfile211944/navigator';
import Tutorial211943Navigator from '../features/Tutorial211943/navigator';
import NotificationList211915Navigator from '../features/NotificationList211915/navigator';
import Settings211914Navigator from '../features/Settings211914/navigator';
import Settings211906Navigator from '../features/Settings211906/navigator';
import UserProfile211904Navigator from '../features/UserProfile211904/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile212015: { screen: UserProfile212015Navigator },
Tutorial212014: { screen: Tutorial212014Navigator },
NotificationList211986: { screen: NotificationList211986Navigator },
Settings211985: { screen: Settings211985Navigator },
Settings211977: { screen: Settings211977Navigator },
UserProfile211975: { screen: UserProfile211975Navigator },
UserProfile211944: { screen: UserProfile211944Navigator },
Tutorial211943: { screen: Tutorial211943Navigator },
NotificationList211915: { screen: NotificationList211915Navigator },
Settings211914: { screen: Settings211914Navigator },
Settings211906: { screen: Settings211906Navigator },
UserProfile211904: { screen: UserProfile211904Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
