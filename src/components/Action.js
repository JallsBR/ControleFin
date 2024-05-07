import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'



const Action = () => {
  return (
    <ScrollView style={style.conteiner} horizontal={true} showsHorizontalScrollIndicator={false}>
        
        <TouchableOpacity style={style.actionButton}>
            <View style={style.areaButton}>
                <AntDesign name='caretleft' size={18} color='#000'/>
            </View>
            <Text>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.actionButton}>
            <View style={style.areaButton}>
                <AntDesign name='caretright' size={18} color='#000'/>
            </View>
            <Text>Saídas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.actionButton}>
            <View style={style.areaButton}>
                <AntDesign name='caretup' size={18} color='#000'/>
            </View>
            <Text>Investimentos</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

export default Action;

const style = StyleSheet.create({
    conteiner:{
      maxHeight: 65,
      marginStart: 14,
      marginTop: 14,
    },
    actionButton:{
      alignItems: 'center',
      marginRight: 30,    
    },
    areaButton:{
      backgroundColor: '#ccc',
      height: 30,
      width: 30,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',

    }
})