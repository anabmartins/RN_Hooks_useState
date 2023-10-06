import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
   inputValue: {
    fontSize: 14,
    width: '60%',
    color: '#aaaaaa',
    marginBottom: 20
  },
  text: {
    color: "#FFFF",
    fontSize: 25,
    paddingTop: "20%",
    paddingBottom: "10%",
    fontWeight: 'bold'

  },
  input: {
    color: "white",
    fontSize: 15,
    width: "60%",
    padding: 9,
    backgroundColor: "#200069",
    borderRadius: 5,
    marginBottom: 2
  },
  btn: {
    color:"white",
    marginTop: 10,
    padding: 15,    
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#4815be",

  },
  btnTxt: {
    fontFamily: "Arial",
    color: "white",
  },
  textInput: {
    fontSize: 16,
    width: '60%',
    marginBottom: 5,
    color: "#dfdfdf"
  },
})

export default styles;