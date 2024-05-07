import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'
const statusBarHeigt = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 65;

const Header = ({ name }) => {
  return (
    <View style={style.conteiner}>
      <View style={style.content}>
        <Text style={style.username}> {name}</Text>
        <TouchableOpacity style={style.buttonUser}>
            <Feather name="user" size={27} color="#FFF"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
    conteiner:{
        backgroundColor:'#1757a7',
        paddingTop: 25,
        paddingBottom:44,
        paddingEnd:16,
        paddingStart: 16,
        flexDirection: "row",
    },
    content:{
        flex:1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:'space-between',
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 44 / 2,
    }


})