import { View, Text } from 'react-native'
import styles from './styles';
import MyButton from '../../components/MyButton';
import Title from '../../components/Title';

export default function Dino() {

  return (
    <View style={styles.container}>
      <Title title={'Dino'}/>
      <MyButton screen={'Home'} name={'Back to Home'}/>
    </View>
  )
}