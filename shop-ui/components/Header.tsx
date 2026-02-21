import { COLORS } from "@/constants";
import { HeaderProps } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
const Header = ({
  title,
  showBack,
  showSearch,
  showMenu,
  showLogo,
  showCart,
}: HeaderProps) => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between bg-white px-4 py-3">
      {/* left */}
      <View className="flex-1 flex-row items-center">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showMenu && (
          <TouchableOpacity className="mr-4">
            <Ionicons name="menu" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showLogo ? (
          <View className="flex-1">
            <Image
              source={require("@/../assets/logo.png")}
              style={{ width: "100%", height: 25 }}
              resizeMode="contain"
            />
          </View>
        ) : (
          title && (
            <Text className="text-xl font-bold text-primary text-center flex-1 mr-8">
              {title}
            </Text>
          )
        )}
      </View>

      {/* right */}
      <View></View>
    </View>
  );
};

export default Header;
