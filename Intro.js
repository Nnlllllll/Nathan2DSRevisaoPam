import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function Intro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.barra}/>

      <Image
        source={require('./assets/cachorro.png')}
        style={styles.imagem}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ótimo dia!</Text>
        <Text style={styles.subtitle}>Como deseja acessar?</Text>
      </View>
      
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => navigation.navigate('Home')}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={styles.opcoesButton}
       >
        <Text style={styles.googleButtonText}>Outras Opções</Text>
      </TouchableOpacity>

      
      <StatusBar style="auto" />
    </View>
  );
}

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
    backgroundColor: '#808080', 
    zIndex: 9999, 
  },
  imagem: {
    width: 350,
    height: 350,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    marginTop:450,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
  },
  googleButton: {
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
  opcoesButton:{
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
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
