import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = [
    'Rodrigo',
    'Vini',
    'Diego',
    'Rafael',
    'Jack',
    'Isa',
    'Mayk',
    'João',
    'Jane',
    'John',
  ];

  const handleParticipantAdd = () => {
    console.log('Adicionar participante');
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`Remover participante: ${name}`);
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
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguém chegou no seu evento ainda? {'\n'}
            Adicione participantes ao seu evento.
          </Text>
        )}
      />
    </View>
  );
}
