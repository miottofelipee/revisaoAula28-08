import { View, Text, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dino')}>
        <Text>Go to Dino</Text>
      </TouchableOpacity>
    </View>
  )
}