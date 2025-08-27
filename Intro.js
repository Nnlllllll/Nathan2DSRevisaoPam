import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Intro() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
        <Icon name="google" size={30} color="#DB4437" />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  imagem: {
    width: 350,
    height: 350,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DB4437',
    marginTop: 20,
    marginBottom: 30,
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#DB4437',
  },
});
