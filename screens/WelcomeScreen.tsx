import { Button, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

type RootStackParamList = {
    Registro: undefined;
    Login: undefined;
};
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export default function WelcomeScreen() {

    const navigation = useNavigation<WelcomeScreenNavigationProp>();
  return (
    <ImageBackground
    source={{uri: 'https://images.pexels.com/photos/4553378/pexels-photo-4553378.jpeg'}}
    style={styles.container}
            resizeMode="cover"
    >
      <View style={styles.container}>

                {/* PARTE SUPERIOR: Textos */}
                <View style={styles.topContainer}>
                    <Text style={styles.title}>¡BIENVENIDO!</Text>
                    <Text style={styles.subtitle}>Ingresa a tu cuenta o únete a nosotros</Text>
                </View>

                {/* Fondo de los botones */}
                <View style={styles.bottomContainer}>
                    {/* El "globo" que simula la onda */}
                    <View style={styles.pinkBackground} />

                    <View style={styles.buttonsContainer}>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Registro')}
                        >
                            <Text style={styles.buttonText}>REGISTRARSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 0.56,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    title: {
        fontSize: 52,
        fontWeight: 'bold',
        color: '#708bc0',
        marginBottom: 10,
        marginBlockStart: 150,
        
    },
    subtitle: {
        fontSize: 16,
        color: '#0c3aa5',
        fontWeight: 'bold',

    },
    bottomContainer: {
        flex: 0.51,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    
    pinkBackground: {
        position: 'absolute',
        top: 50,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#568F87',
        borderTopLeftRadius: width * 0.3,
        borderTopRightRadius: width * 0.3,
        zIndex: 0,
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 45,
        zIndex: 1,
    },
    button: {
        backgroundColor: '#ffffff',
        width: '90%',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 18,
        marginBottom: 15,
        
        shadowColor: "#2D3C59",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 9,
    },
    buttonText: {
        color: '#2D3C59',
        fontWeight: 'bold',
        fontSize: 18,

    },
})