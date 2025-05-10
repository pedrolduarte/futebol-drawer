import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import EscudoScreen from "../screens/EscudoScreen";
import JogadoresScreen from "../screens/JogadoresScreen";
import TitulosScreen from "../screens/TitulosScreen";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#e01e37" },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#e01e37",
      }}
    >
      <Drawer.Screen
        name="Escudo"
        component={EscudoScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Jogadores"
        component={JogadoresScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Títulos"
        component={TitulosScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
