import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar, 
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Acesse() {
  // Estados para gerenciar os inputs e checkbox
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [estaMarcado, setEstaMarcado] = useState(false);
  const navigation = useNavigation();

  // Função para mostrar/ocultar senha
  const alternarMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Barra superior cinza */}
      <View style={styles.barra}/>

      {/* Título e subtítulo da tela */}
      <Text style={styles.titulo}>Acesse</Text>
      <Text style={styles.subtitulo}>com E-mail e senha</Text>

      {/* Input de email */}
      <Text style={styles.subtitulo2}>E-mail</Text>
      <TextInput
        style={styles.entrada}
        placeholder="Digite seu E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input de senha com toggle de visibilidade */}
      <Text style={styles.subtitulo2}>Senha</Text>
      <View style={styles.containerSenha}>
        <TextInput
          style={styles.entradaSenha}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity 
          style={styles.iconeSenha} 
          onPress={alternarMostrarSenha}
        >
          <MaterialIcons 
            name={mostrarSenha ? 'visibility' : 'visibility-off'} 
            size={22} 
            color="#999" 
          />
        </TouchableOpacity>
      </View>

      {/* Checkbox para lembrar senha */}
      <View style={styles.caixaSelecao}>
          <Checkbox
           status={estaMarcado ? 'checked' : 'unchecked'}
           onPress={() => setEstaMarcado(!estaMarcado)}
           color={estaMarcado ? '#4630EB' : undefined}
          />
        <Text style={styles.textoCaixaSelecao}>Lembrar senha</Text>
      </View>    

      {/* Link para recuperar senha */}
      <TouchableOpacity onPress={() => {}} style={styles.botaoEsqueciSenha}>
        <Text style={styles.textoEsqueci}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botões de Acessar e Cadastrar */}
      <View style={styles.botoes}> 
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textoBotao2}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Separador visual */}
      <View style={styles.containerSeparador}>
        <View style={styles.linhaSeparadora} />
        <Text style={styles.textoSeparador}>Ou continue com</Text>
        <View style={styles.linhaSeparadora} />
      </View>

      {/* Botões de redes sociais */}
      <View style={styles.containerSocial}>
        <TouchableOpacity style={styles.botaoSocial}>
          <AntDesign name="google" size={22} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSocial}>
          <AntDesign name="facebook-square" size={22} color="#4267B2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
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
  titulo: {
    fontSize: 48,
    fontWeight: '700',
    color: '#333',
    marginBottom: 32,
    textAlign: 'left',
    marginLeft: 5,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666666',
    marginBottom: 32,
    textAlign: 'left',
    marginLeft: 8,
    marginTop: -25,
  },
  subtitulo2: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666666',
    marginBottom: 32,
    textAlign: 'left',
    padding: 5,
    marginLeft: 5,
    marginTop: 0,
  },
  entrada: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  containerSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginBottom: 16,
  },
  entradaSenha: {
    flex: 1,
    padding: 14,
    fontSize: 16,
    color: '#333',
  },
  iconeSenha: {
    padding: 10,
  },
  botaoEsqueciSenha:{
    alignSelf: 'flex-end',
    padding: 4,
    marginTop: 14,
  },
  botao: {
    backgroundColor: '#00b894',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botao2: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00b894',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botoes:{
    paddingTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  textoBotao2: {
    color: '#00b894',
    fontSize: 17,
    fontWeight: '600',
  },
  caixaSelecao:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 20,
    position: 'absolute',
    marginTop: 153,
  },
  textoCaixaSelecao: {
    fontSize: 14,
    color: '#666',
  },
  textoEsqueci: {
    marginTop: 14,
    fontSize: 14,
    color: '#00b894',
    textAlign: 'right',
    fontWeight: '500',
  },
  containerSeparador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },
  linhaSeparadora: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  textoSeparador: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
  containerSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  botaoSocial: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
  },
});
