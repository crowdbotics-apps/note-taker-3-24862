import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
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
