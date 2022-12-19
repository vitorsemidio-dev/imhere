import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento de React Native</Text>
      <Text style={styles.eventDate}>Segunda, 19 de dezembro de 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 48,
  },
  eventDate: {
    color: '#aaaaaa',
  },
});
