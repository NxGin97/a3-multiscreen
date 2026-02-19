import React from "react";
import { ScrollView, StyleSheet , Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import {
  EvilIcons,

  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";

//RISHABH
export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Header Section */}

        <View style={styles.headline}>
          <Link href={"/"} >
          <Feather
            style={styles.iconStyle}
            name="chevron-left"
            size={25}
            color="black"
          />
          </Link>
          <Text style={styles.pageHeading}>Selling</Text>
          <Feather
            style={styles.iconStyle}
            name="plus"
            size={25}
            color="black"
          />
          <Feather
            style={styles.iconStyle}
            name="settings"
            size={25}
            color="black"
          />
        </View>

        {/* Bubble Menu */}

        <View style={styles.tabs}>
          <Text style={styles.tabItem}>Shipping Orders</Text>
          <Text style={styles.tabItem}>Inbox</Text>
          <Text style={styles.tabItem}>Your Listings</Text>
          <Text style={styles.tabItem}>Announcements</Text>
        </View>

        {/* Button Area */}
        <View style={styles.flexRow}>
          <Image
            style={styles.icon}
            source={require("../sell/assets/favicon.png")}
            resizeMode="contain"
          />
          <Button style={styles.buttonStyle} color="#fff">
            + Create Listing
          </Button>
        </View>

        {/* Overview */}
        <View style={styles.flexRow}>
          <Text style={styles.overview}>Overview</Text>
        </View>

        {/* Cards */}
        <View style={styles.gridContainer}>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>0</Text>
              <Ionicons
                style={styles.iconStyle1}
                name="chatbubbles-outline"
                size={25}
              ></Ionicons>
            </View>
            <Text>Chats to Answer</Text>
          </View>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>6</Text>
              <Ionicons
                style={styles.iconStyle1}
                name="pricetag-outline"
                size={25}
              ></Ionicons>
            </View>
            <Text>Active Listings</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>6</Text>
              <Feather
                style={styles.iconStyle1}
                name="video"
                size={25}
              ></Feather>
            </View>
            <Text>Add video to listings</Text>
          </View>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>0</Text>
              <Ionicons
                style={styles.iconStyle1}
                name="chatbubble-ellipses-outline"
                size={25}
              ></Ionicons>
            </View>
            <Text>Unread Comments</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>0</Text>
              <Feather
                style={styles.iconStyle1}
                name="truck"
                size={25}
              ></Feather>
            </View>
            <Text>Orders to ship</Text>
          </View>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>0</Text>
              <Ionicons
                style={styles.iconStyle1}
                name="git-compare-outline"
                size={25}
              ></Ionicons>
            </View>
            <Text>Listings to renew</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          <View style={styles.statsCard}>
            <View style={styles.innerflex}>
              <Text style={styles.cardNumber}>0</Text>
              <Ionicons
                style={styles.iconStyle1}
                name="reload-circle-outline"
                size={25}
              ></Ionicons>
            </View>
            <Text>Listings to delete & relist</Text>
          </View>
        </View>

        {/* Performance */}
        <View style={styles.flexRow}>
          <Text style={styles.overview}>Performance</Text>
        </View>

        {/* Performance Cards */}

        <View style={styles.gridContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.cardNumber}>1,019</Text>
            <Text style={styles.subHeading}>Clicks on listings</Text>
            <Text>Last 7 days</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.cardNumber}>4.9 ★</Text>
            <Text style={styles.subHeading}>Seller Rating</Text>
            <Text>54 Ratings</Text>
          </View>
        </View>
        <View style={styles.gridContainer}>
          <View style={styles.statsCard}>
            <Text style={styles.cardNumber}>0</Text>
            <Text style={styles.subHeading}>New Followers</Text>
            <Text>Last 7 days</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.cardNumber}>0</Text>
            <Text style={styles.subHeading}>3-second video plays</Text>
            <Text>54 Ratings</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navWrapper}>
        <View style={styles.navContainer}>
          <Feather name="home" size={28} color="black" />
          <FontAwesome
            style={{ alignItems: "center" }}
            name="film"
            size={22}
            color="black"
          />
          <View style={styles.navSelected}>
            <MaterialCommunityIcons
              name="storefront-outline"
              size={28}
              color="#2b65e0"
            />
          </View>
          <MaterialCommunityIcons
            name="account-group-outline"
            size={28}
            color="black"
          />
          <Ionicons name="notifications-outline" size={28} color="black" />
          <View>
            <Image
              style={styles.profilePic}
              source={require("../sell/assets/favicon.png")}
              resizeMode="contain"
              ref={require("../profile")}
            />
            <Feather name="circle" size={28} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //--------------------------------header
  headline: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 10,
    marginBottom: 20,
    gap: 10,
    alignContent: "stretch",
  },
  iconStyle: {
    flexGrow: 1,
    verticalAlign: "middle",
  },
  pageHeading: {
    fontWeight: 800,
    fontSize: 18,
    textAlign: "center",
    flexGrow: 15,
  },

  //--------------------------navigation tabs
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
    alignItems: "center",
    backgroundColor: "#2b65e0",
    flexGrow: 6,
    borderRadius: 10,
    marginHorizontal: 20,
  },

  icon: {
    width: 48,
    height: 48,
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 100,
  },

  overview: {
    fontSize: 22,
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
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 10,
    alignContent: "center",
    gap: 10,
  },
  statsCard: {
    width: "49.5%",
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    borderRadius: 8,
    borderWidth: 1,
    flexGrow: 1,
    alignItems: "flex-start",
    verticalAlign: "middle",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  subHeading: {
    color: "#000",
    fontWeight: 600,
  },

  innerflex: {
    flexDirection: "row",
    alignContent: "center",
    gap: 10,
  },

  cardNumber: {
    flexGrow: 1,
    fontSize: 32,
    fontWeight: 700,
    textAlign: "left",
  },

  iconStyle1: {
    flexGrow: 1,
    textAlign: "right",
    verticalAlign: "middle",
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

  // ----------------navigation bar
  navWrapper: {
    position: "absolute",
    bottom: 22,
    left: 12,
    width: "94%",
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(000,000,000, 0.1)",
  },

  navSelected: {
    width: 50,
    padding: 5,
    backgroundColor: "rgba(183, 212, 238, 0.4)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  profilePic: {
    position: "absolute",
    top: 2,
    left: 2,
    width: 24,
    height: 24,
    borderColor: "rgba(187, 180, 162, 0.75)",
    borderWidth: 0.5,
    borderRadius: 50,
  },

  //--------------------------------------- alert button
  // alert: {

  // },
  alert: {
    position: "absolute",
    right: 10,
    bottom: 55,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
    backgroundColor: "rgba(224,003,003,0.95)",
    zIndex: 10,
  },

  alertText: {
    color: "white",
    fontWeight: 700,
    paddingHorizontal: 5,
  },
});
