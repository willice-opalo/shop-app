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
  const { itemCount } = { itemCount: 3 }; // Replace with actual cart item count from your state management};
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
              source={require("../assets/logo.png")}
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

        {(!title || !showSearch) && <View className="flex-1" />}
      </View>

      {/* right */}
      <View className="flex-row items-center gap-4">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity onPress={() => router.push("/(tabs)/cart")}>
            <View className="relative">
              <Ionicons name="cart-outline" size={24} color={COLORS.primary} />
              <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs">{itemCount}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
