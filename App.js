import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Pressable, Image, FlatList } from 'react-native';
import styles from './components/styles'; 

export default function App() {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState(require('./assets/img/vaso.jpg')); // imagem padrão

  // Opções com as imagens importadas via require
  const opcoes = [
    { key: 'vaso', label: 'Vaso de cerâmica', img: require('./assets/img/vaso.jpg') },
    { key: 'escultura', label: 'Escultura de cerâmica', img: require('./assets/img/escultura.jpg') },
    { key: 'enfeite', label: 'Enfeite artesanal', img: require('./assets/img/enfeite.jpg') },
    { key: 'prato', label: 'Prato decorativo', img: require('./assets/img/prato.jpg') },
  ];

  // Função para trocar a imagem conforme o texto digitado
  function trocarImagem() {
    const chave = name.trim().toLowerCase(); // remove espaços e transforma em minúsculo
    const item = opcoes.find(op => op.key === chave);

    if (item) {
      setImage(item.img);
    } else {
      // Se não encontrar, volta para a imagem padrão
      setImage(require('./assets/img/vaso.jpg')); 
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Cerâmica Fria</Text>

      {/* Adicione key para forçar atualização do componente Image */}
      <Image 
        key={name} 
        source={image} 
        style={styles.image} 
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da peça"
        value={name}
        onChangeText={setName}
      />

      <Pressable style={styles.button} onPress={trocarImagem}>
        <Text style={styles.buttonText}>Mostrar</Text>
      </Pressable>

      <Text style={styles.subtitle}>Sugestões:</Text>
      <FlatList
        data={opcoes}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>- {item.label}</Text>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}
