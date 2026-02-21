import Header from "@/components/Header";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 items-center justify-center"
      edges={["top"]}
    >
      <Header
        title="Home"
        showBack={false}
        showSearch={true}
        showMenu={true}
        showLogo={true}
        showCart={true}
      />
      <ScrollView disableScrollViewPanResponder={true}></ScrollView>
    </SafeAreaView>
  );
};

export default Home;
