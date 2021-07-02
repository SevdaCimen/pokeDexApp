import {
  IntroScreen,
  ProfileScreen,
} from "../screens";

import PokeInfoScreen from "../screens/Pokemon/PokeInfoScreen";
import PokeListScreen from "../screens/Pokemon/PokeListScreen";
import React from "react";
import UserListScreen from "../screens/Lists/UserListScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Routes = ({ initRoute }) => {
  return (
    <Stack.Navigator initialRouteName={initRoute}>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokeInfo"
        component={PokeInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PokeList"
        component={PokeListScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="UserList"
        component={UserListScreen}
        options={{ headerShown: false }}
      />
   
    </Stack.Navigator>
  );
};

export default Routes;
