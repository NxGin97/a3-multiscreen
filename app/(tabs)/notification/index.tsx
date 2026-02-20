import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

console.log("NOTIFICATION TAB LOADED");
//RISHABH
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Text> This is notification page</Text>
      </View>
    </SafeAreaView>
  );
}
