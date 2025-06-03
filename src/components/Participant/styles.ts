import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#6C6070",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 10,
    marginBottom: 12,
  },

  name: {
    color: "#ffffff",
    fontSize: 16,
    flex: 1, 
    paddingLeft: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },

  button: {
    backgroundColor: "#E23C44",
    width: 56,
    height: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
