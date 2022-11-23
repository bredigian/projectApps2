import {
  Alert,
  Button,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { Card, Input } from "../../components"
import React, { useState } from "react"

import colors from "../../constants/colors"
import { styles } from "./styles"

const StartGame = ({ onHandleStarGame }) => {
  const [inputNumber, setInputNumber] = useState("")
  const [confirmed, setConfirmed] = useState(false)
  const [numberSelected, setSelectedNumber] = useState("")

  const onHandleChange = (value) => {
    setInputNumber(value.replace(/[^0-9]/g, ""))
  }

  const onHandleReset = () => {
    setInputNumber("")
    setConfirmed(false)
  }

  const onHandleConfirm = () => {
    const numberSelected = parseInt(inputNumber, 10)
    if (isNaN(numberSelected) || numberSelected <= 0 || numberSelected > 99) {
      Alert.alert("Invalid number!", "Number is out of range", [
        { text: "Okay", style: "destructive", onPress: onHandleReset },
      ])
    } else {
      setConfirmed(true)
      setSelectedNumber(numberSelected)
      setInputNumber("")
    }
  }

  const confirmedOutput = () =>
    confirmed ? (
      <Card style={styles.confirmedOutput}>
        <Text style={styles.confirmedTitle}>Selected number</Text>
        <Text style={styles.confirmedNumber}>{numberSelected}</Text>
        <Button
          color={colors.primary}
          title="Start Game"
          onPress={() => onHandleStarGame(numberSelected)}
        />
      </Card>
    ) : null
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Select a number</Text>
          <Input
            style={styles.input}
            placeholder="0"
            maxLength={2}
            keyboardType="number-pad"
            blurOnSubmit
            autoCapitalize="none"
            autCorrect="false"
            onChangeText={onHandleChange}
            value={inputNumber}
          />
          <View style={styles.buttonContainer}>
            <Button
              color="#D57A66"
              title="Restart"
              onPress={onHandleReset}
              disabled={!inputNumber}
            />
            <Button color="#D57A66" title="Confirm" onPress={onHandleConfirm} />
          </View>
        </Card>
        {confirmedOutput()}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGame
