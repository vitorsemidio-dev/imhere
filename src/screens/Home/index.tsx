import { useState } from 'react';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([
    'Rodrigo',
    'Vini',
    'Diego',
    'Rafael',
  ]);

  const handleParticipantAdd = () => {
    if (participants.includes('Jack')) {
      Alert.alert('Participante já adicionado', 'Jack já está na lista');
      return;
    }
    console.log('Adicionar participante');
    setParticipants([...participants, 'Jack']);
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover participante', `Deseja remover ${name} da lista?`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participants.filter((item) => item !== name));
          Alert.alert('Deletado');
        },
      },
    ]);
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
