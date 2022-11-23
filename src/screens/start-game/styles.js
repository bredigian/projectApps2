import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    fontSize: 25,
    color: "black",
    paddingVertical: 20,
    fontFamily: "RalewayRegular",
  },
  label: {
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
    fontFamily: "RalewayBold",
  },
  inputContainer: {
    width: "80%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 20,
  },
  input: {
    minWidth: 70,
    textAlign: "center",
    fontSize: 25,
    color: colors.black,
    paddingVertical: 10,
    fontFamily: "RalewayRegular",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  confirmedOutput: {
    width: "80%",
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 20,
  },
  confirmedTitle: {
    fontSize: 18,
    color: colors.black,
    paddingVertical: 10,
    fontFamily: "RalewayRegular",
  },
  confirmedNumber: {
    fontSize: 30,
    color: colors.black,
    paddingVertical: 20,
    fontFamily: "RalewayBold",
  },
})
