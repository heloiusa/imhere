import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
    }, 
  
  title: {
    color: '#C656F0',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 48
  },
  
  eventDate: {
    color: '#ffffff',
    fontSize: 14,
  },

  input: {
    height: 56,
    backgroundColor: '#6C6070',
    borderRadius: 10,
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
    marginRight: 12,
    paddingLeft: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 24,
  },

  button: {
    backgroundColor: '#C656F0',
    width: 56,
    height: 56,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 18
  },

  nameList: {
    color: '#C656F0',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14
  },
})