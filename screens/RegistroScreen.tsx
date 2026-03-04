import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'


export default function RegistroScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={{ uri: "https://png.pngtree.com/thumb_back/fw800/background/20221011/pngtree-restaurant-menu-design-paper-cover-dining-photo-image_14986192.jpg" }}
      style={styles.container}

    >

      <View style={styles.overlay}>
        <Text style={styles.title}>REGISTRO  CAMARERO</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldLabel}>EMAIL</Text>
          <TextInput
            placeholder="ejemplo@camarero.com"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}

            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.fieldLabel}>NOMBRE Y APELLIDO</Text>
          <TextInput
            placeholder="Bryan"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            keyboardType="default"

          />

          <Text style={styles.fieldLabel}>TELEFONO</Text>
          <TextInput
            placeholder="099999999"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            keyboardType="default"

          />


          <Text style={styles.fieldLabel}>CONTRASEÑA</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            secureTextEntry={true}

          />
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={LoginScreen}>
          <Text style={styles.textBtn}>REGISTRATE</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.linkText}>¿No tienes cuenta?
            <Text style={styles.linkHighlight}> Regístrate aquí</Text>
          </Text>
        </TouchableOpacity>


      </View>

    </ImageBackground>
  )
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
  btnBiometric: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center'
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