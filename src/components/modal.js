import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function Modal(props) {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const [data, setData] = useState(props?.route?.params?.data);
  const navigation = useNavigation();
  console.log(data);

  if (fontsLoaded && data) {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: "6.1%",
            zIndex: 99,
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12,
            paddingHorizontal: 8,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="chevron-left" size={40} color="#333" />
          </TouchableOpacity>
          <Feather name="shopping-bag" size={24} color="#333" />
        </View>
        <Image
          style={styles.image}
          source={{ uri: `${data?.image ? data.image : data.thumbnail}` }}
        />
        <View style={styles.bottomContainer}>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 20,
              width: "70%",
              color: "#333",
            }}
          >
            {data?.title}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 20,
              color: "#929292",
              marginTop: 4,
            }}
          >
            ${data?.price}
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
                color: "#929292",
                marginTop: 10,
                height: 100,
              }}
            >
              {data?.description}
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  bottomContainer: {
    position: "absolute",
    height: "40%",
    zIndex: 99,
    width: "100%",
    bottom: 0,
    backgroundColor: "#EEE",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    paddingHorizontal: "10%",
    paddingVertical: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.75,
    shadowRadius: 9,

    elevation: 24,
  },
  image: {
    width: "100%",
    top: "8%",
    height: "50%",
    resizeMode: "contain",
  },
});
