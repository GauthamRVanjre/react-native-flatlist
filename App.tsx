import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlatlistDemo from "./components/FlatlistDemo";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatlistDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
