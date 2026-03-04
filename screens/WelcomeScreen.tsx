import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <ImageBackground
    source={{uri: 'https://images.pexels.com/photos/4553378/pexels-photo-4553378.jpeg'}}
    >
      <Text>Bienvenido</Text>
      <Button title='Registrarme'>

      </Button>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    
})