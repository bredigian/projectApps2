import { ActivityIndicator, StyleSheet, View } from "react-native"
import { Game, StartGame } from "./screens"

import { Header } from "./components"
import colors from "./constants/colors"
import { useFonts } from "expo-font"
import { useState } from "react"

export default function App() {
  const [loaded] = useFonts({
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
    RalewayItalic: require("../assets/fonts/Raleway-Italic.ttf"),
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
  })

  const [userNumber, setUserNumber] = useState(null)

  const onHandleStarGame = (numberSelected) => {
    setUserNumber(numberSelected)
  }

  const onHandleReset = () => {
    setUserNumber(null)
  }

  let content = <StartGame onHandleStarGame={onHandleStarGame} />

  if (userNumber) {
    content = <Game numberSelected={userNumber} onHandleReset={onHandleReset} />
  }

  const title = userNumber ? "Play!" : "Welcome"
  if (!loaded) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={"large"} color={colors.primary} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Header title={title} />
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
