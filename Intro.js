import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Intro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Barra superior cinza */}
      <View style={styles.barra}/>

      {/* Imagem do cachorro */}
      <Image
        source={require('./assets/cachorro.png')}
        style={styles.imagem}
        resizeMode="contain"
      />
      
      {/* Container de texto com saudação */}
      <View style={styles.containerTexto}>
        <Text style={styles.titulo}>Ótimo dia!</Text>
        <Text style={styles.subtitulo}>Como deseja acessar?</Text>
      </View>
      
      {/* Botão de login com Google */}
      <TouchableOpacity
        style={styles.botaoGoogle}
        onPress={() => navigation.navigate('Acesse')}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={styles.textoBotaoGoogle}>Entrar com Google</Text>
      </TouchableOpacity>

      {/* Botão de outras opções de login */}
      <TouchableOpacity
        style={styles.botaoOpcoes}
      >
        <Text style={styles.textoBotaoGoogle}>Outras Opções</Text>
      </TouchableOpacity>

      {/* Status bar do dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    paddingTop: 50,
  },
  barra: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50, 
    backgroundColor: '#d9d9d9', 
    zIndex: 9999, 
  },
  imagem: {
    width: 350,
    height: 350,
    marginTop: 20,
  },
  containerTexto: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    marginTop:450,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
  },
  botaoGoogle: {
    position: 'absolute',
    marginTop:580,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  botaoOpcoes:{
    position:'absolute',
    marginTop: 650,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
    paddingTop: 10,
  },
  textoBotaoGoogle: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
