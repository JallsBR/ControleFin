import {View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../components/Header';
import Balanco from '../components/Balanco';
import Movimenta from '../components/Movimenta';
import Action from '../components/Action';

let list = [
  {
    id: 1,
    nome: 'Boleto de energia',
    valor: '780,00',
    data: '30/04/2024',
    tipo: 'd'
  },
  {
    id: 2,
    nome: 'Pensão Ex-Mulher',
    valor: '1500,00',
    data: '05/05/2024',
    tipo: 'd'
  },
  {
    id: 3,
    nome: 'Aluguel',
    valor: '1500,00',
    data: '10/05/2024',
    tipo: 'r'
  },
  {
    id: 4,
    nome: 'Freela Cemig',
    valor: '3500,00',
    data: '15/05/2024',
    tipo: 'r'
  },
  {
    id: 5,
    nome: 'Freela GC',
    valor: '4500,00',
    data: '17/05/2024',
    tipo: 'r'
  },
]

const Home = () => {
  return (
    <View style={style.conteiner}>

        <Header name ="Amélie Maria"/>

        <Balanco saldo = "5000,00" despesas = "-3000,00"  />

        <Action/>

        <Text style={style.title} > Ultimas Atualizações</Text>
        <FlatList
          style={style.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator = {false}
          renderItem={ ({item})=> <Movimenta data = {item} /> }
        />

    </View>
  );
}

export default Home;

const style = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor:'#e4e7d9',
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        padding: 14,
    },
    list:{
      flex:1,
      marginStart: 14,
      marginEnd: 14,

    }
});