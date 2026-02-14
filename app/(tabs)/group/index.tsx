import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Octicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";



//RISHABH
export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      {/* Header */}
      <View style={styles.headline}>
        <View>
          <Feather name="menu" size={30} color="black" />
        </View>
        <Text style={styles.groupText}>Groups</Text>
        <View style={styles.iconGap}>
          <FontAwesome6 name="facebook-messenger" size={24} color="black" />
          <Ionicons name="person-outline" size={24} color="black" />
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
      </View>
      
  {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tabItem, styles.tabItemSelected]}>For you</Text>
        <Text style={styles.tabItem}>Your groups</Text>
        <Text style={styles.tabItem}>Jump back in</Text>
        <Text style={styles.tabItem}>Posts</Text>
      </View>
      <View style={{borderBottomWidth: 0.2, borderColor: "rgba(0, 0, 0, 0.2)"}}> </View>

      {/* Section Head */}
      <View style={styles.sectionHead}>
        <Text style={styles.group}>Your groups</Text>
        <Text style={styles.see}>See all</Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.groupContainer}>
          <Image
            style={styles.groupIcon}
            source={require("../../../assets/images/yycplant.jpg")}
            contentFit="cover"/>
            <View style={{flexDirection: "column"}}>
              <Text style={styles.groupTitle}> YYC Planty community 🌱 buy/trade/sell {"\n"} 🌱</Text>
              <View style={{flexDirection: "row"}}>
                <View>
                  <Octicons name="dot-fill" size={17} color="#2b65e0" style={{marginTop: 3}}/>
                </View>
                <Text style={styles.post}> 5 new posts</Text>
              </View>
            </View>
            <View style={styles.pinIcon}>
            <Octicons
              name="pin"
              size={20}
              color="#7e7e7e"/>
            </View>
          </View>

        <View style={styles.groupContainer}>
          <Image
            style={styles.groupIcon}
            source={require("../../../assets/images/internationalpfp.jpg")}
            contentFit="cover"/>
            <View style={{flexDirection: "column"}}>
              <Text style={styles.groupTitle}> International Sansevieria Society</Text>
            <View style={{flexDirection: "row"}}>
              <View>
                <Octicons name="dot-fill" size={17} color="#2b65e0" style={{marginTop: 3}}/>
              </View>
              <Text style={styles.post}> 6 new posts</Text>
            </View>
          </View>
          <View style={styles.pinIcon}>
            <Octicons
              name="pin"
              size={20}
              color="#7e7e7e"/>
          </View>
        </View>


        <View style={styles.groupContainer}>
          <Image
            style={styles.groupIcon}
            source={require("../../../assets/images/sagehill.jpg")}
            contentFit="cover"/>
            <View style={{flexDirection: "column"}}>
              <Text style={styles.groupTitle}> Sage Hill Chat</Text>
              <View style={{flexDirection: "row"}}>
                <View>
                  <Octicons name="dot-fill" size={17} color="#2b65e0" style={{marginTop: 3}}/>
                </View>
                <Text style={styles.post}> 18 new posts</Text>
              </View>
            </View>
            <View style={styles.pinIcon}>
              <Octicons
                name="pin"
                size={20}
                color="#7e7e7e"
              />
            </View>
          </View>
        </View>

      <View style={{borderBottomWidth: 0.8, borderColor: "rgba(0, 0, 0, 0.7)", marginVertical: 10}}> </View>

      {/* Section Head */}
      <View >
        <Text style={[styles.group, {paddingHorizontal: 13, marginBottom: 25}]}>From your groups</Text>
      </View> 

      {/* Section*/}
      <View style={styles.groupContainer}>
        <Image
          style={styles.imageIcon}
          source={require("../../../assets/images/internationalpfp.jpg")}
          contentFit="cover"/>
        <Image
          style={styles.profile}
          source={require("../../../assets/images/dogprofile.jpg")}
          contentFit="cover"/>
        <View style={{flexDirection: "column"}}>
          <Text style={styles.groupName}>International Sansevieria Society</Text>

          <View style={{flexDirection: "row", alignItems: "center", gap: 4}}>
            <Text style={[styles.profileName, {fontWeight: "600"}]}>Geoff Stein</Text>
            <Text style={[styles.profileName, {fontWeight: "400"}]}>• 3d •</Text>
            <FontAwesome5 name="user-friends" size={11} color="rgba(0,0,0,0.5)" />
          </View>
        </View>

      <View style={styles.twoIcons}>
        <Entypo name="dots-three-horizontal" size={20} color="rgba(0, 0, 0, 0.6)" style={{marginTop: 2}} />
        <Feather name="x" size={26} color="rgba(0, 0, 0, 0.6)" />
      </View>
    </View>
      <View>
        <Text style={styles.contentHeader}>Two recent acquisitions but no ID... anyone know? </Text>
      </View>
      <View style={{flexDirection: "row", gap: 4}}>
        <Image
              style={styles.contentImage}
              source={require("../../../assets/images/snakeplant1.jpg")}
              contentFit="cover"/>
        <Image
              style={styles.contentImage}
              source={require("../../../assets/images/snakeplant2.jpg")}
              contentFit="cover"/>
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
        pointerEvents="none"/>
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
    marginBottom: 15,
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

   //--------------------------tag tabs
  tabs: {
    flexDirection: "row",
    gap: 7,
    marginLeft: 13,
    borderRadius: 3,
    paddingBottom: 10,
  },

  tabItem: {
    paddingVertical: 9,
    paddingHorizontal: 12.5,
    fontWeight: "600",
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
    marginTop: 10,
    marginBottom: 20,
  },

  group: {
    fontSize: 17,
    fontWeight: "700",
  },

  see: {
    fontSize: 15,
    color: "#2b65e0",
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

  profile: {
    width: 26,
    height: 26,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "rgb(255, 255, 255)",
    position: "absolute",
    left: 30,
    top: 12,
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

  twoIcons: {
    flexDirection: "row",
    marginLeft: 30,
    gap: 25, 
  },

    contentHeader: {
      marginLeft: 13,
      marginTop: 8,
      fontSize: 18,
      fontWeight: "600",
      marginBottom: 10,
      lineHeight: 25,
    },

    contentImage: {
    flex: 1,
    aspectRatio: 0.5,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 0.5,

    }
});