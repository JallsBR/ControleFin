import {View, Text,StyleSheet,} from 'react-native';

const Balanco = ({saldo, despesas}) => {
  return (
    <View style={style.conteiner}>

      <View style={style.itens}>
      <Text style={style.itensTitle}>Saldo</Text>
        <View style={style.content}>
          <Text style={style.simbolo} >R$</Text>
          <Text style={style.balanco}>{saldo}</Text>
        </View>
      </View>

      <View style={style.itens}>
      <Text style={style.itensTitle}>Despesas</Text>
        <View style={style.content}>
          <Text style={style.simbolo} >R$</Text>
          <Text style={style.gastos}>{despesas}</Text>
        </View>
      </View>

    </View>

  );
}

export default Balanco;

const style = StyleSheet.create({
  conteiner:{
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd:18,
    marginTop: -28,
    marginStart: 15,
    marginEnd: 15,
    borderRadius: 5,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex:99
  },
itensTitle:{
    fontSize: 20,
    fontWeight: "bold",
    color: '#bfc3c8',
  },
  content:{
    flexDirection:'row',
    alignItems: 'center',
  },
simbolo:{
  color: '#bfc3c8',
  marginRight: 6,
},
balanco:{
  fontSize: 20,
  color: '#2ecc71'
},
gastos:{
  fontSize: 20,
  color: '#ea1d1d'
},

})