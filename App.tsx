import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 24,
          marginTop: 48,
        }}
      >
        Evento de React Native
      </Text>
      <Text
        style={{
          color: '#aaaaaa',
        }}
      >
        Segunda, 19 de dezembro de 2022
      </Text>
    </View>
  );
}
