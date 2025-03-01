import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  bottomBar: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: "#00000099",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: "#33333399",
  },
  buttonHide: {
    width: 45,
    height: 45,
  },
});
