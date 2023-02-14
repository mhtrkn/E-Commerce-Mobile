import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={handleGoBack}>
          <Text>Geri</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>Search</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A0046",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  btn: {
    width: "50%",
    height: "5%",
    color: "white",
    backgroundColor: "#800000",
  },
});
