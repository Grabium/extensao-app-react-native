import React, {useEffect, useState} from "react";
import { View, Text, FlatList, Alert } from "react-native";
import cadastro from "../controllers/Cadastro";
import User from "./components/User";
import styles from "./styles/style";

export default function Listar(props){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        
        loadRegisters();
        
    }, []);

    function loadRegisters(){

        cadastro.list().then((resp)=>{
            //Alert.alert('Tela carregando');
            
            console.log('Recebendo dados do back-end...');
            console.log(resp.msg);
            console.log('Quantidade de dados: '+resp.dataLen);
            console.log(resp.data);
            
            setUsers(resp.data);
        });
    }

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Lista de Registros</Text>

            <FlatList
                data={users}
                keyExtractor={(item,index) => String(item.id)}
                renderItem={({item}) => <User itemUser={item}/>}
            />

            

            
        </View>
    )
}
