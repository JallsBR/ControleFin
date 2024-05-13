import * as React from 'react';
import { NavigationContainer,StyleSheet, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import CadastroUsuario from './src/pages/CadastroUsuario';
import CadastroMovimento from './src/pages/CadastroMovimento';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown:false, tabBarActiveTintColor: '#1757a7'}}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" color={'#1757a7'} size={26} />
            ),
        }}/>

        <Tab.Screen
          name="Novo Usuário"
          component={CadastroUsuario}
          options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account-circle" color={'#1757a7'} size={26} />
            ),
        }}/>

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'#1757a7'} size={26} />
            ),
        }}/>

        <Tab.Screen
        name="Novo Movimento"
        component={CadastroMovimento}
        options={{
          tabBarLabel: 'Novo Movimento',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cash" color={'#1757a7'} size={26} />
          ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
