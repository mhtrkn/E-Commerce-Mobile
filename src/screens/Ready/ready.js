import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import Shimmer from "../../components/Shimmer";

export default function ReadyScreen() {
  return (
    <SafeAreaView style={styles.outsideContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Shimmer width={40} height={40} borderRadius={40} />
          <Shimmer width={30} height={30} borderRadius={10} />
        </View>
        <View style={styles.headerContainer}>
          <Shimmer width={100} height={36} borderRadius={20} />
          <Shimmer width={100} height={36} borderRadius={20} />
          <Shimmer width={100} height={36} borderRadius={20} />
        </View>

        <View style={styles.cardContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginRight: 20 }}>
              <Shimmer width={180} height={260} borderRadius={12} />
            </View>
            <View style={{ marginRight: 20 }}>
              <Shimmer width={180} height={260} borderRadius={12} />
            </View>
            <View style={{ marginRight: 20 }}>
              <Shimmer width={180} height={260} borderRadius={12} />
            </View>
            <View>
              <Shimmer width={180} height={260} borderRadius={12} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.cardContainer}>
          <Shimmer width={160} height={40} borderRadius={12} />
        </View>

        <View style={styles.cardContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginRight: 12 }}>
              <Shimmer width={120} height={160} borderRadius={12} />
            </View>
            <View style={{ marginRight: 12 }}>
              <Shimmer width={120} height={160} borderRadius={12} />
            </View>
            <View style={{ marginRight: 12 }}>
              <Shimmer width={120} height={160} borderRadius={12} />
            </View>
            <View>
              <Shimmer width={120} height={160} borderRadius={12} />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "88%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    width: "100%",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    width: "100%",
    marginTop: "3%",
  },
});
