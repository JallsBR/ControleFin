import {View, Text, StyleSheet,StatusBar, TouchableOpacity,TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons'

const statusBarHeigt = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 65;




const CadastroUsuario = () => {
  return (
        
    <View style={style.conteiner}>
            
        <View style={style.content}>
            <TouchableOpacity style={style.buttonUser}>
            <Feather name="user" size={60} color="#FFF"/>
            </TouchableOpacity>
        </View>

        <Text style={style.title}> Criar Conta </Text>
        
        <TextInput style={style.input} placeholder="Nome" placeholderTextColor={'#888'}/>
        <TextInput style={style.input} placeholder="Fone" placeholderTextColor={'#888'}/>
        <TextInput style={style.input} placeholder="E-mail" placeholderTextColor={'#888'}/>
        <TextInput style={style.input} placeholder="Senha" placeholderTextColor={'#888'}/>
        <TextInput style={style.input} placeholder="Confirmar Senha" placeholderTextColor={'#888'}/>

        <Text style={style.criar}> Criar Conta </Text>

        <Text  style={style.links}> Já possui conta? Faça o Login </Text>


    </View>
  );
}

export default CadastroUsuario;

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
        marginTop: 320,
        width: 84,
        height: 84,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 84/ 2,
    },
    title:{
        color: '#FFF',
        fontSize: 21,
        fontWeight: "bold",
        padding: 8,
    },
    input:{
        backgroundColor: '#DDD',
        color: '#111',
        padding: 5,
        paddingStart:14,
        margin: 5,
        borderRadius: 15,
        width: "80%",
        marginTop: 5,
    },
    links:{
 
        fontSize: 13,
        color: '#fff',
    },
    esqueci:{
        textAlign:'right',
        fontSize: 13,
        color: '#fff',
        width: "80%",
    },
    criar:{
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