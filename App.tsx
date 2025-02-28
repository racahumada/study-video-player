import { StyleSheet, View } from "react-native";
import Cam from "./src/components/Cam";

export default function App() {
  return (
    <View style={styles.container}>
      <Cam />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
