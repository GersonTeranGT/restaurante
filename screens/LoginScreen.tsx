import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    if (!email || !password) {
      Alert.alert("Campos incompletos", "Por favor ingresa correo y contraseña");
      return;
    }

    navigation.navigate('botom');
  }

  return (
    <ImageBackground
      source={{ uri: "https://png.pngtree.com/thumb_back/fw800/background/20221011/pngtree-restaurant-menu-design-paper-cover-dining-photo-image_14986192.jpg" }}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>EMAIL</Text>
          <TextInput
            placeholder="ejemplo@camarero.com"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.fieldLabel}>PASSWORD</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={login}>
          <Text style={styles.textBtn}>INGRESO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('registro')}>
          <Text style={styles.linkText}>¿No tienes cuenta?
            <Text style={styles.linkHighlight}> Regístrate aquí</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50
  },
  title: {
    color: "#ff2600",
    fontSize: 30,
    marginBottom: 40,
    fontWeight: "900",
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'center'
  },
  fieldLabel: {
    color: '#ffffff',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '85%',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'white',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(238, 255, 0, 0.3)'
  },
  btnLogin: {
    backgroundColor: "#ee2400",
    height: 65,
    width: "85%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#d9ff01',
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  },
  textBtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2
  },
  linkText: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 60,
    fontSize: 15,
    marginBottom: 20
  },
  linkHighlight: {
    color: '#ff0800',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})