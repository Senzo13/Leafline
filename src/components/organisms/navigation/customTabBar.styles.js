import { StyleSheet } from "react-native";

export default StyleSheet.create({
  navDesign: {
    flexDirection: "row",
    position: "absolute",
    bottom: 24,
    left: 16,
    right: 16,
    height: 60,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 8,
  },
});
