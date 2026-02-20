import {
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const items = [
    { iconLib: Feather, icon: "map-pin", text: "Calgary, Alberta" },
    { iconLib: Ionicons, icon: "home-outline", text: "Calgary,Alberta" },
    {
      iconLib: MaterialCommunityIcons,
      icon: "cake-variant-outline",
      text: "January,10",
    },
    { iconLib: SimpleLineIcons, icon: "user-female", text: "Female" },
  ];
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/images/coverphotopfp.jpg")}
          style={styles.coverPhoto}
        />
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Avatar pic */}
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../../assets/images/profilepic.jpg")}
            style={styles.avatar}
          />
        </View>

        {/* Name & bio */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 125,
            alignItems: "center",
            marginTop: -30,
            marginBottom: -15,
          }}
        >
          <Text style={styles.name}>Natalie Ngo</Text>
          <FontAwesome5 name="chevron-circle-down" size={24} color="grey" />
        </View>

        <Text style={{ fontWeight: "500", textAlign: "center" }}>
          55 friends • 825 posts
        </Text>
        <Text style={styles.bio}>✨ okay ✨</Text>

        {/* MISC under bio */}

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <View style={styles.miscBio}>
            <FontAwesome name="map-marker" size={16} color="black" />
            <Text style={styles.miscBioText}>Calgary, Alberta •</Text>
          </View>

          <View style={styles.miscBio}>
            <MaterialIcons name="home-work" size={16} color="black" />
            <Text style={styles.miscBioText}> EB Games •</Text>
          </View>

          <View style={styles.miscBio}>
            <FontAwesome6 name="school-flag" size={16} color="black" />
            <Text style={styles.miscBioText}>
              Captain Nichola Goddard (C.N.G)
            </Text>
          </View>
        </View>

        {/* Add Story + Edit Profile */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.storyButton}>
            <Text style={styles.storyButtonText}>+ Add To Story</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.editButton}>
            <MaterialCommunityIcons name="pencil" size={20} color="black" />
            <Text style={styles.editButtonText}> Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Profile tabs */}
        <View style={styles.tabs}>
          <Text style={[styles.tabItem, styles.tabItemSelected]}>All</Text>
          <Text style={styles.tabItem}>Photos</Text>
          <Text style={styles.tabItem}>Reels</Text>
        </View>

        {/* Personal Details */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginTop: 8,
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "left",
            }}
          >
            Personal Details
          </Text>
          <Octicons name="pencil" size={18} color="grey" />
        </View>

        <View style={styles.info}>
          <View>
            {items.map((item, index) => {
              const IconComponent = item.iconLib;
              return (
                <View key={index} style={styles.infoRow}>
                  <IconComponent
                    name={item.icon as any}
                    size={18}
                    color={"#555"}
                  />
                  <Text style={styles.infoText}>{item.text}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
            Work
          </Text>
          <Octicons name="pencil" size={18} color="grey" />
          <Text>EB Games</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },

  coverPhoto: {
    width: "100%",
    height: 300,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    marginTop: -5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  avatarContainer: {
    marginTop: -50,
    alignItems: "flex-start",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
  },
  name: {
    marginTop: -50,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  bio: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 12,
  },

  miscBio: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  miscBioText: { marginLeft: 6, fontWeight: "500" },

  // Personal Detail + icons
  info: {
    marginTop: 10,
    gap: 12,
    flexDirection: "row",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },

  infoText: {
    fontSize: 15,
    fontWeight: "500",
  },

  // From the market place tabs sheet Credit: Natalie NGo
  tabs: {
    flexDirection: "row",
    gap: 5,
    marginLeft: 6,
    borderRadius: 3,
    justifyContent: "flex-start",
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

  // For Buttons
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  storyButton: {
    flex: 1,
    height: 42,
    backgroundColor: "#1877F2",
    borderRadius: 10,
    marginRight: 10,
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
    height: 42,
    backgroundColor: "#E4E6EB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  editButtonText: {
    color: "#050505",
    fontWeight: "600",
    marginLeft: 6,
  },
});
