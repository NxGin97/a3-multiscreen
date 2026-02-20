import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

// Debug log
console.log("MARKETPLACE LOADED");
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.headline}>
        <Feather name="menu" size={30} color="black" />
        <Text style={styles.marketplaceText}>Marketplace</Text>
        <View style={styles.iconGap}>
          <FontAwesome6 name="facebook-messenger" size={24} color="black" />
          <Ionicons name="person-outline" size={24} color="black" />
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Pressable onPress={() => router.push("/(tabs)/marketplace/sell")}>
          <Text style={styles.tabItem}>Sell</Text>
        </Pressable>
        <Text style={[styles.tabItem, styles.tabItemSelected]}>For you</Text>
        <Text style={styles.tabItem}>Local</Text>
        <Text style={styles.tabItem}>Categories</Text>
      </View>

      {/* Section Head */}
      <View style={styles.sectionHead}>
        <Text style={styles.today}>Today&apos;s picks</Text>
        <View style={styles.location}>
          <FontAwesome6 name="location-dot" size={15} color="#2459ca" />
          <Text style={styles.calgary}>Calgary, AB</Text>
        </View>
      </View>

      {/*Grid Images*/}
      <View style={styles.gridContainer}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/chairs.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just listed</Text>
          <Text style={[styles.description, styles.descriptionLeft]}>
            Free
            <Text style={styles.dot}> • </Text>
            Bar stools
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/sweater.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just listed</Text>
          <Text style={styles.description}>
            $1
            <Text style={styles.dot}> • </Text>
            Closet Cleanout
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/socks.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just listed</Text>
          <View style={styles.descContainer}>
            <Text style={[styles.description, styles.descriptionLeft]}>
              $10
              <Text style={styles.dot}> • </Text>
              Mens socks $10 pe
            </Text>
            <Text style={styles.eclipse}>...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/plant.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just listed</Text>
          <View style={styles.descContainer}>
            <Text style={styles.description}>
              $10
              <Text style={styles.dot}> • </Text>
              Tropical Plants in W{" "}
            </Text>
            <Text style={styles.eclipse}>...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/blanket.jpg")}
            contentFit="cover"
          />
          <View style={styles.descContainer}>
            <Text style={[styles.description, styles.descriptionLeft]}>
              {" "}
              $25
              <Text style={styles.strike}>$30</Text>
              <Text style={styles.dot}> • </Text>
              Oversized plu
            </Text>
            <Text style={styles.eclipse}>...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/pinksweater.jpg")}
            contentFit="cover"
          />
          <Text style={styles.description}>
            $10
            <Text style={styles.dot}> • </Text>
            woman knit
          </Text>
        </View>
      </View>

      <View>
        <LinearGradient
          colors={["transparent", "rgba(255, 255, 255, 0.9)"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
          }}
          pointerEvents="none"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  //--------------------------------header
  headline: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
    marginLeft: 10,
    marginBottom: 12,
  },
  iconGap: {
    flexDirection: "row",
    gap: 15,
  },
  marketplaceText: {
    fontWeight: 700,
    fontSize: 30,
    marginRight: 45,
  },

  //--------------------------tag tabs
  tabs: {
    flexDirection: "row",
    gap: 5,
    marginLeft: 13,
    borderRadius: 3,
  },
  tabItem: {
    paddingVertical: 9,
    paddingHorizontal: 11.5,
    fontWeight: 600,
    fontSize: 15,
  },
  tabItemSelected: {
    backgroundColor: "rgba(183, 212, 238, 0.4)",
    color: "#2b65e0",
    borderRadius: 18,
  },

  //-----------------------------that tiny spot right underneath the tabs
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 13,
    marginTop: 15,
    marginBottom: 8,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  today: {
    fontSize: 17,
    fontWeight: 700,
  },

  calgary: {
    fontSize: 15,
    color: "#2b65e0",
  },

  //---------------------------------grid + cards
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "49.5%",
  },

  listed: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    top: 12,
    left: 10,
    fontSize: 12,
    fontWeight: 400,
    paddingTop: 1,
    paddingBottom: 2,
    paddingHorizontal: 4,
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    borderColor: "rgba(168, 164, 155, 0.5)",
    borderWidth: 0.5,
  },

  //--------------------------description styling
  descContainer: {
    flexDirection: "row",
  },

  description: {
    marginVertical: 9,
    fontSize: 15,
    fontWeight: 500,
  },
  dot: {
    fontSize: 11,
  },

  descriptionLeft: {
    marginLeft: 12,
  },

  strike: {
    textDecorationLine: "line-through",
    color: "#747373",
  },

  eclipse: {
    marginTop: 9,
    fontSize: 14,
    fontWeight: 700,
  },
});
