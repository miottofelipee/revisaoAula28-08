import { View, Text, Touchable } from 'react-native'
import MyButton from '../../components/MyButton';
import styles from './styles';
import Title from '../../components/Title';


export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={'Home'}/>
      <MyButton screen={'Dino'} name={'Go to Dino'}/>
    </View>
  )
}