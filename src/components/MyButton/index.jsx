import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ButtonText from '../ButtonText'

const MyButton = ( {screen, name} ) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <ButtonText text={name}/>
    </TouchableOpacity>
  )
}

export default MyButton