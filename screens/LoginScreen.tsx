import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'

export default function LoginScreen({navigation}: any) {
    function navegar(){
        navigation.navigate("Botom");
    }
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableOpacity 
      onPress={()=> navegar()}
      >
        <Text>Ingresar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})