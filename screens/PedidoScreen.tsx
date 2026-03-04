import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native';

const PLATOS_MENU = [
  { id: '1', nombre: 'Pizza Familiar', precio: 15.50, imagen: 'https://img.freepik.com/foto-gratis/pizza-pizza-rellena-ingredientes-varios_1232-435.jpg' },
  { id: '2', nombre: 'Whopper Jr', precio: 12.00, imagen: 'https://img.freepik.com/foto-gratis/hamburguesa-carne-papas-fritas-aisladas-blanco_2829-14241.jpg' },
  { id: '3', nombre: 'Sushi Roll', precio: 18.00, imagen: 'https://img.freepik.com/foto-gratis/sushi-rollos-maki-bandeja_2829-18305.jpg' },
  { id: '4', nombre: 'Papas Fritas', precio: 4.50, imagen: 'https://img.freepik.com/foto-gratis/papas-fritas-crujientes-papel-madera_1150-10022.jpg' },
];

export default function PedidoScreen() {
  const [carrito, setCarrito] = useState<any[]>([]);

  const agregarAlCarrito = (plato: any) => {
    setCarrito([...carrito, { ...plato, cartId: Math.random().toString() }]);
  };

  const eliminarDelCarrito = (cartId: string) => {
    setCarrito(carrito.filter(item => item.cartId !== cartId));
  };

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const enviarPedido = () => {
    if (carrito.length === 0) return Alert.alert("Carrito vacío", "Agrega platos primero");
    Alert.alert("Pedido Enviado", `Total a pagar: $${total.toFixed(2)}`);
    setCarrito([]);
  };

  return (
    <View style={styles.mainContainer}>

      <View style={{ flex: 1.5 }}>
        <Text style={styles.sectionTitle}>Menú Disponible</Text>
        <FlatList
          data={PLATOS_MENU}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.menuCard}>
              <Image source={{ uri: item.imagen }} style={styles.menuImage} />
              <Text style={styles.platoNombre}>{item.nombre}</Text>
              <Text style={styles.platoPrecio}>${item.precio.toFixed(2)}</Text>
              <TouchableOpacity style={styles.btnAdd} onPress={() => agregarAlCarrito(item)}>
                <Text style={styles.btnAddText}>AGREGAR</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>


      <View style={styles.cartSection}>
        <Text style={styles.sectionTitle}>Mi Pedido Actual ({carrito.length})</Text>
        <FlatList
          data={carrito}
          keyExtractor={(item) => item.cartId}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.cartItemText}>{item.nombre}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.cartItemPrice}>${item.precio.toFixed(2)}</Text>
                <TouchableOpacity onPress={() => eliminarDelCarrito(item.cartId)}>
                  <Text style={styles.btnDelete}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No hay platos seleccionados</Text>}
        />


        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL:</Text>
            <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.btnConfirmar} onPress={enviarPedido}>
            <Text style={styles.btnConfirmarText}>CONFIRMAR PEDIDO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: '#333',
  },
  menuCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    width: 160,
    height: 220,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee'
  },
  menuImage: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  platoNombre: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  platoPrecio: {
    color: '#ff2600',
    fontWeight: 'bold',
    marginVertical: 5
  },
  btnAdd: {
    backgroundColor: '#ff2600',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  btnAddText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  },
  cartSection: {
    flex: 2,
    backgroundColor: '#f2f2f2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 20,
    elevation: 10
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cartItemText: {
    fontSize: 14,
    fontWeight: '500'
  },
  cartItemPrice: {
    fontWeight: 'bold',
    marginRight: 15
  },
  btnDelete: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    color: '#999'
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 15
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff2600'
  },
  btnConfirmar: {
    backgroundColor: '#28a745',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnConfirmarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});