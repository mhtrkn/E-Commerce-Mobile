import React, { useEffect, useRef } from "react";
import { View, Text, Image } from "react-native";
import LottieView from "lottie-react-native";

function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LottieView
        autoPlay
        source={require("./assets/splash.json")}
        loop={false}
      />
    </View>
  );
}

export default SplashScreen;
