import {View, Text, StyleSheet,StatusBar, TextInput, } from 'react-native';
import Action from '../components/Action';
import Header from '../components/Header';
import Balanco from '../components/Balanco';








const statusBarHeigt = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 65;


const CadastroMovimento = () => {
  return (

    <View style={style.conteiner}>

        <Header name ="Amélie Maria"/>

        <Balanco saldo = "5000,00" despesas = "-3000,00"  />

        <Text style={style.title}> Nova movimentação </Text>

        <View style={style.form}>
            <TextInput style={style.input} placeholder="Nome" placeholderTextColor={'#444'}/>
            <TextInput style={style.input} placeholder="Valor" placeholderTextColor={'#444'}/>
            <TextInput style={style.input} placeholder="Data" placeholderTextColor={'#444'}/>

            <TextInput style={style.input} placeholder="Categoria" placeholderTextColor={'#444'}/>




            <View style={style.radioview} >
                <View style={style.radiounselect} ></View>
                <Text style={style.nomesunselect} > Receita </Text>
                <View style={style.radiounselect} ></View>
                <Text style={style.nomesunselect}> Despesas </Text>
            </View>

            <Text style={style.criar}> Cadastrar Movimentação </Text>
        </View>



    </View>
  );
}

export default CadastroMovimento;

const style = StyleSheet.create({
    conteiner:{
        backgroundColor:'#e4e7d9',
    },
    title:{
        textAlign:'center',
        color: '#1757a7',
        fontSize: 21,
        fontWeight: "bold",
        padding: 14,
    },
    form:{
        alignItems:'center'
    },
    input:{
        backgroundColor: '#FFF',
        color: '#111',
        padding: 3,
        paddingStart:14,
        margin: 4,
        borderRadius: 15,
        width: "80%",
        marginTop: 10,
    },
    links:{
        margin: 10,
        fontSize: 13,
        color: '#fff',
    },
    criar:{
        textAlign:'center',
        color: '#FFF',
        fontSize: 18,
        fontWeight: "bold",
        padding: 14,
        backgroundColor: '#1757a7',
        borderRadius: 35,
        width: "80%",
        margin: 15,
    },
    radioview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 15,

    },
    radiounselect: {
        backgroundColor:  '#aaa',
        width: 20,
        height:20,
        borderRadius: 10,
    },
    nomesunselect:{
        color: '#777',
    },
   
    despesasselect:{
        color: '#ea1d1d',
    },

    receitasselect:{
        color: '#2ecc71',
    },
   
    radioreceita: {
        backgroundColor: '#2ecc71',
        width: 20,
        height:20,
        borderRadius: 10,
    },
    radiodespesas: {
        backgroundColor: '#ea1d1d',
        width: 20,
        height:20,
        borderRadius: 10,
    },

});