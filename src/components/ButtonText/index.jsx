import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ButtonText = ( {text} ) => {
  return (
      <Text style={styles.text}>{text}</Text>
  )
}

export default ButtonText