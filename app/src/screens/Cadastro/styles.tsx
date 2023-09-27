import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
   inputValue: {
    fontSize: 14,
    width: '60%',
    color: 'purple',
    marginBottom: 20
  },
  text: {
    color: "purple",
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 35,
    fontWeight: 'bold'

  },
  input: {
    width: '60%',
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#dedede",
    padding: 10,
    color: "#363636",
    fontWeight: "200"
  },
  btn: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 5,
    fontSize: 13,
    margin: 10,
    marginBottom: 20,

  },
  btnTxt: {
    fontFamily: "Arial",
    color: "white",
    fontWeight: "600",
  },
  textInput: {
    fontSize: 16,
    width: '60%',
    fontWeight: '500',
    marginTop: 20,
  },
})

export default styles;