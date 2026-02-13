import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

//RISHABH
export default function Index() {
  return (
    <SafeAreaView>
      <View>
      <Text> This is group page</Text>
      <Text style={{ fontSize: 24 }}>Overview</Text>
      </View>
      
    </SafeAreaView>
  );
}
