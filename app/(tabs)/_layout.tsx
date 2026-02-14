import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function TabLayout() {
    
    return (
    <Tabs
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
            position: "absolute",
            left: 5,
            right: 5,
            bottom: 22,
            height: 50,
            backgroundColor: "white",
            borderRadius: 40,
            paddingTop: 4,
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
        {/* Home */}
        <Tabs.Screen
        name="home/index"
        options={{
            tabBarIcon: ({ color, focused }) => (
            <View
                style={{
                width: 55,
                height: 40,
                marginTop: 3,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Feather name="home" size={28} color={color} />
            </View>
            ),
        }}
        />

        {/* Reels */}
        <Tabs.Screen
        name="reels/index"
        options={{
            tabBarIcon: ({ color, focused }) => (
            <View
                style={{
                width: 55,
                height: 40,
                marginTop: 3,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <FontAwesome
            style={{ alignItems: "center" }}
            name="film"
            size={22}
            color={color}/>
            </View>
            ),
        }}
        />

      {/* Marketplace */}
        <Tabs.Screen
        name="marketplace"
        options={{
            tabBarIcon: ({ color, focused }) => (
            <View
                style={{
                width: 55,
                height: 40,
                marginTop: 3,
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
        name="group/index"
        options={{
            tabBarIcon: ({ color, focused }) => (
            <View
                style={{
                width: 55,
                height: 40,
                marginTop: 3,
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

        {/* Notification */}
        <Tabs.Screen
        name="notification/index"
        options={{
            tabBarIcon: ({ color, focused }) => (
            <View
                style={{
                width: 55,
                height: 40,
                marginTop: 3,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Ionicons name="notifications-outline" size={28} color={color} />
            </View>
            ),
        }}
        />

      {/* Profile */}
        <Tabs.Screen
        name="profile/index"
        options={{
            tabBarIcon: ({ color, focused }) => (
            <View
                style={{
                width: 55,
                height: 40,
                marginTop: 3,
                backgroundColor: focused
                    ? "rgba(183, 212, 238, 0.4)"
                    : "transparent",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Feather name="circle" size={30} color={color} style={{position: "absolute", zIndex: 5}} />
                <Image
                source={require("../../assets/images/profilepic.jpg")}
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
