import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect, Fragment } from "react";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Header from "../../components/header";
import { categories, products, subNodeProducts } from "../../API/api";
import axios from "axios";
import ReadyScreen from "../Ready/ready";
import Shimmer from "../../components/Shimmer";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [data, setData] = useState([]);
  const [subNodes, setSubNodes] = useState([]);
  const [categorys, setCategory] = useState([]);
  const [activeTab, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const navigation = useNavigation();
  const handleActive = (i) => {
    setActive(i);
  };

  useEffect(() => {
    axios
      .get(categories)
      .then((res) => {
        setCategory(res?.data);
        setReady(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(products)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(subNodeProducts)
      .then((res) => {
        setSubNodes(res?.data?.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (ready && fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView
          horizontal={true}
          style={styles.ScrollView}
          showsHorizontalScrollIndicator={false}
        >
          {categorys.map((category, i) => {
            return (
              <Fragment key={i}>
                <TouchableOpacity
                  onPress={() => handleActive(i)}
                  style={activeTab === i ? styles.btn : styles.button}
                >
                  <Text
                    style={{
                      color: "#333",
                      textTransform: "capitalize",
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              </Fragment>
            );
          })}
        </ScrollView>
        <ScrollView
          style={{
            width: "95%",
            paddingHorizontal: 8,
            marginTop: "5%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: "#333333",
                paddingHorizontal: 10,
                fontSize: 18,
              }}
            >
              Fake Store Products
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#333",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  fontSize: 14,
                  textDecorationLine: "underline",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollVertical}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {data &&
              data.slice(0, 11).map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "column",
                      maxWidth: "55%",
                    }}
                    key={index}
                  >
                    <TouchableOpacity
                      key={index}
                      style={styles.card}
                      onPress={() =>
                        navigation.navigate("Modal", { data: item })
                      }
                    >
                      <Image
                        source={{ uri: `${item?.image}` }}
                        style={styles.image}
                      />
                      {index % 2 === 0 && (
                        <View style={styles.sellValue}>
                          <Text
                            style={{
                              fontFamily: "Poppins_400Regular",
                              color: "#EEE",
                              fontSize: 16,
                            }}
                          >
                            -25%
                          </Text>
                        </View>
                      )}
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Poppins_400Regular",
                          color: "#333333",
                          paddingHorizontal: 10,
                          marginTop: 6,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        {item?.category}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Poppins_600SemiBold",
                          color: "#828282",
                          paddingHorizontal: 10,
                          marginTop: 6,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        ${item?.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: "#333333",
                paddingHorizontal: 10,
                fontSize: 18,
              }}
            >
              Dummy Json Products
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  color: "#333",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  fontSize: 14,
                  textDecorationLine: "underline",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollCardVertical}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {subNodes &&
              subNodes.map((node, num) => {
                return (
                  <View
                    style={{
                      flexDirection: "column",
                      maxWidth: "55%",
                    }}
                    key={num}
                  >
                    <TouchableOpacity
                      key={num}
                      style={styles.smallCard}
                      onPress={() =>
                        navigation.navigate("Modal", { data: node })
                      }
                    >
                      <Image
                        source={{ uri: `${node?.thumbnail}` }}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Poppins_600SemiBold",
                          color: "#333333",
                          paddingHorizontal: 10,
                          marginTop: 6,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        {node?.category}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Poppins_600SemiBold",
                          color: "#828282",
                          paddingHorizontal: 10,
                          marginTop: 6,
                          fontSize: 16,
                          textTransform: "capitalize",
                        }}
                      >
                        ${node?.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return <ReadyScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
  },
  ScrollView: {
    width: "90%",
    marginTop: 8,
    maxHeight: "5%",
  },
  scrollVertical: {
    width: "100%",
    paddingVertical: 6,
  },
  scrollCardVertical: {
    width: "100%",
    paddingVertical: 6,
  },
  card: {
    flexDirection: "column",
    width: 180,
    height: 260,
    borderWidth: 0.2,
    borderColor: "#828282",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 8,
  },
  smallCard: {
    flexDirection: "column",
    width: 120,
    height: 160,
    borderWidth: 0.2,
    borderColor: "#828282",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 8,
  },
  sellValue: {
    position: "absolute",
    right: 8,
    top: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: "#828282",
    backgroundColor: "#800000",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
  btn: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8D9E0",
    borderRadius: 30,
    marginHorizontal: 3,
  },
  button: {
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 12,
    marginHorizontal: 3,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  text: {
    fontSize: 25,
  },
});
