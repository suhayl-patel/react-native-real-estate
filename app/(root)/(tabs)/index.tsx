import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-rubik text-3xl">Welcome to NACCS</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/(root)/(tabs)/explore">Explore</Link>
      <Link href="/(root)/(tabs)/profile">Profile</Link>
      <Link href="/(root)/properties/1">Property</Link>
    </View>
  );
}
