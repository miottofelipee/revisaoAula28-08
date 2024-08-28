import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

export default function Dino() {

  const navigation = useNavigation();
  return (
    <View>
      <Text>Dino</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}