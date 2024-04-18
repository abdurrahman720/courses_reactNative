import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {Link} from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora! Let's see</Text>

      <StatusBar style="auto" />
      <Link href="/profile" className="text-blue-600">
        Go to profile
      </Link>
    </View>
  );
}

