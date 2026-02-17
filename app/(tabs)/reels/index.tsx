import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//RISHABH
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View>
        <Text> This is reels page</Text>
      </View>
    </SafeAreaView>
  );
}
