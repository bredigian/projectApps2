import { StyleSheet } from "react-native"
import colors from "../../constants/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  gameTitle: {
    fontSize: 20,
    color: colors.black,
    fontFamily: "RalewayRegular",
  },
  gameNumber: {
    marginVertical: 30,
    fontSize: 25,
    color: colors.secundary,
    backgroundColor: colors.primary,
    padding: 10,
    width: 60,
    height: 60,
    textAlign: "center",
    fontFamily: "RalewayBold",
  },
})
