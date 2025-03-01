import { StyleSheet, View } from "react-native";
import Cam from "./src/components/Cam";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Cam />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
