import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native"
import { styles } from './styles'
import { Participant } from "../../components/Participant"

export default function Home() {
  const participants = ['Ethan', 'Mary', 'Louis', 'Benedict', "Adelle", "Charlotte", "Adriam", "Liam", "Levi", "Elizabeth", "Arthur"]

  function handleParticipantAdd() {
    if (participants.includes("Charlotte")){
      return Alert.alert("Participante já registrado", `Já existe um participante com esse nome: ${name}, digite outro para ser acrescentado a lista.`);
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Participante já registrado", `Deseja remover esse participante ${name}?`, [
      {
        text: "Sim", 
        onPress: () => Alert.alert("Deletado")
      },
      {
        text: "Não", 
        style: "cancel"
      }
    ]
      
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Festa de Aniversário</Text>
      <Text style={styles.eventDate}>
        Sexta-feira, 30 de maio de 2025.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#f4ffff'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.nameList}>Lista de participantes</Text>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
