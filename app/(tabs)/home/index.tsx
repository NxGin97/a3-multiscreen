import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

console.log("HOME TAB LOADED");
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Text> This is home page</Text>
      </View>
    </SafeAreaView>
  );
}
