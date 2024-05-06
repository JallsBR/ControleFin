import {View, Text, StyleSheet,StatusBar, TouchableOpacity,TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons'

const statusBarHeigt = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 65;




const Login = () => {
  return (
        
    <View style={style.conteiner}>
            
        <View style={style.content}>
            <TouchableOpacity style={style.buttonUser}>
            <Feather name="user" size={100} color="#FFF"/>
            </TouchableOpacity>
        </View>

        <Text style={style.title}> Bem vindo de volta! </Text>
        
        <TextInput style={style.input} placeholder="E-mail" placeholderTextColor={'#888'}/>
        <TextInput style={style.input} placeholder="Senha" placeholderTextColor={'#888'}/>
        <Text style={style.esqueci}> Esqueci a senha </Text>

        <Text style={style.entrar}> Entrar </Text>

        <Text  style={style.links}> Criar nova conta </Text>


    </View>
  );
}

export default Login;

const style = StyleSheet.create({
    conteiner:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#1757a7',
        paddingTop: statusBarHeigt,
        paddingBottom:600,
        paddingEnd:16,
        paddingStart: 16
    },
    buttonUser:{
        marginTop: 200,
        width: 144,
        height: 144,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 144 / 2,
    },
    title:{
        color: '#FFF',
        fontSize: 21,
        fontWeight: "bold",
        padding: 14,
    },
    input:{
        backgroundColor: '#DDD',
        color: '#111',
        padding: 5,
        paddingStart:14,
        margin: 5,
        borderRadius: 15,
        width: "80%",
        marginTop: 10,
    },
    links:{
        margin: 10,
        fontSize: 13,
        color: '#fff',
    },
    esqueci:{
        textAlign:'right',
        margin: 5,
        fontSize: 13,
        color: '#fff',
        width: "80%",
    },
    entrar:{
        textAlign:'center',
        color: '#FFF',
        fontSize: 21,
        fontWeight: "bold",
        padding: 14,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderRadius: 35,
        width: "80%",
        margin: 5,
    }
});