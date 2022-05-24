import { StyleSheet, Text, View } from 'react-native';
import params from './src/components/params'
import Field from './src/components/Field';
export default function App() {
  return (
    <View style={styles.container}>
      <Text> Tamanho da grade: {params.getCollumAmount()} x {params.getRowsAmout()}</Text>

      <Field/>
      <Field opened/>
      <Field opened nearMine={1}/>
      <Field opened nearMine={2}/>
      <Field opened nearMine={3}/>
      <Field opened nearMine={6}/>
      <Field mined />
      <Field mined opened/>
      <Field mined opened exploded/>
      <Field flagged/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
