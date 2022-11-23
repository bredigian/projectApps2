import { Button, Text, View } from "react-native"

import React from "react"
import colors from "../../constants/colors"
import { styles } from "./styles"

const Game = ({ numberSelected, onHandleReset }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>Number selected</Text>
      <Text style={styles.gameNumber}>{numberSelected}</Text>
      <Button title="Restart" color={colors.primary} onPress={onHandleReset} />
    </View>
  )
}

export default Game
