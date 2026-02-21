import { BANNERS } from "@/assets/assets";
import Header from "@/components/Header";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window");
const Home = () => {
  const router = useRouter();
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar barStyle={"default"} />
      <Header
        title="forver"
        showBack={false}
        showSearch={true}
        showMenu={true}
        showLogo={true}
        showCart={true}
      />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 px-4">
        <View className="mb-6"></View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          className="w-full h-48 rounded-lg overflow-hidden mb-4"
          onScroll={(e) => {
            const slide = Math.ceil(
              e.nativeEvent.contentOffset.x /
                e.nativeEvent.layoutMeasurement.width,
            );
            if (slide !== activeBannerIndex) {
              setActiveBannerIndex(slide);
            }
          }}
        >
          {BANNERS.map((banner, index) => (
            <View
              key={index}
              className="relative w-full h-48 bg-gray-200 overflow-hidden"
              style={{ width: width - 32 }}
            >
              <Image
                source={{ uri: banner.image }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-4 left-4 z-10">
                <Text className="text-white font-bold text-lg">
                  {banner.title}
                </Text>
                <Text className="text-white">{banner.subtitle}</Text>
                <TouchableOpacity className="mt-2 bg-white px-4 py-2 rounded-full self-start">
                  <Text className="text-primary">Get Now</Text>
                </TouchableOpacity>
              </View>
              <View className="absolute inset-0 bg-black/40" />
            </View>
          ))}
        </ScrollView>

        <View className="flex-row justify-center mt-3 gap-2">
          {BANNERS.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full ${index === activeBannerIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"}`}
            />
          ))}
        </View>

        {/* category */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
