import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import CadastroUsuario from './src/pages/CadastroUsuario';
import CadastroMovimento from './src/pages/CadastroMovimento';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Novo Usuário" component={CadastroUsuario} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Novo Movimento" component={CadastroMovimento} />
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
