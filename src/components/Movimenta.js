import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Movimenta = ( {data}) => {
    const [showValor, setShowValor] = useState(false);
  
  
    return (
      <TouchableOpacity style={style.conteiner} onPress={() => setShowValor(!showValor)}>
        <Text style={style.titledata}> {data.data} </Text>
        
        <View style={style.content}>
          <Text style={style.titlemov} > {data.nome} </Text>
          {showValor ? (
            <Text style={data.tipo == 'r' ? style.titlevalor : style.titledespesa} >
            {data.tipo == 'r' ? 'R$ ' : 'R$ -'} {data.valor}
            </Text>
          ) : (<View style={style.esconde} ></View>)}
          

        </View>

      </TouchableOpacity >
    );
  }
  
  export default Movimenta;

  const style = StyleSheet.create({
    conteiner:{
      flex:1,
      marginBottom: 18,
      borderBottomWidth: 0.5,
      borderBottomColor: '#aaa',
    },
    content:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    titledata:{
      fontSize: 13,
      fontWeight: "bold",
      color: '#aaa',
    },
    titlemov: {
      fontSize: 14,
      fontWeight: "bold",
    },
    titlevalor: {
      fontSize: 14,
      fontWeight: "bold",
      color: '#2ecc71',
    },
    titledespesa: {
      fontSize: 14,
      fontWeight: "bold",
      color: '#ea1d1d',
    },
    esconde:{
      marginTop: 6,
      width: 80,
      height: 10,
      backgroundColor: '#bbb',
      borderRadius: 8,
    }


  })