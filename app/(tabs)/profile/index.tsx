import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const items = [
    { iconLib: Feather, icon: "map-pin", text: "Calgary, Alberta" },
    { iconLib: Ionicons, icon: "home-outline", text: "Calgary, Alberta" },
    {
      iconLib: MaterialCommunityIcons,
      icon: "cake-variant-outline",
      text: "January 10",
    },
    {
      iconLib: MaterialCommunityIcons,
      icon: "circle-multiple-outline",
      text: "Female",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../../assets/images/coverphotopfp.jpg")}
        style={styles.coverPhoto}
      />
      <View style={styles.header}>
        <View>
          <Feather name="menu" size={24} color="white" />
        </View>
        <View style={styles.iconGap}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={26}
            color="white"
          />
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={26}
            color="white"
          />
          <Ionicons name="search-outline" size={26} color="white" />
        </View>
        <FontAwesome
          name="camera"
          size={24}
          color="white"
          style={styles.cameraIcon}
        />
      </View>
      <SafeAreaView style={styles.container}>
        {/* Card */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.cameraContainer}>
            <FontAwesome
              name="camera"
              size={15}
              color="black"
              style={styles.profile}
            />
          </View>
          <View style={styles.profilePic}>
            <Image
              source={require("../../../assets/images/profilepic.jpg")}
              style={styles.avatar}
            />
            <Text style={styles.userName}>Natalie Ngo</Text>

            <View style={styles.textContainer}>
              <Text style={[styles.normalText, { marginLeft: 14 }]}>
                55
                <Text style={styles.lightText}> friends </Text> •
              </Text>
              <Text style={styles.normalText}>
                {" "}
                825
                <Text style={styles.lightText}> posts </Text>
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <FontAwesome5
                name="chevron-down"
                size={18}
                color="black"
                style={styles.arrowIcon}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 16 }}>
          {/* MISC under bio */}
          <Text style={styles.bio}>✨ okay ✨</Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.miscBio}>
              <FontAwesome name="map-marker" size={16} color="black" />
              <Text style={styles.miscBioText}>Calgary, AB •</Text>
            </View>

            <View style={styles.miscBio}>
              <MaterialIcons name="home-work" size={16} color="black" />
              <Text style={styles.miscBioText}> EB Games •</Text>
            </View>

            <View style={styles.miscBio}>
              <FontAwesome6 name="school-flag" size={16} color="black" />
              <Text style={styles.miscBioText}>Captain Nichola </Text>
            </View>
          </View>

          <View style={styles.miscBio}>
            <Text style={[styles.miscBioText, { marginLeft: -2 }]}>Goddard (C.N.G)</Text>
          </View>

          {/* The three profile pictures */}
          <View style={styles.friendsContainer}>
            <Image
              source={require("../../../assets/images/pfp1.jpg")}
              style={[styles.pfp, styles.pfp1]}
            />
            <Image
              source={require("../../../assets/images/pfp2.jpg")}
              style={[styles.pfp, styles.pfp2]}
            />
            <Entypo
              name="dots-three-horizontal"
              size={15}
              color="white"
              style={styles.pfp3}
            />
            <View style={styles.pfpCover} />
            <Image
              source={require("../../../assets/images/pfp3.jpg")}
              style={[styles.pfp, styles.pfp4]}
            />
            <Text style={styles.friendsText}>
              {" "}
              Friends with things in common{" "}
            </Text>
          </View>

          {/* Add Story + Edit Profile */}
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.storyButton}>
              <Text style={styles.storyButtonText}> + Add to Story</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editButton}>
              <MaterialCommunityIcons name="pencil" size={20} color="black" />
              <Text style={styles.editButtonText}> Edit profile</Text>
            </TouchableOpacity>
          </View>

          {/* Profile tabs */}
          <View style={styles.tabs}>
            <Text style={[styles.tabItem, styles.tabItemSelected]}>All</Text>
            <Text style={styles.tabItem}>Photos</Text>
            <Text style={styles.tabItem}>Reels</Text>
          </View>

          {/* Personal Details */}
          <View style={styles.headline}>
            <Text style={styles.headlineText}>Personal details</Text>
            <Octicons
              name="pencil"
              size={18}
              color="grey"
              style={{ marginTop: 20 }}
            />
          </View>

          <View>
            <View>
              {items.map((item, index) => {
                const IconComponent = item.iconLib;
                return (
                  <View key={index} style={styles.infoRow}>
                    <IconComponent
                      name={item.icon as any}
                      size={22}
                      color={"#555"}
                      style={{ marginLeft: 4 }}
                    />
                    <Text
                      style={[
                        styles.infoText,
                        item.text === "Female" && { fontWeight: "400" },
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={styles.headline}>
            <Text style={styles.headlineText}>Work</Text>
            <Octicons
              name="pencil"
              size={18}
              color="grey"
              style={{ marginTop: 20 }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.gamesIcon}>
              <MaterialIcons
                name="home-work"
                size={23}
                color="#707070"
                style={{ marginTop: 8, marginLeft: 8 }}
              />
            </View>
            <Text style={styles.workText}>EB Games</Text>
          </View>

          <View style={styles.headline}>
            <Text style={styles.headlineText}>Education</Text>
            <Octicons
              name="pencil"
              size={18}
              color="grey"
              style={{ marginTop: 20 }}
            />
          </View>
        </View>
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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  //--------------------------------header
  header: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
    zIndex: 100,
  },
  iconGap: {
    flexDirection: "row",
    gap: 15,
  },
  groupText: {
    fontWeight: "700",
    fontSize: 30,
    marginRight: 113,
  },
  profilePic: {
    height: 110,
    backgroundColor: "#f2f2f2",
    width: "100%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    zIndex: 1,
    alignItems: "center",
    marginVertical: -60,
  },
  coverPhoto: {
    width: "100%",
    height: "19%",
  },
  userName: {
    fontWeight: "700",
    fontSize: 21,
    marginTop: 15,
    marginBottom: 10,
    marginRight: 29,
  },

  textContainer: {
    flexDirection: "row",
    marginRight: 10,
  },

  lightText: {
    fontWeight: "400",
    color: "#6e6e6e",
  },

  normalText: {
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },
  headline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headlineText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
  },

  profile: {
    width: 17,
    height: 17,
    position: "absolute",
    left: 6,
    top: 6,
  },

  friendsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    marginBottom: 15,
  },
  pfp: {
    marginVertical: 6,
    width: 36,
    height: 36,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
  },

  pfp1: {
    zIndex: 3,
  },

  pfp2: {
    position: "absolute",
    zIndex: 3,
    left: 30,
  },

  pfp3: {
    position: "absolute",
    left: 70,
    top: 16,
    zIndex: 10,
  },

  pfp4: {
    position: "absolute",
    zIndex: 1,
    left: 60,
  },

  pfpCover: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(8, 8, 8, 0.7)",
    opacity: 0.5,
    borderRadius: 100,
    zIndex: 2,
    position: "absolute",
    left: 60,
  },

  friendsText: {
    marginLeft: 60,
    color: "#666666",
    fontSize: 13,
    fontWeight: "500",
  },

  gamesIcon: {
    backgroundColor: "#d3d3d3",
    width: 40,
    height: 40,
    borderRadius: 10,
    marginTop: 17,
  },

  workText: {
    marginTop: 15,
    marginLeft: 12,
    fontWeight: "500",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "white",
    position: "absolute",
    bottom: 20,
    left: 10,
    zIndex: 2,
  },
  name: {
    marginTop: -60,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  bio: {
    marginTop: 30,
    fontSize: 16,
    zIndex: 2,
  },

  miscBio: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 3,
  },

  miscBioText: {
    marginLeft: 7,
    fontWeight: "600",
    fontSize: 13,
  },

  arrowContainer: {
    backgroundColor: "#d6d6d6",
    borderRadius: 100,
    width: 35,
    height: 35,
    zIndex: 4,
    position: "absolute",
    right: 20,
    top: 15,
  },

  arrowIcon: {
    position: "absolute",
    top: 9,
    left: 10,
    zIndex: 4,
  },
  // Personal Detail + icons
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    marginVertical: 2,
  },

  infoText: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 20,
  },
  cameraIcon: {
    position: "absolute",
    top: 60,
    left: 350,
    zIndex: 1000,
  },
  cameraContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "rgb(255, 255, 255)",
    backgroundColor: "#cacaca",
    zIndex: 16,
    position: "absolute",
    top: -10,
    left: 80,
  },

  // From the market place tabs sheet Credit: Natalie NGo
  tabs: {
    flexDirection: "row",
    gap: 10,
    borderRadius: 3,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  tabItem: {
    paddingVertical: 9,
    paddingHorizontal: 13.5,
    fontWeight: 600,
    fontSize: 15,
  },
  tabItemSelected: {
    backgroundColor: "rgba(183, 212, 238, 0.4)",
    color: "#2b65e0",
    borderRadius: 18,
  },

  // For Buttons
  buttonRow: {
    flexDirection: "row",
  },
  storyButton: {
    flex: 1,
    marginHorizontal: 3,
    height: 35,
    backgroundColor: "#185beb",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  storyButtonText: {
    color: "#f2f2f2",
    fontWeight: "600",
  },
  editButton: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 3,
    height: 35,
    backgroundColor: "#c9c9c9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  editButtonText: {
    color: "#050505",
    fontWeight: "600",
    marginLeft: 6,
  },

  //---------------grouping style

  sectionContainer: {
    flexDirection: "column",
    gap: 15,
  },

  groupContainer: {
    flexDirection: "row",
    gap: 10,
  },

  groupIcon: {
    width: "10.5%",
    aspectRatio: 1,
    borderColor: "rgba(133, 133, 133, 0.5)",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 13,
  },

  imageIcon: {
    width: "9.5%",
    aspectRatio: 1,
    borderColor: "rgba(133, 133, 133, 0.8)",
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 13,
    marginRight: 1,
  },

  pinIcon: {
    marginLeft: "auto",
    marginRight: 13,
    marginTop: 10,
  },

  groupTitle: {
    fontWeight: "500",
    fontSize: 14,
  },

  post: {
    color: "#4e4e4e",
    fontSize: 12,
    marginTop: 4,
  },

  groupName: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 2,
  },

  profileName: {
    fontSize: 12,
    lineHeight: 22,
    color: "rgba(0, 0, 0, 0.7)",
  },
});
