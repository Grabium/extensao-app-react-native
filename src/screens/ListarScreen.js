import React, {useEffect, useState} from "react";
import { View, Text, FlatList, RefreshControl, Alert } from "react-native";
import cadastro from "../controllers/Cadastro";
import User from "./components/User";
import styles from "./styles/style";

export default function Listar(){

    const [refreshing, setRefreshing] = useState(false);
    const [users, setUsers] = useState([]);

    

    function loadRegisters(){

        cadastro.list().then((resp)=>{
            
            console.log('Recebendo dados do back-end...');
            console.log(resp.msg);
            console.log('Quantidade de dados: '+resp.dataLen);
            console.log(resp.data);
            
            setUsers(resp.data);
            Alert.alert('Dados Carregados');
        });
    }

    useEffect(()=>{
        
        loadRegisters();
        
    }, []);

    const onRefresh = ()=>{

        setRefreshing(true);//efeito visual de carregamento
        loadRegisters();
        setRefreshing(false);//pára de girar.

    }

    return(
        <View style={styles.container}>

            <Text style={styles.text}>Lista de Registros</Text>

            <FlatList
                data={users}
                keyExtractor={(item,index) => String(item.id)}
                renderItem={({item}) => <User itemUser={item} />}
                refreshing={refreshing}
                onRefresh={onRefresh}
            />

            

            
        </View>
    )
}
