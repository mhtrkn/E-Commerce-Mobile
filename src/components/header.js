import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = ({ add }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Feather name="shopping-bag" size={24} color="#333" />
        {add && (
          <View style={styles.count}>
            <Text style={{ color: "#333" }}>1</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#828282",
  },
  count: {
    position: "absolute",
    right: -10,
    top: -10,
    backgroundColor: "#F8D9E0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: "50%",
  },
});
