import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";

export default function TabLayout() {
    
    return (

    <Tabs
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
            position: "absolute",
            bottom: 22,
            left: 12,
            right: 12,
            height: 50,
            backgroundColor: "white",
            borderRadius: 40,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.1)",
        },

        tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
        },

        tabBarActiveTintColor: "#2b65e0",
        tabBarInactiveTintColor: "black",
        }}
    >
      {/* Marketplace */}
        <Tabs.Screen
        name="storefront"
        options={{
            tabBarIcon: ({ color, size, focused }) => (
            <View
                style={{
                width: 50,
                padding: 5,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <MaterialCommunityIcons
                name="storefront-outline"
                size={28}
                color={color}
                />
            </View>
            ),
        }}
        />

      {/* Group */}
        <Tabs.Screen
        name="group"
        options={{
            tabBarIcon: ({ color, size, focused }) => (
            <View
                style={{
                width: 50,
                padding: 5,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <MaterialCommunityIcons
                name="account-group-outline"
                size={28}
                color={color}
                />
            </View>
            ),
        }}
        />

      {/* Profile */}
        <Tabs.Screen
        name="profile"
        options={{
            tabBarIcon: ({ focused }) => (
            <View
                style={{
                width: 50,
                padding: 5,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Image
                source={require("../../../assets/images/profilepic.jpg")}
                style={{
                    width: 28,
                    height: 28,
                    borderRadius: 50,
                    borderWidth: 0.5,
                    borderColor: "rgba(187, 180, 162, 0.75)",
                }}
                />
            </View>
            ),
        }}
        />
    </Tabs>
    );
}
