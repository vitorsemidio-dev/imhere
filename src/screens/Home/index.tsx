import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Home() {
  const handleParticipantAdd = () => {
    console.log('Adicionar participante');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento de React Native</Text>
      <Text style={styles.eventDate}>Segunda, 19 de dezembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
