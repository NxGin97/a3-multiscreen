import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//RISHABH
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header Section */}
      <View style={styles.headline}>
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Feather
            style={styles.iconStyle}
            name="chevron-left"
            size={26}
            color="black"
          />
        </Pressable>

        <Text style={styles.pageHeading}>Selling</Text>
        <Feather style={styles.iconStyle} name="plus" size={25} color="black" />
        <Feather
          style={styles.iconStyle}
          name="settings"
          size={25}
          color="black"
        />
      </View>

      {/* Bubble Menu */}

      <View style={styles.tabs}>
        <Text style={styles.tabItem}>Shipping orders</Text>
        <Text style={styles.tabItem}>Inbox</Text>
        <Text style={styles.tabItem}>Your listings</Text>
        <Text style={styles.tabItem}>Announcements</Text>
      </View>

      {/* Button Area */}
      <View style={styles.flexRow}>
        <Image
          style={styles.icon}
          source={require("../../../../assets/images/profilepic.jpg")}
          contentFit="cover"
        />
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>
            <Text style={{ fontSize: 24}}>+</Text> Create listing
          </Text>
        </View>
      </View>

      {/* Overview */}
      <View style={styles.flexRow}>
        <Text style={styles.overview}>Overview</Text>
      </View>

      {/* Cards */}
      <View style={styles.gridContainer}>
        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>0</Text>
            <Ionicons name="chatbubbles-outline" size={25}></Ionicons>
          </View>
          <Text style={styles.subHeading}>Chats to answer</Text>
        </View>

        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>6</Text>
            <Ionicons name="pricetag-outline" size={25}></Ionicons>
          </View>
          <Text style={styles.subHeading}>Active listings</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>6</Text>
            <Feather name="video" size={25}></Feather>
          </View>
          <Text style={styles.subHeading}>Add video to listings</Text>
        </View>
        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>0</Text>
            <Ionicons name="chatbubble-ellipses-outline" size={25}></Ionicons>
          </View>
          <Text style={styles.subHeading}>Unread comments</Text>
        </View>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>0</Text>
            <Feather name="truck" size={25}></Feather>
          </View>
          <Text style={styles.subHeading}>Orders to ship</Text>
        </View>

        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>0</Text>
            <Ionicons name="git-compare-outline" size={25}></Ionicons>
          </View>
          <Text style={styles.subHeading}>Listings to renew</Text>
        </View>
      </View>

      <View style={[styles.gridContainer, { width: "47.5%" }]}>
        <View style={styles.statsCard1}>
          <View style={styles.innerflex}>
            <Text style={styles.cardNumber}>0</Text>
            <Octicons name="arrow-switch" size={25}></Octicons>
          </View>
          <Text style={styles.subHeading}>Listings to delete & relist</Text>
        </View>
      </View>

      {/* Performance */}
      <View style={styles.flexRow}>
        <Text style={[styles.overview, { marginTop: 10 }]}>Performance</Text>
      </View>

      {/* Performance Cards */}

      <View style={styles.gridContainer}>
        <View style={styles.statsCard2}>
          <Text style={styles.cardNumber}>1,019</Text>
          <Text style={styles.subHeading}>Clicks on listings</Text>
          <Text style={{ color: "#757575" }}>Last 7 days</Text>
        </View>
        <View style={styles.statsCard2}>
          <Text style={styles.cardNumber}>
            4.9
            <Octicons name="star-fill" size={25}></Octicons>
          </Text>
          <Text style={styles.subHeading}>Seller rating</Text>
          <Text style={{ color: "#757575" }}>54 ratings</Text>
        </View>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.statsCard2}>
          <Text style={styles.cardNumber}>0</Text>
          <Text style={styles.subHeading}>New Followers</Text>
          <Text style={{ color: "#757575" }}>Last 7 days</Text>
        </View>
        <View style={styles.statsCard2}>
          <Text style={styles.cardNumber}>0</Text>
          <Text style={styles.subHeading}>3-second video plays</Text>
          <Text style={{ color: "#757575" }}>Last 7 days</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //--------------------------------header
  headline: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 23,
    gap: 10,
  },

  iconStyle: {
    flexGrow: 1,
    verticalAlign: "middle",
  },
  pageHeading: {
    fontWeight: "700",
    fontSize: 17,
    textAlign: "center",
    flexGrow: 15,
    marginLeft: 42,
  },

  //--------------------------navigation tabs
  tabs: {
    flexDirection: "row",
    gap: 10,
    marginLeft: 13,
    borderRadius: 3,
  },
  tabItem: {
    paddingVertical: 9,
    paddingHorizontal: 11.5,
    fontWeight: "600",
    fontSize: 15,
    backgroundColor: "#D3D3D3",
    borderRadius: 25,
  },
  tabItemSelected: {
    backgroundColor: "rgba(183, 212, 238, 0.4)",
    color: "#2b65e0",
    borderRadius: 18,
  },

  //-----------------------------that tiny spot right underneath the tabs

buttonStyle: {
  backgroundColor: "#185beb",
  width: "85%",
  height: 40,
  borderRadius: 10,
  marginHorizontal: 10,
  justifyContent: "center",
  alignItems: "center",     
},

buttonText: {
  fontSize: 17,
  fontWeight: "500",
  color: "#fff",
  marginBottom: 5,
},

  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },

  overview: {
    fontSize: 21,
    fontWeight: 700,
  },

  flexRow: {
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 10,
    alignContent: "center",
  },

  //---------------------------------grid + cards
  gridContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 2,
    marginHorizontal: 10,
    alignContent: "center",
  },
  statsCard1: {
    flex: 1,
    marginHorizontal: 4,
    borderColor: "#bebebe",
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: 1,
    flexGrow: 1,
    alignItems: "flex-start",
    verticalAlign: "middle",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 16,
  },
  statsCard2: {
    flex: 1,
    marginHorizontal: 4,
    borderColor: "#bebebe",
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: 1,
    flexGrow: 1,
    alignItems: "flex-start",
    verticalAlign: "middle",
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 10,
  },

  subHeading: {
    fontSize: 13,
    color: "#000",
    fontWeight: 600,
  },

  innerflex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  cardNumber: {
    flexGrow: 1,
    fontSize: 28,
    fontWeight: 700,
    textAlign: "left",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    borderColor: "rgba(168, 164, 155, 0.5)",
    borderWidth: 0.5,
  },
});
